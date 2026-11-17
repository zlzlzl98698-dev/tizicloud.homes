const fs = require('fs');

const chunkPath = 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js';
let chunk = fs.readFileSync(chunkPath, 'utf8');

const target = 'filterOutHeadDescription(head = []) {\n  return head.filter';
const replacement = 'filterOutHeadDescription(head = []) {\n  if (!head) { console.error("Found null head in page"); return []; }\n  return head.filter';

if (chunk.includes(target)) {
  chunk = chunk.replace(target, replacement);
  fs.writeFileSync(chunkPath, chunk, 'utf8');
  console.log('Temporarily patched chunk to log and prevent crash');
} else {
  console.log('Target not found in chunk');
}
