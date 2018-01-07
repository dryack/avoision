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
var filter_list_state = 0;

function toggleFilterlist() {
    if (filter_list_state === 0) {
        filter_list_state = 1;
        chrome.browserAction.setBadgeText( {text: "OFF"});
        return
    }
    if (filter_list_state === 1) {
        filter_list_state = 0;
        chrome.browserAction.setBadgeText( {text: ""});
        return
    }
}
chrome.browserAction.onClicked.addListener(toggleFilterlist);
