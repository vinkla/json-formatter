/* global chrome */

chrome.webRequest.onCompleted.addListener(details => {
  if (!details.ip) {
    return;
  }

  const isJson = details.responseHeaders.some(detail => {
    return detail.name === 'content-type' && detail.value.includes('json');
  });

  if (isJson) {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'json' });
    });
  }
}, {
  urls: ['<all_urls>']
}, ['responseHeaders']);
