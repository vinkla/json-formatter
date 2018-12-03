import linkifyUrls from 'linkify-urls';
import stylesheet from './index.css';

document.addEventListener('DOMContentLoaded', () => {
  if (
    document.body &&
    document.body.children.length === 1 &&
    document.body.children[0].tagName === 'PRE'
  ) {
    document.body.normalize();
    const content = document.body.textContent.trim();
    const json = JSON.stringify(JSON.parse(content), null, 2);
    const data = linkifyUrls(json);
    document.body.innerHTML = `<pre>${data}</pre>`;

    const style = document.createElement('style');
    style.textContent = stylesheet;
    document.head.appendChild(style);
  }
});
