const fs = require('fs');
const content = fs.readFileSync('docs/clash/verge-subscription/index.md', 'utf8');
console.log(content.substring(0, 300));
