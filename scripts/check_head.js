const fs = require('fs');
const html = fs.readFileSync('docs/.vitepress/dist/brands/index.html', 'utf8');
const headContent = html.substring(html.indexOf('<head>'), html.indexOf('</head>') + 7);
console.log('Keywords meta present?', headContent.includes('机场品牌库'));
console.log('Script tags in head:', headContent.match(/<script\b[^>]*>[\s\S]*?<\/script>/gi));
