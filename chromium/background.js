//  avosion - Lightweight browser redirector for those who are addicted to the web of ideas
//  Copyright (C) 2017-2019 David Ryack
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
var filter_list_state = 0;

function toggleFilterlist() {
    switch(filter_list_state){
        case 0:
            // archiving only
            filter_list_state = 1;
            chrome.browserAction.setBadgeText( {text: "ARC"});
            break;
        case 1:
            // url cleaning only
            filter_list_state = 2;
            chrome.browserAction.setBadgeText( {text: "STRP"});
            break;
        case 2:
            // no features
            filter_list_state = 3;
            chrome.browserAction.setBadgeText( {text: "OFF"});
            break;
        case 3:
            // all features
            filter_list_state = 0;
            chrome.browserAction.setBadgeText( {text: ""});
    }
}

chrome.browserAction.onClicked.addListener(toggleFilterlist);
