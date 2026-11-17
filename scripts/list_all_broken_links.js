const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getFiles(p, ext));
    else if (f.endsWith(ext)) res.push(p);
  });
  return res;
}

const htmlFiles = getFiles('docs/.vitepress/dist', '.html');
let brokenInternalLinks = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const sourceRel = path.relative('docs/.vitepress/dist', f).replace(/\\/g, '/');

  const linkMatches = [...content.matchAll(/href=["'](\/[^"']*)["']/gi)];
  linkMatches.forEach(m => {
    let link = m[1];
    if (link.startsWith('/assets/') || link.startsWith('/pagefind/') || link.startsWith('/#')) return;

    const cleanLink = link.split('?')[0].split('#')[0];
    if (!cleanLink || cleanLink === '/') return;

    let targetFile = cleanLink.startsWith('/') ? cleanLink.substring(1) : cleanLink;
    let candidate1 = path.resolve('docs/.vitepress/dist', targetFile, 'index.html');
    let candidate2 = path.resolve('docs/.vitepress/dist', targetFile.replace(/\/$/, '') + '.html');
    let candidate3 = path.resolve('docs/.vitepress/dist', targetFile);

    if (!fs.existsSync(candidate1) && !fs.existsSync(candidate2) && !fs.existsSync(candidate3)) {
      brokenInternalLinks.push({ source: sourceRel, link });
    }
  });
});

console.log(JSON.stringify(brokenInternalLinks, null, 2));
