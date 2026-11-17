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
let fixedCount = 0;

mdFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('---')) {
    const secondDash = content.indexOf('\n---', 3);
    if (secondDash !== -1) {
      let fm = content.substring(0, secondDash);
      const rest = content.substring(secondDash);

      // Check if fm has empty head:
      // Case 1: head:\n--- or head:\r\n---
      // Case 2: head:\n  \n or head: with nothing under it
      if (/\nhead:\s*(\n|$)/.test(fm)) {
        // If head has no items under it (i.e. next non-whitespace line is a key without indentation or ---)
        const lines = fm.split('\n');
        let newLines = [];
        let inEmptyHead = false;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (/^head:\s*$/.test(line)) {
            // check next line
            if (i + 1 < lines.length && !lines[i + 1].startsWith(' ') && !lines[i + 1].startsWith('\t')) {
              // empty head, skip it!
              continue;
            } else if (i + 1 >= lines.length) {
              // at end of fm, skip it!
              continue;
            }
          }
          newLines.push(line);
        }

        const newFm = newLines.join('\n');
        if (newFm !== fm) {
          content = newFm + rest;
          fs.writeFileSync(f, content, 'utf8');
          fixedCount++;
        }
      }
    }
  }
});

console.log(`Removed empty head: from ${fixedCount} files`);
