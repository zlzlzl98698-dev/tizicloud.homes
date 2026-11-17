const fs = require('fs');
const file = 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js';
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
const start = Math.max(0, 49535);
const end = Math.min(lines.length, 49555);
for (let i = start; i < end; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
