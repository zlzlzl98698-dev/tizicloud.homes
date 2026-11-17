const fs = require('fs');

const files = [
  'docs/.vitepress/dist/clash/verge/index.html',
  'docs/.vitepress/dist/resources/subscription-issues/index.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('--- Context in', f, '---');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('127.0.0.1') || l.includes('localhost')) {
      console.log(`Line ${i}:`, l.substring(0, 150));
    }
  });
});
