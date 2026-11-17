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
// Sort by mtime descending
mdFiles.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);

console.log('Top 10 recently modified markdown files:');
mdFiles.slice(0, 10).forEach(f => {
  const mtime = new Date(fs.statSync(f).mtimeMs).toISOString();
  console.log(`- ${f} (${mtime})`);
});
