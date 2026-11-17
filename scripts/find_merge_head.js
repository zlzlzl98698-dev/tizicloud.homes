const fs = require('fs');
const content = fs.readFileSync('node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('function mergeHead')) {
    console.log(`Line ${i + 1}: ${l}`);
    for (let j = 0; j < 15; j++) {
      console.log(`${i + 1 + j}: ${lines[i + j]}`);
    }
  }
});
