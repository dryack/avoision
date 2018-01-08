//  avosion - Lightweight browser redirector for those who are addicted to the web of ideas
//  Copyright (C) 2017 - 2018 David Ryack
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as published
//  by the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.
//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // if we're shut off return immediately
        if(filter_list_state === 3) { return }

        var url = details.url;
        return archiveUrlConstructor(url, filter_list_state);
    },
    {
        urls: ["<all_urls>"]
    },
    ['blocking']
);

// // Catch requests before the browser sends them
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         var url = details.url;
//
//
//         return archiveUrlConstructor(url);
//     },
//     // TODO load from a simple config file - hardcoding is terrible
//     {
//         urls: [ "*://*.washingtonpost.com/*",
//                 "*://*.wapo.com/*",
//                 "*://*.arstechnica.com/*",
//                 "*://*.buzzfeed.com/*",
//                 "*://*.nytimes.com/*",
//                 "*://*.pjmedia.com/*",
//                 "*://*.foxnews.com/*",
//                 "*://*.heatst.com/*",
//                 "*://*.dailykos.com/*",
//                 "*://*.gamespot.com/*",
//                 "*://*.espn.com/*",
//                 "*://*.variety.com/*",
//                 "*://*.abcnews/*",
//                 "*://*.abc.net.au/*",
//                 "*://*.ausgamers.com/*",
//                 "*://*.breitbart.com/*",
//                 "*://*.dailycaller.com/*",
//                 "*://*.dailymail.co.uk/*",
//                 "*://*.independent.co.uk/*",
//                 "*://*.msnbc.com/*",
//                 "*://*.nbcnews.com/*",
//                 "*://*.newyorker.com/*",
//                 "*://*.returnofkings.com/*",
//                 "*://*.rollingstones.com/*",
//                 "*://*.slate.com/*",
//                 "*://*.telegraph.co.uk/*",
//                 "*://*.yahoo.com/news/*",
//                 "*://*.zerohedge.com/*",
//                 "*://*.aftonbladet.se/*",
//                 "*://*.avclub.com/*",
//                 "*://*.birthmoviesdeath.com/*",
//                 "*://*.boingboing.net/*",
//                 "*://*.buzzfeed.com/*",
//                 "*://*.cracked.com/*",
//                 "*://*.dailydot.com/*",
//                 "*://*.dailystormer.is/*",
//                 "*://*.deadspin.com/*",
//                 "*://*.destructoid.com/*",
//                 "*://*.engadget.com/*",
//                 "*://*.fusion.net/*",
//                 "*://*.gamasutra.com/*",
//                 "*://*.gameplanet.co.nz/*",
//                 "*://*.gamesindustry.biz/*",
//                 "*://*.gawker.com/*",
//                 "*://*.gizmodo.com/*",
//                 "*://*.huffingtonpost.com/*",
//                 "*://*.io9.com/*",
//                 "*://*.infowars.com/*",
//                 "*://*.jalopnik.com/*",
//                 "*://*.jezebel.com/*",
//                 "*://*.kinja.com/*",
//                 "*://*.kotaku.com/*",
//                 "*://*.mediamatters.org/*",
//                 "*://*.motherjones.com/*",
//                 "*://*.neogaf.com/*",
//                 "*://*.newmediarockstars.com/*",
//                 "*://*.nymag.com/*",
//                 "*://*.offworld.com/*",
//                 "*://*.pcauthority.com.au/*",
//                 "*://*.pcgamer.com/*",
//                 "*://*.pointandclickbait.com/*",
//                 "*://*.polygon.com/*",
//                 "*://*.conservapedia.com/*",
//                 "*://*.rationalwiki.org/*",
//                 "*://*.rawstory.com/*",
//                 "*://*.recode.net/*",
//                 "*://*.rockpapershotgun.com/*",
//                 "*://*.salon.com/*",
//                 "*://*.splinternews.com/*",
//                 "*://*.takimag.com/*",
//                 "*://*.theblumpkin.com/*",
//                 "*://*.thedailybeast.com/*",
//                 "*://*.thegatewaypundit.com/*",
//                 "*://*.littlegreenfootballs.com/*",
//                 "*://*.theguardian.com/*",
//                 "*://*.themarysue.com/*",
//                 "*://*.theroot.com/*",
//                 "*://*.theverge.com/*",
//                 "*://*.vice.com/*",
//                 "*://*.vox.com/*",
//                 "*://*.wehuntedthemammoth.com/*",
//                 "*://*.wired.com/*",
//                 "*://*.houstonpress.com/*",
//                 "*://*.sfist.com/*",
//                 "*://*.laist.com/*",
//                 "*://*.gothamist.com/*",
//                 "*://*.worldstarhiphop.com/*",
//                 "*://*.latimes.com/*",
//                 "*://*.sfgate.com/*",
//                 "*://*.sfchronicle.com/*",
//                 "*://*.seattlepi.com/*",
//                 "*://*.nypost.com/*",
//                 "*://*.cnn.com/*",
//                 "*://*.powerlineblog.com/*",
//                 "*://*.mu.nu/*",
//                 "*://*.bloomberg.com/*",
//                 "*://*.washingtonexaminer.com/*",
//                 "*://*.reallifemag.com/*",
//                 "*://*.jeffro.wordpress.com/*",
//                 "*://*.avoiceformen.com/*",
//                 "*://*.hoover.org/*",
//                 "*://*.sfexaminer.com/*",
//                 "*://*.thecollegefix.com/*",
//                 "*://*.campusreform.org/*",
//                 "*://*.yiannopoulos.net/*",
//                 "*://*.48hills.org/*",
//                 "*://*.thefader.com/*",
//                 "*://*.foxbusiness.com/*",
//                 "*://*.pagesix.com/*",
//                 "*://*.jammiewf.com/*",
//                 "*://*.bigleaguepolitics.com/*",
//                 "*://*.victorygirlsblog.com/*",
//                 "*://*.althouse.blogspot.com/*",
//                 "*://*.classicalvalues.com/*",
//                 "*://*.businessinsider.com/*",
//                 "*://*.eastbaytimes.com/*",
//                 "*://*.eastbaytimes.com/*",
//                 "*://*.xojane.com/*",
//                 "*://*.cassiuslife.com/*",
//                 "*://*.yournewswire.com/*",
//                 "*://*.balkin.blogspot.com/*",
//                 "*://*.newsbusters.org/*",
//                 "*://*.therpgpundit.blogspot.com/*",
//                 "*://*.townhall.com/*",
//                 "*://*.spiked-online.com/*",
//                 "*://*.cnbc.com/*",
//                 "*://*.nationalreview.com/*",
//                 "*://*.theamericanconservative.com/*",
//                 "*://*.clickhole.com/*",
//                 "*://*.amazon.com/*"
//         ]
//     },
//     ['blocking'] // don't let the request go until we get back a redirectUrl (or other return in theory)
// );

