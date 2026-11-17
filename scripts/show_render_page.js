const fs = require('fs');
const file = 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js';
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
for (let i = 49400; i < 49435; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
