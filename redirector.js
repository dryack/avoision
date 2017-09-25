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
                "*://*.foxnews.com/*",
                "*://*.heatst.com/*",
                "*://*.dailykos.com/*",
                "*://*.gamespot.com/*",
                "*://*.espn.com/*",
                "*://*.variety.com/*",
                "*://*.abcnews/*",
                "*://*.abc.net.au/*",
                "*://*.ausgamers.com/*",
                "*://*.breitbart.com/*",
                "*://*.dailycaller.com/*",
                "*://*.dailymail.co.uk/*",
                "*://*.independent.co.uk/*",
                "*://*.msnbc.com/*",
                "*://*.nbcnews.com/*",
                "*://*.newyorker.com/*",
                "*://*.returnofkings.com/*",
                "*://*.rollingstones.com/*",
                "*://*.slate.com/*",
                "*://*.telegraph.co.uk/*",
                "*://*.yahoo.com/news/*",
                "*://*.zerohedge.com/*",
                "*://*.aftonbladet.se/*",
                "*://*.avclub.com/*",
                "*://*.birthmoviesdeath.com/*",
                "*://*.boingboing.net/*",
                "*://*.buzzfeed.com/*",
                "*://*.cracked.com/*",
                "*://*.dailydot.com/*",
                "*://*.dailystormer.is/*",
                "*://*.deadspin.com/*",
                "*://*.destructoid.com/*",
                "*://*.engadget.com/*",
                "*://*.fusion.net/*",
                "*://*.gamasutra.com/*",
                "*://*.gameplanet.co.nz/*",
                "*://*.gamesindustry.biz/*",
                "*://*.gawker.com/*",
                "*://*.gizmodo.com/*",
                "*://*.huffingtonpost.com/*",
                "*://*.io9.com/*",
                "*://*.infowars.com/*",
                "*://*.jalopnik.com/*",
                "*://*.jezebel.com/*",
                "*://*.kinja.com/*",
                "*://*.kotaku.com/*",
                "*://*.mediamatters.org/*",
                "*://*.motherjones.com/*",
                "*://*.neogaf.com/*",
                "*://*.newmediarockstars.com/*",
                "*://*.nymag.com/*",
                "*://*.offworld.com/*",
                "*://*.pcauthority.com.au/*",
                "*://*.pcgamer.com/*",
                "*://*.pointandclickbait.com/*",
                "*://*.polygon.com/*",
                "*://*.conservapedia.com/*",
                "*://*.rationalwiki.org/*",
                "*://*.rawstory.com/*",
                "*://*.recode.net/*",
                "*://*.rockpapershotgun.com/*",
                "*://*.salon.com/*",
                "*://*.splinternews.com/*",
                "*://*.takimag.com/*",
                "*://*.theblumpkin.com/*",
                "*://*.thedailybeast.com/*",
                "*://*.thegatewaypundit.com/*",
                "*://*.littlegreenfootballs.com/*",
                "*://*.theguardian.com/*",
                "*://*.themarysue.com/*",
                "*://*.theroot.com/*",
                "*://*.theverge.com/*",
                "*://*.vice.com/*",
                "*://*.vox.com/*",
                "*://*.wehuntedthemammoth.com/*",
                "*://*.wired.com/*",
                "*://*.houstonpress.com/*",
                "*://*.sfist.com/*",
                "*://*.laist.com/*",
                "*://*.gothamist.com/*",
                "*://*.worldstarhiphop.com/*",
                "*://*.latimes.com/*",
                "*://*.sfgate.com/*",
                "*://*.sfchronicle.com/*",
                "*://*.seattlepi.com/*",
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
    var amazonReferralRegex = new RegExp(/(^.*amazon\.com.*(\/ref=|tag=|-19|-20|-21|-22|-23))/);
    var wlAmazonRegex = new RegExp(/(.*amazon\.com)/);
    
    if(url.match(amazonReferralRegex)){
        var finalUrl = url.split("?");

        // stop the *://*amazon.com/*/ref= crap
        if(finalUrl[0].match(/(\/ref=)/)) {
            finalUrl = url.split("/ref=");
            console.log("finalUrl.match() '/ref='");
            console.info(finalUrl);
        }

        console.info(finalUrl);
        return { redirectUrl: finalUrl[0] }; //FIXME appears to be falling through
    }   // amazon de-referral

    if(url.match(pjmediaRegex)) {
        console.info("hitting pjmedia");
        return {redirectUrl: archiver + url + pjmedia_singlepage};
    } // avoid pjmedia More button bullshit

    if(url.match(wlAmazonRegex)) { //TODO can probably be handled at the onBeforeRequest filter stage above
        return url;
    } // stop fucking with 'normal' amazon pages

    // send to archiver
    console.info("hitting standard archiver build");
    return {redirectUrl: archiver + url};  //FIXME amazon is borked when coming from archiver page - haven't examined the logic to think about this yet
}
// FEATURE Configure preferred archiver

// FEATURE Flag(?) to avoid amazon referrers

// FEATURE allow whitelisting amazon refferers
// assume referrers should be stopped

// FEATURE (doubtful) look for alternate links for youtube vids
// even if possible without more pain than i'm willing to accept, starting to go outside the original scope i'd intended

