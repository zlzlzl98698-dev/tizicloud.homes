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
let nullHeadFiles = [];

// Simple yaml parser or regex
mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const secondDash = content.indexOf('\n---', 3);
    if (secondDash !== -1) {
      const fm = content.substring(0, secondDash);
      // check if head: is followed only by whitespace until next key or end
      const match = fm.match(/\nhead:\s*(\n|$)/);
      if (match) {
        const afterHead = fm.substring(match.index + match[0].length);
        const nextLine = afterHead.split('\n')[0];
        if (!nextLine.startsWith(' ') && !nextLine.startsWith('\t')) {
          nullHeadFiles.push(f);
        }
      }
    }
  }
});

console.log('Files with head: null:', nullHeadFiles.length);
nullHeadFiles.forEach(f => console.log(' -', f));
