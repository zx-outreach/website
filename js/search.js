function log(a) {
  console.log(a);
}

function search(s) {
  var reg = new RegExp((s || "").replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gim");
  $("main").find("li").each(function (index, elt) {
    var pubtype = "paper";
    var journal = $(elt).find(".journal").text();
    if (journal.match(/arxiv/gi) || journal.match(/preprint/gi)) {
      pubtype = "preprint";
    }
    if (journal.match(/thesis/gi)) {
      pubtype = "thesis";
    }
    if ($(elt).find(".bibdata").text().match(/inproceedings/gi)) {
      pubtype = "proceedings";
    }
    if ($(elt).find(".paperTitle").text().match(/Video/gi)) {
      pubtype = "video";
    }

    var should_accept = false;
    if ($('#viewall').is(':checked')) {
      should_accept = true;
    }
    if ($('#viewpapers').is(':checked') && pubtype === "paper") {
      should_accept = true;
    }
    if ($('#viewpreprints').is(':checked') && pubtype === "preprint") {
      should_accept = true;
    }
    if ($('#viewtheses').is(':checked') && pubtype === "thesis") {
      should_accept = true;
    }
    if ($('#viewproceedings').is(':checked') && pubtype === "proceedings") {
      should_accept = true;
    }
    if ($('#viewvideos').is(':checked') && (pubtype === "video" || $(elt).find(".bibdata").text().match(/video/))) {
      should_accept = true;
    }

    var find = function (selector) {
      if ($("#chk" + selector).is(":checked") || $("#chkall").is(":checked")) {
        return $(elt).find("." + selector).text()
      } else {
        return ""
      }
    }

    var h = "" + find("paperTitle") + find("authors") + find("abstract") + find("keywords") + find("journal")
    if (h.match(reg) && should_accept === true) {
      $(elt).show()
    } else {
      $(elt).hide()
    }
  })
}

function updateSearch() {
  // Show all years
  $("h2").show()
  search($("#txtSearch").val())
  // Hide all unused years
  let viewcount = 0;
  $("h2").filter(function (i, e) {
    return $(e).next().get(0).nodeName === "UL"
  }).filter(function (i, e) {
    const l = $(e).next().children().filter(function (j, f) {
      return $(f).css("display") !== "none"
    }).length;
    viewcount += l;
    return l === 0;
  }).hide();
  $('#viewcount').html("Showing " + viewcount.toString() + " items")
}

function forceSearch(s) {
  $("#txtSearch").val(s);
  updateSearch();
}

function forceSearchKW(s) {
  $('#chkkeywords').prop('checked', true);
  forceSearch(s);
}

function setSearchFiends(object) {
  object["search_inside"] && setSearchInside(object["search_inside"]);
  object["search_view"] && setSearchView(object["search_view"]);
  forceSearch(object["q"] || "");
}

function setSearchInside(inside) {
  ["all", "paperTitle", "authors", "abstract", "keywords", "journal"].forEach(
    function (s, i) {
      $('#chk' + s).prop('checked', inside[i] === '1');
    });
}

function setSearchView(view) {
  ["all", "papers", "preprints", "proceedings", "theses", "videos"].forEach(
    function (s, i) {
      $('#view' + s).prop('checked', view[i] === '1');
    });
}


// URI: https://zxcalculus.com/publications.html?q=queryString&search_inside=100000&search_view=100000
function fromURI(s) {
  let ret = {};
  for (substring of s.split('&')) {
    kv = substring.split('=');
    ret[kv[0]] = decodeURIComponent(kv[1]);
  }
  return ret;
}

function toURI(object) {
  return Object.entries(object)
    .map(function ([key, value]) {
      return `${key}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

$(function () { // Code to be executed once all the html is ready
    $("input[type='checkbox']").on("change", function () {
      updateSearch()
    });
    const s = window.location.search.substr(1);
    if (s) {
      setSearchFiends(fromURI(s))
    } else {
      updateSearch();
    }
  }
)