// URL stripping
function strip_url(url) {
    //adapted from https://github.com/jparise/chrome-utm-stripper because i'm lazy
    var utm_re = new RegExp('([\?\&]utm_(source|medium|term|campaign|content|cid|reader|name)=[^&#]+)', 'ig');
    var queryStringIndex = url.indexOf('?');
    if (url.indexOf('utm_') > queryStringIndex) {
        var stripped = url.replace(utm_re, '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = stripped.substr(0, queryStringIndex) + '?' +
                stripped.substr(queryStringIndex + 1)
        }
        if (stripped !== url) {
            return {redirectUrl: stripped};
        }
    }
}

// Amazon related
function amznBuildDPUrl(amzurl, dp) {
    return {redirectUrl: amzurl + dp};
}

function amznExtractASIN(url, typeASIN) {
    var url_regex;
    var finalLocation;
    var dp;
    if(typeASIN === "cruft") {
        console.debug("Hit creativeASIN (cruft) decision (" + url + ")");
        //old version, less universal: var finalLocation = url.substr(url.search(/&creativeASIN=\w{10}(&|$|\?)/)+14,10);
        url_regex = new RegExp(/(.*amazon\.co(?:\..{2}|m)\/).*(?:creativeASIN=(\w{10})).*/);
        finalLocation = url.match(url_regex);
        dp = "dp/" + finalLocation[2];

    }
    if(typeASIN === "embedded") {
        console.debug("Hit creativeASIN (embedded) decision (" + url + ")");
        //old version, less universal:  var finalLocation = url.substr(url.search(/\/ASIN\/w{10}($|.*)/) + 41, 10);
        url_regex = new RegExp(/(.*amazon\.co(?:\..{2}|m)\/)(?:.+\/)(?:ASIN\/(\w{10})).*/);
        finalLocation = url.match(url_regex);
        dp = finalLocation[2];
    }
    var amzurl = finalLocation[1];
    return amznBuildDPUrl(amzurl, dp);
}

