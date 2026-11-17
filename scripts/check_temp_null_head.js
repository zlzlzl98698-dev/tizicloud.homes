const fs = require('fs');
const path = require('path');

const tempDir = 'docs/.vitepress/.temp';
if (!fs.existsSync(tempDir)) {
  console.log('tempDir does not exist');
  process.exit(0);
}

const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.js'));
console.log('Total temp js files:', files.length);

let nullHeadFiles = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(tempDir, f), 'utf8');
  if (content.includes('"head":null')) {
    nullHeadFiles.push(f);
  }
});

console.log('Files with "head":null:', nullHeadFiles.length);
nullHeadFiles.forEach(f => console.log(' -', f));
