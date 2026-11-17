const fs = require('fs');
const path = require('path');

const sitemap = fs.readFileSync('docs/.vitepress/dist/sitemap.xml', 'utf8');
const locs = (sitemap.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
console.log('Total URLs in sitemap:', locs.length);

let missingFiles = [];
let has404InSitemap = false;

locs.forEach(url => {
  if (url.includes('404')) has404InSitemap = true;
  // clean url to local path
  let relPath = url.replace('https://tizicloud.homes/', '');
  if (relPath.endsWith('/')) {
    relPath += 'index.html';
  } else if (!relPath.endsWith('.html')) {
    relPath += '.html';
  }
  const fullPath = path.resolve('docs/.vitepress/dist', relPath);
  if (!fs.existsSync(fullPath)) {
    // try index.html inside folder
    const altPath = path.resolve('docs/.vitepress/dist', relPath.replace(/\.html$/, '/index.html'));
    if (!fs.existsSync(altPath)) {
      missingFiles.push({ url, relPath });
    }
  }
});

console.log('404 in sitemap?', has404InSitemap);
console.log('Missing files for sitemap URLs:', missingFiles.length);
if (missingFiles.length > 0) console.log(missingFiles);
