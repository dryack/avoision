// Catch requests before the browser sends them
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;

        return archiveUrlConstructor(url);
    },
    {
        urls: [ "*://*.washingtonpost.com/*",
                "*://wapo.com/*",
                "*://arstechnica.com/*",
                "*://buzzfeed.com/*",
                "*://*.nytimes.com/*",
                "*://pjmedia.com/*",
                "*://cnn.com/*"
        ]
    },
    ['blocking']
);

// Build the archive.is request url
function archiveUrlConstructor(url){
    var archiver = 'https://archive.is/?run=1&url=';

    return { redirectUrl: archiver + url };
}