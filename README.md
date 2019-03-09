# avoision
![](https://frinkiac.com/gif/S07E15/381314/384317.gif?b64lines=IEkgZG9uJ3Qgc2F5ICJldmFzaW9uLiIgCiBJIHNheSAiYXZvaXNpb24uIg==)

I prefer to call it avoision - because some websites are egregious.

In day to day life we vote with our wallets, but the online world is a different place.  We vote with our clicks.
Avoision: A configurable (Real Soon Now™), and free add-on for your browser gives you the power to take back
control... or whatever... be a minor irritation while *feeling* like you have some power.

---

## features

* intercepts requests to sites that you don't want to support and redirects to a MementoWeb API supporting web archiver (defaulting to archive.today, which you should totally [donate](https://liberapay.com/archiveis) to if you find this project useful)
* with the anti-web-archiver arms race ongoing, we now support multiple methods
  * via.hypothesis
  * unv.is
  * outline.com
* right-click context menu to send current page to archive.today or to archive.today via any of the above listed methods
* cleans amazon referral links
* strips most URL tracking parameters
* click the extension icon to change it's current mode of operation
  * blank: standard operation
  * ARC: archiving only - no URL stripping
  * STRP: URL stripping only - no archiving
  * OFF: yeah... off

## planned

* configurability via text file
* detect and remove non-amazon affiliate links as I find them

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

A - Feel free to send me your argument by opening an issue [here](https://github.com/dryack/avoision/issues/new/choose), I'll be happy to read about them.


Q - Your extension broke my browser|OS|computer|mind.<br>

A - As my co-worker used to say:  idontbelieveyou.gif.  Also the (poorly written) source code is available for you here.  If you downloaded this extension _anyplace_ other than here, you were swindled my friend.  Seriously, I will never:  sell this extension, put in anything to steal data or otherwise fuck with the end-users.  I use it myself every day.  The source will *always* be available.
