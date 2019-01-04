import linkifyUrls from 'linkify-urls';
import stylesheet from './index.css';

document.addEventListener('DOMContentLoaded', () => {
  if (
    document.body &&
    document.body.children.length === 1 &&
    document.body.children[0].tagName === 'PRE'
  ) {
    try {
      document.body.normalize();
      const content = document.body.textContent.trim();
      const json = JSON.stringify(JSON.parse(content), null, 2)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      document.body.innerHTML = `<pre>${linkifyUrls(json)}</pre>`;

      const style = document.createElement('style');
      style.textContent = stylesheet;
      document.head.appendChild(style);
    } catch (error) {
      // Prevent invalid JSON errors in the browser console
    }
  }
});
