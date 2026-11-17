const fs = require('fs');
const path = require('path');

const sitemap = fs.readFileSync('docs/.vitepress/dist/sitemap.xml', 'utf8');
const locs = new Set((sitemap.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, '')));

function computeCanonical(relPath) {
  // relPath is like 'airport/cheap/index.md' or 'index.md' or 'airport/cheap/pitfalls/cheap-pitfalls-art-1.md'
  let p = relPath.replace(/\\/g, '/').replace(/\.md$/, '');
  if (p === 'index') {
    return 'https://tizicloud.homes/';
  }
  if (p.endsWith('/index')) {
    p = p.substring(0, p.length - 5); // keep trailing slash
  }
  return `https://tizicloud.homes/${p}`;
}

function getMdFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(getMdFiles(full));
    else if (f.endsWith('.md')) res.push(path.relative('docs', full));
  });
  return res;
}

const mdFiles = getMdFiles('docs');
let matched = 0;
let unmatched = [];

mdFiles.forEach(f => {
  if (f === '404.md') return;
  const canonical = computeCanonical(f);
  if (locs.has(canonical)) {
    matched++;
  } else {
    unmatched.push({ file: f, canonical });
  }
});

console.log(`Matched with sitemap.xml: ${matched} / ${mdFiles.length - 1}`);
if (unmatched.length > 0) {
  console.log('Unmatched:', unmatched.slice(0, 5));
}
