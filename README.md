# avoision
![](https://frinkiac.com/gif/S07E15/381314/384317.gif?b64lines=IEkgZG9uJ3Qgc2F5ICJldmFzaW9uLiIgCiBJIHNheSAiYXZvaXNpb24uIg==)

I prefer to call it avoision - because some websites are egregious.

In day to day life we vote with our wallets, but the online world is a different place.  We vote with our clicks.
Avoision: A configurable (Real Soon Now™), and free add-on for your browser gives you the power to take back
control... or whatever... be a minor irritation while *feeling* like you have some power.

---

## features

* intercepts requests to sites that you don't want to support and redirects to a MementoWeb API supporting web archiver (defaulting to archive.is, which you should totally [donate](https://liberapay.com/archiveis) to if you find this project useful)
* with the anti-web-archiver arms race ongoing, we now support multiple methods (currently via.hypothesis and unv.is) to obtain a good page to send over to archive.is
* right-click context menu to send current page to archive.is (including using via.hypothes.is or unv.is as pre-processors)
* cleans amazon referral links

## planned

* clean up tracking urls
* configurability via text file
* detect and remove non-amazon affiliate links as I find them
* ability to whitelist amazon referral links

## installation

_It's unlikely I'll ever submit this to google or mozilla; I don't trust them._

##### Chromium-based browsers
1. Download [chromium](https://github.com/dryack/avoision/tree/master/chromium) folder to a convenient location
2. Point your browser to chrome://extensions
3. Ensure you're in developer mode
4. Click on "Load unpacked extension"
5. Select the folder where you saved the files listed above

##### Mozilla-based browser
1. Download [avoision.zip](https://github.com/dryack/avoision/blob/master/mozilla/avoision.zip) to a convenient location
2. Open the menu, select Add-ons
3. Click on the gear
4. Select _Install Add-on from file..._
5. Open the ZIP file and watch as Firefox refuses to install it - I prefer [Waterfox](https://www.waterfoxproject.org/) anyway

(I hear that it might work in greasemonkey on Firefox, but haven't tried it myself)

## faq

Q - _I'd like you to add \<feature>._<br>
A - Don't make me code in Javascript.  Or go ahead and fill out an issue.  I'm not saying it couldn't happen.

Q - _I'd like to argue over the inclusion or exclusion of a website._<br>
A - Feel free to send me your argument by opening an issue [here](https://github.com/dryack/avoision/issues/new/choose), I'll be happy to read think about them.

Q - _Don't you think it's immoral|unethical to steal someone's content or otherwise deprive the content creator(s) of a reasonable chance at income?_<br>
A - No.  While it's not the world as I'd like it to be, the power gradient between internet providers and content creators has grown dangerous to the public well-being and liberty.  These companies have come to believe that there should be no constraints upon them, as they are not state actors.  Despite the protections and subsidies afforded the industry by the state, they claim to be at once acting upon the legitimate and necessary profit motive, as well as, in many cases, a nebulous "duty" to form and change the opinions of the public.  They are happy to manipulate us; to pursue, collate, and sell our private lives and data.  They do this while also claiming the crony-capitalist system they've helped to corrupt is at fault.  There's a totalitarian or statist impulse behind so much content today.  It leaves me cold.

tl;dr:  If they want to set up a paywall, and stop preying upon our lives, I'll simply stop consuming their crap entirely.  Otherwise, I have no problem turning the tables in this tiny manner.

Q - _You must be a dirty communist|conservative|Republican|Democrat|heathen|misogynist|misandrist|racist|druggy|Islamophobe|colonialist|etc scumbag!_<br>
A - You're wrong.  But if you're asking, chances are I'm opposed to you and your belief system.

Q - _You must be one of us!_<br>
A - You're wrong.  In general I'm not fond of my own 'allies' - and you're probably not one of my 'allies' anyway.

Q - _Well then what's the point of doing this?  or What's the point of blacklisting \<insert site>?_<br>
A - I'm not comfortable with being manipulated by advertisers and content creators.  I'm not happy with the threat to free-speech and free-inquiry represented by today's online media.  I'm sickened by the amount of lying and half-truths we see in the news today.  I don't like extremists.  Each of these websites has specifically pissed me off at one time or another, in an ethical or political way - this tool ameliorates some small part of my addiction to the online media - and how negative I feel when I see myself visiting or sharing their webpages.  I don't like politics in my entertainment; I don't like entertainment in my current affairs; I don't like being told I'm [insert insult] by people who don't know me and have no basis to judge.  Clickbait is cancerous, but I'm pretty addicted.

In any case, my political beliefs are subject to constant introspection and adjustment, if I were to simply limit myself only to sites that don't upset me, I would never be exposed to challenging ideas.  While that appears to be good enough for many, it's not good enough for me.  I hope it's not good enough for you either.

Q - Your extension broke my browser|OS|computer|mind.<br>
A - As my co-worker used to say:  idontbelieveyou.gif.  Also the (poorly written) source code is available for you here.  If you downloaded this extension _anyplace_ other than here, you were swindled my friend.
