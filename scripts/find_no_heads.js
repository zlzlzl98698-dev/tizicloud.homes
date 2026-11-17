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
let noHeadFiles = [];

mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = content.substring(0, end);
      if (!fm.includes('head:')) {
        noHeadFiles.push(f);
      }
    }
  } else {
    noHeadFiles.push(f);
  }
});

console.log('Files without head: in frontmatter:', noHeadFiles.length);
noHeadFiles.forEach(f => console.log(' -', f));
