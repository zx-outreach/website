import json
from html import unescape
import tweepy
import bibtexparser
from generate_html import clean_text, normalise_name

def last_entry_to_tweet_text():
	with open('zx-papers.bib',encoding='utf-8') as bibtex_file:
		bib_database = bibtexparser.load(bibtex_file)
	# Get latest entry
	entry = bib_database.entries[-1]
	e = bibtexparser.customization.author(entry)
	bibtexparser.customization.convert_to_unicode(entry)

	authors = ""
	if len(e['author']) == 1:
	        authors = clean_text(normalise_name(e['author'][0]))
	else:
	        names = [clean_text(normalise_name(a)) for a in e['author']]
	        if len(names) > 6:
	        	names = names[:4]
	        	names.append("others")
	        for a in names[:-2]:
	        	authors += a + ", "
	        authors += names[-2] + " and "
	        authors += names[-1]

	authors = unescape(authors)
	title = unescape(clean_text(entry['title']))
	link = entry['link']
	abstract = unescape(clean_text(entry['abstract']))

	tweet = f"""New ZX paper:
	{title}
	by {authors}
	{link}
	"""
	chars_left = 240 - len(tweet)
	tweet += "\n" + abstract[:chars_left-4]
	i = tweet.rfind(' ')
	tweet = tweet[:i] + "..."
	return tweet

def tweet_last_entry():
	with open("twitter_credentials.json",'r', encoding='utf-8') as f:
	        cred = json.load(f)

	client = tweepy.Client(#bearer_token=bearer_token
		consumer_key=cred['api_key'],
		consumer_secret=cred['api_secret'],
		access_token=cred['access_token'],
		access_token_secret=cred['access_secret'])

	tweet = last_entry_to_tweet_text()
	client.create_tweet(text=tweet)

if __name__ == '__main__':
	tweet_last_entry()