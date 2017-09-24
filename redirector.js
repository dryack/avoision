// Catch requests before the browser sends them
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;

        return archiveUrlConstructor(url);
    },
    // TODO load from a simple config file - hardcoding is terrible
    {
        urls: [ "*://*.washingtonpost.com/*",
                "*://*.wapo.com/*",
                "*://*.arstechnica.com/*",
                "*://*.buzzfeed.com/*",
                "*://*.nytimes.com/*",
                "*://*.pjmedia.com/*",
                "*://*.amazon.com/*",
                "*://*.cnn.com/*"
        ]
    },
    ['blocking']
);

// Build the archive.is request url
function archiveUrlConstructor(url){
    var archiver = 'https://archive.is/?run=1&url=';
    // TODO do i want to leave this stuff hardcoded for ease of use, or do I want to make it configurable per website?
    // possibly a combination where the user can configure websites they know of...  { "website"
    var pjmedia_singlepage = '?singlepage=true'; // avoid the irritating More button
    var pjmediaRegex = new RegExp(/(pjmedia\.com)/); // detect we're on pjmedia site
    var amazonReferralRegex = new RegExp(/(amazon\.com.*tag=)/);
    // TODO need to avoid this sort of shit as well:
    // https://www.amazon.com/Social-Justice-Warrior-Handbook/dp/1682614794?&_encoding=UTF8&tag=drhelenblog-20&linkCode=ur2&linkId=4e47f4a0dda35da042a8a009a844c95e&camp=1789&creative=9325


    if(url.match(amazonReferralRegex)){
        var finalUrl = url.split("?&_");
        console.debug(finalUrl);
        return { redirectUrl: finalUrl[0] }; //FIXME appears to be falling through
    } else if(url.match(pjmediaRegex)){
        console.debug("hitting pjmedia");
        return {redirectUrl: archiver + url + pjmedia_singlepage};
    } else {
        console.debug("hitting standard archiver build");
        return { redirectUrl: archiver + url };
    }
}
// FEATURE Configure preferred archiver

// FEATURE Flag(?) to avoid amazon referrers

// FEATURE allow whitelisting amazon refferers
// assume referrers should be stopped

// FEATURE (doubtful) look for alternate links for youtube vids
// even if possible without more pain than i'm willing to accept, starting to go outside the original scope i'd intended


