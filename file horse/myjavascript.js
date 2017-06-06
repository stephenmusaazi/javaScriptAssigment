chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://filehorse.com/";
  chrome.tabs.create({ url: newURL });
});