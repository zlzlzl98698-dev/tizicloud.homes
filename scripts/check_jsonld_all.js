const fs = require('fs');
const html = fs.readFileSync('docs/.vitepress/dist/brands/index.html', 'utf8');
const matches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
console.log('Matches count in brands/index.html:', matches.length);
matches.forEach((m, i) => {
  console.log(`--- Tag ${i + 1} ---`);
  console.log(m[1].trim());
});
