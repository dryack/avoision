//  avoision - Lightweight browser redirector for those who are addicted to the web of ideas
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


function sendToArchiver(info) {
    const archiver = 'https://' + pickArchiver(archiverDomains) + '/?run=1&url=';
    const url = archiver + info.pageUrl;
    chrome.tabs.create({
        url: url,
        active: true
    })
}

function sendViaVia(info) {
    const archiver = 'https://' + pickArchiver(archiverDomains) + '/?run=1&url=https://via.hypothes.is/';
    const url = archiver + info.pageUrl;

    chrome.tabs.create({
        url: url,
        active: true
    })
}

function sendViaUnvis(info) {
    const archiver = 'https://' + pickArchiver(archiverDomains) + '/?run=1&url=https://unv.is/';
    const url = archiver + info.pageUrl.replace(/(http|https):\/\//, '');

    chrome.tabs.create({
        url: url,
        active: true
    })
}

function sendViaOutline(info) {
    const archiver = 'https://' + pickArchiver(archiverDomains) + '/?run=1&url=https://outline.com/';
    const url = archiver + info.pageUrl;

    chrome.tabs.create({
        url: url,
        active: true
    })
}

chrome.contextMenus.create({
    type: 'normal',
    id: 'ContextMenuAvoision',
    title: 'Send current page to archiver',
    visible: true,
    enabled: true,
    onclick: sendToArchiver
});

chrome.contextMenus.create({
    type: 'normal',
    id: 'ContextMenuToArchive',
    title: 'to archive.is',
    parentId: 'ContextMenuAvoision',
    visible: true,
    enabled: true,
    onclick: sendToArchiver
});

chrome.contextMenus.create({
    type: 'normal',
    id: 'ContextMenuViaVia',
    title: 'to archive.is using via.hypothesis',
    parentId: 'ContextMenuAvoision',
    visible: true,
    enabled: true,
    onclick: sendViaVia
});

chrome.contextMenus.create({
    type: 'normal',
    id: 'ContextMenuViaUnvis',
    title: 'to archive.is using unv.is',
    parentId: 'ContextMenuAvoision',
    visible: true,
    enabled: true,
    onclick: sendViaUnvis
});

chrome.contextMenus.create({
    type: 'normal',
    id: 'ContextMenuViaOutline',
    title: 'to archive.is using outline.com',
    parentId: 'ContextMenuAvoision',
    visible: true,
    enabled: true,
    onclick: sendViaOutline
});
