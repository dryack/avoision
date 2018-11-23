//  avoision - Lightweight browser redirector for those who are addicted to the web of ideas
//  Copyright (C) 2017-2018 David Ryack
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

const TRACKERS_BY_ROOT = {

    // Google's Urchin Tracking Module
    'utm_': [
        'source',
        'medium',
        'term',
        'campaign',
        'content',
        'name',
        'cid',
        'reader',
        'viz_id',
        'pubreferrer',
        'swu'
    ],

    // Adobe Omniture SiteCatalyst
    'IC': [
        'ID'
    ],

    // Adobe Omniture SiteCatalyst
    'ic': [
        'id'
    ],

    // Hubspot
    '_hs': [
        'enc',
        'mi'
    ],

    // Marketo
    'mkt_': [
        'tok'
    ],

    // MailChimp
    // https://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/
    'mc_': [
        'cid',
        'eid'
    ],

    // comScore Digital Analytix?
    // http://www.about-digitalanalytics.com/comscore-digital-analytix-url-campaign-generator
    'ns_': [
        'source',
        'mchannel',
        'campaign',
        'linkname',
        'fee'
    ],

    // Simple Reach
    'sr_': [
        'share'
    ],

    // Vero
    'vero_': [
        'conv',
        'id'
    ],

    // Non-prefixy and 1-offs
    '': [
        // Facebook Click Identifier
        // http://thisinterestsme.com/facebook-fbclid-parameter/
        'fbclid',
        // Google Click Identifier
        'gclid',
        // Some other Google Click thing
        'ocid',
        // Unknown
        'ncid',
        // Unknown
        'nr_email_referer',
        // Generic-ish. Facebook, Product Hunt and others
        'ref',
        // Alibaba-family 'super position model' tracker:
        // https://github.com/newhouse/url-tracking-stripper/issues/38
        'spm'
    ]
};


const ViaURLS = [
    "*://*.vice.com/*",
    "*://*.nationalreview/*"
];
const UnvisURLS = [];
const OutlineURLS = [
    "*://*.nytimes.com/*",
    "*://*.slate.com/*",
    "*://*.wired.com/*"
];
const ArchiveURLS =  [
    "*://*.washingtonpost.com/*",
    "*://*.wapo.com/*",
    "*://*.arstechnica.com/*",
    "*://*.buzzfeed.com/*",
    "*://*.pjmedia.com/*",
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
    "*://*.vox.com/*",
    "*://*.wehuntedthemammoth.com/*",
    "*://*.houstonpress.com/*",
    "*://*.sfist.com/*",
    "*://*.laist.com/*",
    "*://*.gothamist.com/*",
    "*://*.worldstarhiphop.com/*",
    "*://*.latimes.com/*",
    "*://*.sfgate.com/*",
    "*://*.sfchronicle.com/*",
    "*://*.seattlepi.com/*",
    "*://*.nypost.com/*",
    "*://*.cnn.com/*",
    "*://*.powerlineblog.com/*",
    "*://*.mu.nu/*",
    "*://*.bloomberg.com/*",
    "*://*.washingtonexaminer.com/*",
    "*://*.reallifemag.com/*",
    "*://*.jeffro.wordpress.com/*",
    "*://*.avoiceformen.com/*",
    "*://*.hoover.org/*",
    "*://*.sfexaminer.com/*",
    "*://*.thecollegefix.com/*",
    "*://*.campusreform.org/*",
    "*://*.yiannopoulos.net/*",
    "*://*.48hills.org/*",
    "*://*.thefader.com/*",
    "*://*.foxbusiness.com/*",
    "*://*.pagesix.com/*",
    "*://*.jammiewf.com/*",
    "*://*.bigleaguepolitics.com/*",
    "*://*.victorygirlsblog.com/*",
    "*://*.althouse.blogspot.com/*",
    "*://*.classicalvalues.com/*",
    "*://*.businessinsider.com/*",
    "*://*.eastbaytimes.com/*",
    "*://*.xojane.com/*",
    "*://*.cassiuslife.com/*",
    "*://*.yournewswire.com/*",
    "*://*.balkin.blogspot.com/*",
    "*://*.newsbusters.org/*",
    "*://*.therpgpundit.blogspot.com/*",
    "*://*.townhall.com/*",
    "*://*.spiked-online.com/*",
    "*://*.cnbc.com/*",
    "*://*.nationalreview.com/*",
    "*://*.theamericanconservative.com/*",
    "*://*.thefederalist.com/*",
    "*://*.hoodline.com/*",
    "*://*.everydayfeminism.com/*",
    "*://*.theothermccain.com/*",
    "*://*.gamesradar.com/*",
    "*://*.newsweek.com/*",
    "*://*.redstate.com/*",
    "*://*.politico.com/*",
    "*://*.americanthinker.com/*",
    "*://*.metalsucks.net/*",
    "*://*.massivelyop.com/*",
    "*://*.gamerevolution.com/*",
    "*://*.theoutline.com/*",
    "*://*.aclu.org/*",
    "*://*.dictionary.com/*",
    "*://*.thesaurus.com/*",
    "*://*.xkcd.com/*",
    "*://*.clickhole.com/*",
    "*://*.amazon.com/*tag=*"
];

