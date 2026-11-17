const fs = require('fs');
const html = fs.readFileSync('docs/.vitepress/dist/brands/index.html', 'utf8');
const match = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
if (match) {
  console.log('Raw JSON-LD:');
  console.log(match[1]);
  try {
    const parsed = JSON.parse(match[1]);
    console.log('Parsed JSON-LD:', parsed);
    console.log('Type is:', parsed['@type']);
  } catch(e) {
    console.log('Parse error:', e.message);
  }
}
