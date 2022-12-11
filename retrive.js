//https://stackoverflow.com/questions/31111721/pass-a-variable-from-content-script-to-popup
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "setCount":
                temp = message.count;
                break;
            case "getCount":
                sendResponse(temp);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);