function amznExtractDP(url) {
    console.debug("Hit /dp/ decision (" + url + ")");
    //old version, less universal:  var finalLocation = url.substr(url.search(/\/dp\/\w{10}($|.*)/) + 4, 10);
    var finalLocation = url.match(/(.*amazon\.co(?:\..{2}|m)\/)(?:.+\/)?(dp\/\w{10}).*$/);
    var dp = finalLocation[2];
    var amzurl = finalLocation[1];
    return amznBuildDPUrl(amzurl, dp);
}

function amznKillEtcReqs(url, typeofreq) {
    console.debug("Killed amazon etc request: " + typeofreq);
    console.debug("Intended URL: " + url);
    return {redirectUrl: "https://127.0.0.1"};
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// URL constructors
function fullFeature(url) {
    var archiver = 'https://archive.is/?run=1&url=';
    // pjmedia crap
    var pjmediaSinglepage = '?singlepage=true'; // avoid the irritating More button
    var pjmediaRegex = new RegExp(/(pjmedia\.com)/); // detect we're on pjmedia site
    // amazon crap
    var amazonURL = new RegExp(/(^.*amazon\.com.*)/);
    // decide how to build redirectUrl
    if (url.match(amazonURL)) {
        // these are assorted requests amazon performs during mouse-over and scrolling, i've been unable to learn much
        // about them, but so far I haven't experienced any failures while blocking them
        if (url.match(/amazon.com\/follow\/log-metrics/)) {
            return amznKillEtcReqs(url, "follow/log-metrics");
        }
        if (url.match(/amazon.com\/gp\/redirection\/mexico\.html/)) {
            return amznKillEtcReqs(url, "redirection/mexico.html");
        }
        // where we can safely extract an ASIN
        if (url.match(/&creativeASIN=\w{10}(&|$)/)) {
            return amznExtractASIN(url, "cruft");
        }
        if (url.match(/^.*\/ASIN\/\w{10}\/.+/)) {
            return amznExtractASIN(url, "embedded");
        }
        if (url.match(/^.*\/dp\/\w{10}.+/)) {
            return amznExtractDP(url);
        }

        // in other cases just strip out all the crap
        var finalUrl = url.replace(/(tag=\w+(-19|-20|-21|-22|-23)(&|$))|(linkCode=\w+(&|$))|(creative=\w+(&|$))|(linkId=\w+(&|$))|(camp=\w+(&|$))/g, '');
        // TODO all the various amazon url references can pretty much be stripped as well - but there's alot of
        // experimenting to do in order to get that running
        console.debug("finalUrl:" + finalUrl);
        return {redirectUrl: finalUrl};
    }

    if (url.match(pjmediaRegex)) { // avoid pjmedia More button bullshit
        return {redirectUrl: archiver + url + pjmediaSinglepage};
    }

    // fallthrough option so to speak - our basic use
    return { redirectUrl: archiver + url };
}
function archiveOnly(url) {

}
function urlCleaningOnly(url) {

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function archiveUrlConstructor(url, selective_features) {
    // TODO do i want to leave this stuff hardcoded for ease of use, or do I want to make it configurable per website?
    // possibly a combination where the user can configure websites they know of...
    // meh, probably not really a possible in the way i thought
    switch (selective_features) {
        case 0: return fullFeature(url);
        case 1: return urlCleaningOnly(url);
        case 2: return archiveOnly(url);
        default:
            return
    }
}

// FEATURE Flag(?) to avoid amazon referrers

// FEATURE allow whitelisting amazon referrers
// assume referrers should be stopped

// FEATURE (doubtful) look for alternate links for youtube vids
// even if possible without more pain than i'm willing to accept, starting to go outside the original scope i'd intended

// FEATURE support http://unvis.it/