chrome.storage.local.get("count", function(data) {
    console.log(data.title, data.link,data.desc)
});