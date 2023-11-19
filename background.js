function openCachedUrl(url) {
    var cacheUrl = "http://webcache.googleusercontent.com/search?q=cache:" + url;
    chrome.tabs.create({ url: cacheUrl });
}

// Context menu for links in the page
chrome.contextMenus.create({
    title: "Bypass with Cache",
    contexts: ["link"],
    onclick: function(info) {
        openCachedUrl(info.linkUrl);
    }
});

// Browser action for the URL in the address bar
chrome.browserAction.onClicked.addListener(function(tab) {
    openCachedUrl(tab.url);
});
