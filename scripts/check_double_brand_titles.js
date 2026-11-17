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
let doubleBrandTitles = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch && titleMatch[1].includes('梯子云 | 梯子云')) {
    doubleBrandTitles.push({ file: path.relative('docs/.vitepress/dist', f), title: titleMatch[1] });
  }
});

console.log('Pages with duplicate brand name in title (- 梯子云 | 梯子云):', doubleBrandTitles.length);
if (doubleBrandTitles.length > 0) {
  console.log('Sample:', doubleBrandTitles.slice(0, 5));
}
