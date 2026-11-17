const fs = require('fs');
const path = require('path');

function getMdFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(getMdFiles(full));
    else if (f.endsWith('.md')) res.push(full);
  });
  return res;
}

const mdFiles = getMdFiles('docs');
let headOccurrences = [];

mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = content.substring(0, end);
      if (fm.includes('head:')) {
        const idx = fm.indexOf('head:');
        headOccurrences.push({ file: f, snippet: fm.substring(idx, idx + 40) });
      }
    }
  }
});

console.log('Total files with head: in frontmatter:', headOccurrences.length);
console.log('Sample 10:');
headOccurrences.slice(0, 10).forEach(x => console.log(' -', x.file, '::', JSON.stringify(x.snippet)));
