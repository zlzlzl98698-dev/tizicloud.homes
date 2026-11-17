const fs = require('fs');

const f = 'docs/airport/cheap/index.md';
const content = fs.readFileSync(f, 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('/brands/dalao/') || l.includes('/brands/starisland/') || l.includes('/brands/51link/') || l.includes('/brands/flashmouse/')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});
