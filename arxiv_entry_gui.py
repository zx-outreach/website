import sys
import arxiv
import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase
from PySide6.QtWidgets import (
    QApplication, QDialog, QVBoxLayout, QHBoxLayout, QLabel, QLineEdit,
    QPushButton, QTextEdit, QCheckBox, QMessageBox, QFileDialog
)
from PySide6.QtCore import Qt

def strip_arxiv_id(s):
    s = s.lower().replace("arxiv:","")
    if 'arxiv' in s:
        s = s.rsplit('/',1)[1]
    s = s.replace(".pdf","")
    if 'v' in s:
        s = s.rsplit('v', 1)[0]
    return s

def make_bib_entry(q, aid, keywords):
    writer = BibTexWriter()
    writer.indent = '    '
    writer.display_order = (
        'ENTRYTYPE', 'author', 'title', 'year', 'journal', 'booktitle', 'school',
        'editor', 'series', 'volume', 'issue', 'number', 'month', 'pages', 'numpages', 'publisher',
        'organization', 'acmid', 'address', 'isbn', 'issn', 'location', 'language',
        'doi', 'urldate', 'link', 'url', 'keyword',  'keywords', 'abstract'
    )
    title = q.title.replace("\n","").replace("  "," ")
    d = q.published
    entry = {
        'ENTRYTYPE': 'article',
        'title': "{" + title + "}",
        'year': str(d.year),
        'urldate': f"{d.year}-{d.month:02d}-{d.day:02d}"
    }
    authors = []
    ID = None
    for a in q.authors:
        a = str(a)
        try:
            first, last = a.split(' ',1)
        except:
            first = a
            last = a
        authors.append('{}, {}'.format(last, first))
        if ID is None:
            ID = last.replace(" ","").lower() + str(d.year)
            for k, v in {
                'í':'i','ó':'o','á':'a','é':'e','ú':'u',
                'ì':'i','ò':'o','à':'a','è':'e','ù':'u',
                'ö':'o','ä':'a','ü':'u','ï':'i','ë':'e',
                'õ':'o','ã':'a','ñ':'n','ç':'c'
            }.items():
                ID = ID.replace(k, v)
            first_author = ID
    t = q.title.lower().replace("the ","").replace("a ","").replace("an ", "")
    t = t.replace("towards ", "").replace("-","")
    ID += t.strip().split(" ",1)[0]
    entry['ID'] = ID.lower()
    link = str(q.links[0])
    if 'v' in link:
        link = link.rsplit('v',1)[0]
    entry['link'] = link
    entry['author'] = ' and '.join(authors)
    entry['abstract'] = q.summary.replace('\n',' ')
    if q.doi:
        entry['doi'] = q.doi
    if q.journal_ref:
        entry['journal'] = q.journal_ref
    else:
        entry['journal'] = "arXiv preprint arXiv:" + aid
    entry['keywords'] = keywords
    db = BibDatabase()
    db.entries = [entry]
    data = writer.write(db)
    for k, v in {
        "í":r"{\'i}","é":r"{\'e}","á":r"{\'a}","ó":r"{\'o}","ú":r"{\'u}",
        "ì":r"{\`i}","è":r"{\`e}","à":r"{\`a}","ò":r"{\`o}","ù":r"{\`u}",
        "ö":r'{\"o}',"ä":r'{\"a}',"ë":r'{\"e}',"ï":r'{\"i}',"ü":r'{\"u}',
        "õ":r'{\~o}',"ã":r'{\~a}',"ñ":r'{\~n}',"ç":r'\c{c}'
    }.items():
        data = data.replace(k, v)
    return data, entry['ID'], authors[0].split(',')[0]

class ArxivDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("arXiv Paper Processor")
        self.resize(700, 600)
        self.layout = QVBoxLayout(self)

        # Step 1: Input arXiv link
        self.link_label = QLabel("Enter arXiv link or ID:")
        self.link_input = QLineEdit()
        self.fetch_button = QPushButton("Fetch Paper Info")
        self.fetch_button.clicked.connect(self.fetch_info)
        self.layout.addWidget(self.link_label)
        self.layout.addWidget(self.link_input)
        self.layout.addWidget(self.fetch_button)

        # Step 2: Show extracted info
        self.info_box = QTextEdit()
        self.info_box.setReadOnly(True)
        self.info_box.hide()
        self.layout.addWidget(self.info_box)

        # Step 3: Keywords
        self.keywords_label = QLabel("Enter comma-separated keywords:")
        self.keywords_input = QLineEdit()
        self.keywords_label.hide()
        self.keywords_input.hide()
        self.layout.addWidget(self.keywords_label)
        self.layout.addWidget(self.keywords_input)

        # Step 4: Checkboxes for follow-up steps
        self.cb_bib = QCheckBox("Insert into zx-papers.bib")
        self.cb_html = QCheckBox("Recompile HTML")
        self.cb_git = QCheckBox("Push to GitHub")
        self.cb_tweet = QCheckBox("Tweet about it")
        for cb in [self.cb_bib, self.cb_html, self.cb_git, self.cb_tweet]:
            cb.hide()
            self.layout.addWidget(cb)

        # Step 5: Run button
        self.run_button = QPushButton("Run Selected Steps")
        self.run_button.clicked.connect(self.run_steps)
        self.run_button.hide()
        self.layout.addWidget(self.run_button)

        self.paper = None
        self.aid = None
        self.bibtex = None
        self.bib_id = None
        self.first_author = None

    def fetch_info(self):
        aid = strip_arxiv_id(self.link_input.text().strip())
        if not aid:
            QMessageBox.warning(self, "Error", "Please enter a valid arXiv link or ID.")
            return
        try:
            client = arxiv.Client()
            search = arxiv.Search(id_list=[aid])
            q = next(client.results(search))
        except Exception as e:
            QMessageBox.critical(self, "Fetch Error", f"Could not fetch arXiv info: {e}")
            return
        self.paper = q
        self.aid = aid
        info = f"<b>Title:</b> {q.title}<br><b>Authors:</b> {', '.join(str(a) for a in q.authors)}<br>"
        info += f"<b>Published:</b> {q.published.strftime('%Y-%m-%d')}<br>"
        info += f"<b>Abstract:</b> {q.summary}<br>"
        if q.doi:
            info += f"<b>DOI:</b> {q.doi}<br>"
        if q.journal_ref:
            info += f"<b>Journal Reference:</b> {q.journal_ref}<br>"
        self.info_box.setHtml(info)
        self.info_box.show()
        self.keywords_label.show()
        self.keywords_input.show()
        for cb in [self.cb_bib, self.cb_html, self.cb_git, self.cb_tweet]:
            cb.show()
        self.run_button.show()

    def run_steps(self):
        keywords = self.keywords_input.text().strip()
        if not keywords:
            QMessageBox.warning(self, "Error", "Please enter keywords.")
            return
        self.bibtex, self.bib_id, self.first_author = make_bib_entry(self.paper, self.aid, keywords)
        msg = ""
        if self.cb_bib.isChecked():
            try:
                with open("zx-papers.bib", 'a', encoding='utf-8') as f:
                    f.write("\n" + self.bibtex)
                msg += "Added to zx-papers.bib\n"
            except Exception as e:
                QMessageBox.critical(self, "File Error", f"Could not write to zx-papers.bib: {e}")
                return
        if self.cb_html.isChecked():
            try:
                import generate_html
                generate_html.main()
                msg += "HTML recompiled\n"
            except Exception as e:
                QMessageBox.critical(self, "HTML Error", f"Could not recompile HTML: {e}")
                return
        if self.cb_git.isChecked():
            import subprocess
            try:
                subprocess.run(["git", "add", "zx-papers.bib", "publications.html", "publications.rss", "map.html"], check=True)
                subprocess.run(["git", "commit", "-m", f"Added paper by {self.first_author} arXiv:{self.aid}"], check=True)
                subprocess.run(["git", "push"], check=True)
                msg += "Pushed to GitHub\n"
            except Exception as e:
                QMessageBox.critical(self, "Git Error", f"Git operation failed: {e}")
                return
        if self.cb_tweet.isChecked():
            try:
                import twitterposting
                twitterposting.tweet_last_entry()
                msg += "Tweeted about it\n"
            except Exception as e:
                QMessageBox.critical(self, "Twitter Error", f"Could not tweet: {e}")
                return
        if not msg:
            msg = "No steps selected."
        QMessageBox.information(self, "Done", msg)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    dlg = ArxivDialog()
    dlg.show()
    sys.exit(app.exec())