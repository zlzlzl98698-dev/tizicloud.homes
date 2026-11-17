const fs = require('fs');

const f = 'docs/.vitepress/dist/brands/index.html';
const html = fs.readFileSync(f, 'utf8');

const matches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
console.log('JSON-LD script tags count in brands/index.html:', matches.length);
matches.forEach((m, i) => {
  console.log(`\n--- Script ${i + 1} ---`);
  const data = JSON.parse(m[1]);
  console.log('Type:', data['@type'] || (data['@graph'] ? '@graph' : 'Unknown'));
  console.log('Data:', JSON.stringify(data, null, 2).substring(0, 300) + '...');
});

const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
console.log('\nCanonical link:', canonicalMatch ? canonicalMatch[0] : 'NONE');

const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
console.log('og:image meta:', ogImageMatch ? ogImageMatch[0] : 'NONE');
