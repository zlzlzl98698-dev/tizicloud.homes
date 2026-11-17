const fs = require('fs');
const chunk = fs.readFileSync('node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js', 'utf8');
const lines = chunk.split('\n');
for (let i = 23115; i < 23145; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
