jQuery(document).ready(function ($) {

    $('a.abstract_more').click(function(event){
        event.preventDefault();
        $(this).parents('div.perEntryDiv').find('div.abstract').toggle();
    });

    $('a.bibdata_more').click(function(event){
        event.preventDefault();
        $(this).parents('div.perEntryDiv').find('div.bibdata').toggle();
    });

    $('a.bib_clipboard').click(function(event){
        event.preventDefault();
        var copyText = $(this).parents('div.perEntryDiv').find('div.bibdata').find('pre').find('code').text();
        // We now have the full bib entry, but we want to get rid of some entries.
        // i = ignore case, m = multiline, u = unicode, \r?\n matches arbitrary newlines
        copyText = copyText.replace(/(\r?\n\s*urldate.*,\s*\r?\n)/imu, '\n');
        copyText = copyText.replace(/(\r?\n\s*note.*,\s*\r?\n)/imu, '\n');
        copyText = copyText.replace(/(\r?\n\s*link.*,\s*\r?\n)/imu, '\n');
        copyText = copyText.replace(/(\r?\n\s*video.*,\s*\r?\n)/imu, '\n');
        copyText = copyText.replace(/(\r?\n\s*keywords.*,\s*\r?\n)/imu, '\n');
        // For the last one we have to deal with the fact that the abstract sometimes covers multiple lines, and contains arbitrary text
        // We do this by assuming it always occurs last in the bibtex.
        copyText = copyText.replace(/(,\s*\r?\n\s*abstract.*\}\s*\r?\n\})/imu, '\n}');
        navigator.clipboard.writeText(copyText);
    });
});