// so try to build a blocking onBeforeRequest that builds the filters list for the next onBeforeRequest in line
//var filters = {
//    urls: ducky(),
//    types: ["main_frame"]
//};
function cleaning(details){
    var url = details.url;
    console.debug("Details: " + details.requestId);
    console.debug("\tDetails: " + details.url);
    if(url.endsWith("?singlepage=true")) { return }

    return cleanUrl(url);
    // not sure I care to shut this off, but the option exists
    //if(filter_list_state === 1) { return }
}
// Catch everything for cleaning urls, etc
chrome.webRequest.onBeforeRequest.addListener(
    cleaning,
    {
        urls: generateTrackerPatternsArray(),
        types: ["main_frame"]
    },
    ['blocking']
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if(filter_list_state === 1) { return }

        return archiveUrlConstructor(url);
    },
    // TODO load from a simple config file - hardcoding is terrible
    {
        urls: ArchiveURLS
    },
    ['blocking'] // don't let the request go until we get back a redirectUrl (or other return in theory)
);

// archive via via.hypothes.is
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if(filter_list_state === 1) {return}

        return archiveViaConstructor(url);
    },
    {
        urls: ViaURLS
    },
    ['blocking']
);

// Commented out until needed
// archive via unv.is
/*chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if(filter_list_state === 1) {return}

        return archiveUnvConstructor(url);
    },
    {
        urls: UnvisURLS
    },
    ['blocking']
);*/

// archive via outline.com
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if (filter_list_state === 1) {return}

        return archiveOutlineConstructor(url);
    },
    {
        urls: OutlineURLS
    },
    ['blocking']
);

function cleanUrl(url) {
    var strippedUrl = removeTrackersFromUrl(url);

    return { redirectUrl: strippedUrl}

}

// build the archive.is request url using via.hypothes.is
function archiveViaConstructor(url) {
    var archiver = 'https://archive.is/?run=1&url=https://via.hypothes.is/';
    var finalUrl = archiver + url;

    return { redirectUrl: finalUrl };
}

// build the archive.is request url using unv.is
function archiveUnvConstructor(url) {
    var archiver = 'https://archive.is/?run=1&url=https://unv.is/';
    var finalUrl = archiver + url.replace(/(http|https):\/\//, '');

    return { redirectUrl: finalUrl };
}

// build the archive.is request url using outline.com
function archiveOutlineConstructor(url) {
    var archiver = 'https://archive.is/?run=1&url=https://outline.com/';
    var finalUrl = archiver + url;

    return { redirectUrl: finalUrl };
}

// Build the archive.is request url
function archiveUrlConstructor(url){
    var archiver = 'https://archive.is/?run=1&url=';

    // pjmedia crap
    var pjmedia_singlepage = '?singlepage=true'; // avoid the irritating More button
    var pjmediaRegex = new RegExp(/(pjmedia\.com)/); // detect we're on pjmedia site
    if(url.endsWith(pjmedia_singlepage)) {
        return { redirectUrl: archiver + url}
    }
    if(url.match(pjmediaRegex)) { // avoid pjmedia More button bullshit

        return { redirectUrl: archiver + url + pjmedia_singlepage };
    }

     // fallthrough option so to speak - our basic use
    return { redirectUrl: archiver + url };
}
// FEATURE Flag(?) to avoid amazon referrers

// FEATURE allow whitelisting amazon referrers
// assume referrers should be stopped

// FEATURE (doubtful) look for alternate links for youtube vids
// even if possible without more pain than i'm willing to accept, starting to go outside the original scope i'd intended

// FEATURE support http://unvis.it/


// shamelessly stolen from the excellent https://github.com/newhouse/url-tracking-stripper whose code I've really come
// to admire


// Go through all the trackers by their root and turn them into a big regex...
const TRACKER_REGEXES_BY_ROOT = {};
for (let root in TRACKERS_BY_ROOT) {
    // Old way, matching at the end 1 or unlimited times.
    // TRACKER_REGEXES_BY_ROOT[root] = new RegExp("((^|&)" + root + "(" + TRACKERS_BY_ROOT[root].join('|') + ")=[^&#]+)", "ig");
    // New way, matching at the end 0 or unlimited times. Hope this doesn't come back to be a problem.
    TRACKER_REGEXES_BY_ROOT[root] = new RegExp("((^|&)" + root + "(" + TRACKERS_BY_ROOT[root].join('|') + ")=[^&#]*)", "ig");
}

// Generate the URL patterns used for webRequest filtering
// https://developer.chrome.com/extensions/match_patterns
function generateTrackerPatternsArray(TRACKERS_BY_ROOT) {
    const array = [];
    for (let root in TRACKERS_BY_ROOT) {
        for (let i=0; i < TRACKERS_BY_ROOT[root].length; i++) {
            array.push( "*://*/*?*" + root + TRACKERS_BY_ROOT[root][i] + "=*" );
        }
    }

    return array;
}

// Actually strip out the tracking codes/parameters from a URL and return the cleansed URL
function removeTrackersFromUrl(url) {
    if (!url) return url;

    const urlPieces = url.split('?');

    // If no params, nothing to modify
    if (urlPieces.length === 1) {
        return url;
    }

    // Go through all the pattern roots
    for (let root in TRACKER_REGEXES_BY_ROOT) {
        // If we see the root in the params part, then we should probably try to do some replacements
        if (urlPieces[1].indexOf(root) !== -1) {
            urlPieces[1] = urlPieces[1].replace(TRACKER_REGEXES_BY_ROOT[root], '');
        }
    }

    // If we've collapsed the URL to the point where there's an '&' against the '?'
    // then we need to get rid of that.
    while (urlPieces[1].charAt(0) === '&') {
        urlPieces[1] = urlPieces[1].substr(1);
    }

    return urlPieces[1] ? urlPieces.join('?') : urlPieces[0];
}