import fs from 'fs';
import path from 'path';
import { createMarkdownRenderer } from 'vitepress';

const md = await createMarkdownRenderer(process.cwd());

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
console.log('Testing', mdFiles.length, 'markdown files...');

for (const f of mdFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const env = {};
  md.render(content, env);
  if (env.frontmatter && env.frontmatter.head === null) {
    console.log('FOUND FILE WITH head === null:', f);
  }
}
console.log('Finished testing.');
