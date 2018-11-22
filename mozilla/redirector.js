//  avosion - Lightweight browser redirector for those who are addicted to the web of ideas
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

// Catch requests before the browser sends them
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if(filter_list_state === 1) { return }

        return archiveUrlConstructor(url);
    },
    // TODO load from a simple config file - hardcoding is terrible
    {
        urls: [ "*://*.washingtonpost.com/*",
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
        ]
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
        urls: [ "*://*.vice.com/*" ]
    },
    ['blocking']
);

// archive via unv.is
/*chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if(filter_list_state === 1) {return}

        return archiveUnvConstructor(url);
    },
    {
        urls: []
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
        urls: [ "*://*.nytimes.com/*",
                "*://*.slate.com/*",
                "*://*.wired.com/*" ]
    },
    ['blocking']
);

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
    // TODO do i want to leave this stuff hardcoded for ease of use, or do I want to make it configurable per website?
    // possibly a combination where the user can configure websites they know of...
    // meh, probably not really a possible in the way i thought
    var archiver = 'https://archive.is/?run=1&url=';
    // pjmedia crap
    var pjmedia_singlepage = '?singlepage=true'; // avoid the irritating More button
    var pjmediaRegex = new RegExp(/(pjmedia\.com)/); // detect we're on pjmedia site
    // amazon crap
    var amazonReferralRegex = new RegExp(/(^.*amazon\.com.*(-19|-20|-21|-22|-23))/); // watching for referral links

    // decide how to build redirectUrl
    if(url.match(amazonReferralRegex)){ // amazon de-referral

        // if there's an ASIN available, let's just extract it and build the most basic possible URL without further
        // processing
        if(url.match(/&creativeASIN=\w{10}(&|$)/)) {
            var finalLocation = url.substr(url.search(/&creativeASIN=\w{10}(&|$)/)+14,10);
            return { redirectUrl: "https://amazon.com/dp/" + finalLocation };
        }
        // in other cases just strip out all the crap
        var finalUrl = url.replace(/(tag=\w+(-19|-20|-21|-22|-23)(&|$))|(linkCode=\w+(&|$))|(creative=\w+(&|$))|(linkId=\w+(&|$))|(camp=\w+(&|$))/g,'');
        console.debug(finalUrl);
        // TODO all the various amazon url references can pretty much be stripped as well - but there's alot of
        // experimenting to do in order to get that running
        return { redirectUrl: finalUrl };
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
