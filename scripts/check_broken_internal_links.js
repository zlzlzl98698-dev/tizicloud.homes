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
let totalInternalLinksChecked = 0;

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const sourceRel = path.relative('docs/.vitepress/dist', f).replace(/\\/g, '/');

  // match href="/..."
  const linkMatches = [...content.matchAll(/href=["'](\/[^"']*)["']/gi)];
  linkMatches.forEach(m => {
    let link = m[1];
    // ignore assets, pagefind, hash-only
    if (link.startsWith('/assets/') || link.startsWith('/pagefind/') || link.startsWith('/#')) return;

    totalInternalLinksChecked++;
    // strip query and hash
    const cleanLink = link.split('?')[0].split('#')[0];
    if (!cleanLink || cleanLink === '/') return; // root exists

    let targetFile = cleanLink;
    if (targetFile.startsWith('/')) targetFile = targetFile.substring(1);

    // If cleanUrls is true:
    // /airport/cheap/ -> docs/.vitepress/dist/airport/cheap/index.html or airport/cheap.html
    let candidate1 = path.resolve('docs/.vitepress/dist', targetFile, 'index.html');
    let candidate2 = path.resolve('docs/.vitepress/dist', targetFile.replace(/\/$/, '') + '.html');
    let candidate3 = path.resolve('docs/.vitepress/dist', targetFile);

    if (!fs.existsSync(candidate1) && !fs.existsSync(candidate2) && !fs.existsSync(candidate3)) {
      brokenInternalLinks.push({ source: sourceRel, link, cleanLink });
    }
  });
});

console.log('Total internal links checked:', totalInternalLinksChecked);
console.log('Broken internal links count:', brokenInternalLinks.length);
if (brokenInternalLinks.length > 0) {
  console.log('Sample broken links:', brokenInternalLinks.slice(0, 10));
}
