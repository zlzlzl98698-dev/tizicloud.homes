const fs = require('fs');
const c = fs.readFileSync('docs/clash/meta/index.md', 'utf8');
console.log(c.substring(0, 300));
