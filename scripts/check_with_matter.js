const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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
let nullHead = [];

mdFiles.forEach(f => {
  try {
    const c = fs.readFileSync(f, 'utf8');
    const { data } = matter(c);
    if (data.head === null) {
      nullHead.push({ file: f, head: data.head });
    }
  } catch(e) {
    console.log('Error parsing', f, e.message);
  }
});

console.log('Files with data.head === null via gray-matter:', nullHead.length);
nullHead.forEach(x => console.log(' -', x.file));
