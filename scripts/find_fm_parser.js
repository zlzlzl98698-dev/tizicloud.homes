const fs = require('fs');

const chunk = fs.readFileSync('node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js', 'utf8');
const lines = chunk.split('\n');
lines.forEach((l, i) => {
  if (l.includes('frontmatter') && (l.includes('parse') || l.includes('gray-matter') || l.includes('matter'))) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});
