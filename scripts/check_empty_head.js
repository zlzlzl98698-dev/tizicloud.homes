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
let emptyHeadFiles = [];

mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const secondDash = content.indexOf('\n---', 3);
    if (secondDash !== -1) {
      const fm = content.substring(0, secondDash);
      if (/\nhead:\s*(\n|$)/.test(fm)) {
        emptyHeadFiles.push(f);
      }
    }
  }
});

console.log('Files with empty head: in frontmatter:', emptyHeadFiles.length);
console.log(emptyHeadFiles);
