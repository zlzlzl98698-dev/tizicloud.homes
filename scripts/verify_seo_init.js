const fs = require('fs');
const path = require('path');

console.log('=== SEO INFRASTRUCTURE INITIALIZATION VERIFICATION ===\n');

// 1. Robots.txt
const robots = fs.readFileSync('docs/.vitepress/dist/robots.txt', 'utf8');
console.log('1. Robots.txt:');
console.log(robots.trim());

// 2. .htaccess
const htaccess = fs.readFileSync('docs/.vitepress/dist/.htaccess', 'utf8');
console.log('\n2. .htaccess:');
console.log('Has HTTPS redirect?', htaccess.includes('RewriteCond %{HTTPS} off'));
console.log('Has www redirect?', htaccess.includes('www.tizicloud.homes'));
console.log('Has 404 document?', htaccess.includes('ErrorDocument 404 /404.html'));

// 3. Sitemap.xml
const sitemap = fs.readFileSync('docs/.vitepress/dist/sitemap.xml', 'utf8');
const locs = (sitemap.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
console.log('\n3. Sitemap.xml:');
console.log(`Total URLs: ${locs.length}`);
console.log('Sample URLs:');
locs.slice(0, 3).forEach(u => console.log(' -', u));

// 4. Sample Pages Verification
const samplePaths = [
  'index.html',
  'airport/index.html',
  'airport/cheap/index.html',
  'airport/cheap/pitfalls/cheap-pitfalls-art-1.html',
  'brands/index.html',
  'brands/guangsu/index.html'
];

console.log('\n4. Sample Pages DOM & Head:');
samplePaths.forEach(p => {
  const full = path.resolve('docs/.vitepress/dist', p);
  if (!fs.existsSync(full)) {
    console.log(`File not found: ${p}`);
    return;
  }
  const html = fs.readFileSync(full, 'utf8');
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) || [])[1];
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) || [])[1];
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  const jsonLds = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];

  console.log(`\nPage: /${p.replace(/index\.html$/, '').replace(/\.html$/, '')}`);
  console.log(`  Title: ${title}`);
  console.log(`  Desc: ${desc ? desc.substring(0, 60) + '...' : 'NONE'}`);
  console.log(`  H1: ${h1}`);
  console.log(`  Canonical: ${canonical}`);
  console.log(`  JSON-LD Schemas: ${jsonLds.length} tags`);
  jsonLds.forEach((m, idx) => {
    try {
      const parsed = JSON.parse(m[1]);
      const type = parsed['@type'] || (parsed['@graph'] ? '@graph' : 'Unknown');
      console.log(`    Tag ${idx + 1}: ${type}`);
    } catch(e) {
      console.log(`    Tag ${idx + 1}: PARSE ERROR!`);
    }
  });
});
