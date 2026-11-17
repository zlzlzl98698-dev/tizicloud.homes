const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getFiles(p, ext));
    else if (f.endsWith(ext)) res.push(p);
  });
  return res;
}

const distHtmls = getFiles('docs/.vitepress/dist', '.html');
let leaks = [];

distHtmls.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative('docs/.vitepress/dist', f);

  if (content.includes('localhost:') && !rel.includes('preview')) {
    leaks.push({ file: rel, type: 'localhost' });
  }
  if (content.includes('127.0.0.1')) {
    leaks.push({ file: rel, type: '127.0.0.1' });
  }
  if (content.includes('C:\\Users') || content.includes('c:/Users') || content.includes('Users/Pro User')) {
    leaks.push({ file: rel, type: 'local_file_path' });
  }
  if (content.includes('TODO') || content.includes('FIXME') || content.includes('Lorem ipsum')) {
    leaks.push({ file: rel, type: 'placeholder_text' });
  }
});

console.log('Total infrastructure / placeholder leak occurrences:', leaks.length);
if (leaks.length > 0) {
  console.log(leaks);
} else {
  console.log('No local IP, local file path, or placeholder leaks found in dist HTML files!');
}
