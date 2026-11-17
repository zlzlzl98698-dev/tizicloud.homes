import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Load chunk-D3CUZ4fa.js or import vitepress
import { resolveConfig } from 'vitepress';

const config = await resolveConfig(process.cwd());

function getMdFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(getMdFiles(full));
    else if (f.endsWith('.md')) res.push(path.relative('docs', full));
  });
  return res;
}

const mdFiles = getMdFiles('docs');
console.log('Total files in pages:', config.pages.length);

for (const p of config.pages) {
  // read file
  const full = path.join('docs', p);
  if (!fs.existsSync(full)) continue;
  const content = fs.readFileSync(full, 'utf8');
  // check frontmatter using config.markdown
  const env = {};
  config.markdown.render(content, env);
  if (env.frontmatter && 'head' in env.frontmatter && env.frontmatter.head === null) {
    console.log('CRITICAL: env.frontmatter.head is null in:', p);
  }
}
console.log('Done scanning config.pages');
