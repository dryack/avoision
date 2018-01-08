var filter_list_state = 0;

function toggleFilterlist() {
    switch(filter_list_state){
        case 0:
            filter_list_state = 1;
            chrome.browserAction.setBadgeText( {text: "ARC"});
            break;
        case 1:
            filter_list_state = 2;
            chrome.browserAction.setBadgeText( {text: "STRP"});
            break;
        case 2:
            filter_list_state = 3;
            chrome.browserAction.setBadgeText( {text: "OFF"});
            break;
        case 3:
            filter_list_state = 0;
            chrome.browserAction.setBadgeText( {text: ""});
    }
    return
}
chrome.browserAction.onClicked.addListener(toggleFilterlist);