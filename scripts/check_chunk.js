const fs = require('fs');

// check which file failed in renderPage by patching or logging in vitepress chunk
const chunkPath = 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js';
const chunk = fs.readFileSync(chunkPath, 'utf8');

// Find filterOutHeadDescription
console.log('chunk contains filterOutHeadDescription?', chunk.includes('function filterOutHeadDescription'));
