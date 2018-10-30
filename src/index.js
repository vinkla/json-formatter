/* global chrome */

import linkifyUrls from 'linkify-urls';

chrome.runtime.onMessage.addListener((message, sender, callback) => {
  window.addEventListener('load', () => {
    document.body.normalize();
    const content = document.body.textContent.trim();
    const json = JSON.stringify(JSON.parse(content), null, 2);
    const data = linkifyUrls(json);
    document.body.innerHTML = `<pre>${data}</pre>`;

    const styles = document.createElement('style');
    styles.textContent = `
      a:hover { text-decoration: none; }
      pre { font-size: 13px; line-height: 1.4; tab-size: 2; }
    `;
    document.head.appendChild(styles);
  });
});
