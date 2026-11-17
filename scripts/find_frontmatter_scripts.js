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
let filesWithChildrenScript = [];

mdFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('type: application/ld+json') && content.includes('children: |')) {
    filesWithChildrenScript.push(f);
  }
});

console.log('Files with frontmatter children: | script:', filesWithChildrenScript.length);
console.log(filesWithChildrenScript.slice(0, 5));
