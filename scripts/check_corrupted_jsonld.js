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

const distHtmls = getFiles('docs/.vitepress/dist', '.html');
let corruptedJsonLd = [];
distHtmls.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('<script type="application/ld+json" children=')) {
    corruptedJsonLd.push(path.relative('docs/.vitepress/dist', f));
  }
});

console.log('Pages with corrupted JSON-LD (children attribute):', corruptedJsonLd.length);
console.log(corruptedJsonLd.slice(0, 10));
