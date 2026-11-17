const fs = require('fs');

const sitemap = fs.readFileSync('docs/.vitepress/dist/sitemap.xml', 'utf8');
const locs = (sitemap.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));

const sampleLocs = [
  locs[0], locs[10], locs[50], locs[100], locs[200], locs[300], locs[400], locs[500]
];

sampleLocs.forEach(u => {
  let rel = u.replace('https://tizicloud.homes/', '');
  if (rel.endsWith('/')) rel += 'index.html';
  else if (!rel.endsWith('.html')) rel += '.html';
  const full = 'docs/.vitepress/dist/' + rel;
  if (fs.existsSync(full)) {
    const html = fs.readFileSync(full, 'utf8');
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    console.log(`URL: ${u}`);
    console.log(`Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);
    console.log(`Desc: ${descMatch ? descMatch[1].substring(0, 80) + '...' : 'NONE'}\n`);
  }
});
