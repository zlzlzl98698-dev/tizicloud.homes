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
let suspicious = [];

mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = content.substring(0, end);
      const headIdx = fm.indexOf('\nhead:');
      if (headIdx !== -1) {
        const after = fm.substring(headIdx + 6).trim();
        if (!after.startsWith('-') && !after.startsWith('[')) {
          suspicious.push({ file: f, after: after.substring(0, 50) });
        }
      }
    }
  }
});

console.log('Suspicious head files count:', suspicious.length);
suspicious.forEach(s => console.log(' -', s.file, '::', JSON.stringify(s.after)));
