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
let cleanedCount = 0;

mdFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const secondDash = content.indexOf('\n---', 3);
    if (secondDash !== -1) {
      let fm = content.substring(0, secondDash);
      const rest = content.substring(secondDash);

      if (fm.includes('type: application/ld+json') && fm.includes('children: |')) {
        // Regex to strip the script block from frontmatter
        const newFm = fm.replace(/\s+-\s+-\s+script\s*\n\s+-?\s*type:\s*application\/ld\+json\s*\n\s*children:\s*\|[\s\S]*?(?=(\n\s+- -|\n---|$))/, '');
        content = newFm + rest;
        fs.writeFileSync(f, content, 'utf8');
        cleanedCount++;
        console.log('Cleaned frontmatter script in:', f);
      }
    }
  }
});

console.log(`Total cleaned frontmatter scripts: ${cleanedCount}`);
