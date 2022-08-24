import { MessageType } from "../types";

chrome.storage.local.clear();

// Listen to tab changes and inject browser content script.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.includes("http")) {
    chrome.tabs.executeScript(
      tabId,
      { file: "./injectscript.js" },
      function () {
        chrome.tabs.executeScript(
          tabId,
          { file: "./content.bundle.js" },
          function () {
            console.log("Extension Content Script Injected");
          }
        );
      }
    );
  }
});

chrome.runtime.onMessage.addListener(
  (
    message: MessageType,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    switch (message.type) {
      case "DEFAULT_MESSAGE": {
        console.log(`DEFAULT_MESSAGE background handler invoked`);
        break;
      }
      default:
        break;
    }
    return true; // Required for async sendResponse()
  }
);
