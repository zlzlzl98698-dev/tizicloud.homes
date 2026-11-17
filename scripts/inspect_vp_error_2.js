const fs = require('fs');
const file = 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js';
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
const start = 49420;
const end = 49445;
for (let i = start; i < end; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
