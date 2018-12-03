import linkifyUrls from 'linkify-urls';

const stylesheet = `
  a:hover { text-decoration: none; }
  pre { font-size: 13px; line-height: 1.3; tab-size: 2; white-space: pre-wrap; word-wrap: break-word; }
`;

document.addEventListener('DOMContentLoaded', () => {
  if (
    document.body.children.length !== 1 ||
    document.body.children[0].tagName !== 'PRE'
  ) {
    return;
  }

  document.body.normalize();
  const content = document.body.textContent.trim();
  const json = JSON.stringify(JSON.parse(content), null, 2);
  const data = linkifyUrls(json);
  document.body.innerHTML = `<pre>${data}</pre>`;

  const style = document.createElement('style');
  style.textContent = stylesheet;
  document.head.appendChild(style);
});
