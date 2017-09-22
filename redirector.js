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
    var pjmedia_singlepage = '?singlepage=true'; // avoid the irritating More button
    var pjmediaRegex = new RegExp(/(pjmedia\.com)/); // detect we're on pjmedia site
    // need to avoid this sort of shit as well:  https://www.amazon.com/Social-Justice-Warrior-Handbook/dp/1682614794?&_encoding=UTF8&tag=drhelenblog-20&linkCode=ur2&linkId=4e47f4a0dda35da042a8a009a844c95e&camp=1789&creative=9325
    if(url.match(pjmediaRegex)){
        return {redirectUrl: archiver + url + pjmedia_singlepage};
    } else {
        return { redirectUrl: archiver + url };
    }
}