const fs = require('fs');
const content = fs.readFileSync('docs/airport/cheap/index.md', 'utf8');
console.log(content.substring(0, content.indexOf('---', 4) + 3));
