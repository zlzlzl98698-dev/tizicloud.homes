const fs = require('fs');
const content = fs.readFileSync('docs/airport/cheap/pitfalls/cheap-pitfalls-art-1.md', 'utf8');
console.log(content.substring(0, content.indexOf('---', 4) + 3));
