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
let emptyHref = [];
let javascriptHref = [];
let hashOnlyHref = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative('docs/.vitepress/dist', f);

  const tags = [...content.matchAll(/<a\s+[^>]*>/gi)];
  tags.forEach(m => {
    const tag = m[0];
    if (!tag.includes('href=')) {
      emptyHref.push({ file: rel, tag });
    } else {
      const hrefMatch = tag.match(/href=["']([^"']*)["']/i);
      const href = hrefMatch ? hrefMatch[1] : '';
      if (href.startsWith('javascript:')) {
        javascriptHref.push({ file: rel, tag });
      } else if (href === '#' || href === '') {
        hashOnlyHref.push({ file: rel, tag });
      }
    }
  });
});

console.log('Empty href tags (no href attribute):', emptyHref.length);
console.log('javascript: href tags:', javascriptHref.length);
console.log('href="#" or href="" tags:', hashOnlyHref.length);
if (hashOnlyHref.length > 0) {
  console.log('Sample hashOnlyHref:', hashOnlyHref.slice(0, 5));
}
