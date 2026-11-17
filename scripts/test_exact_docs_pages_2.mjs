import fs from 'fs';
import path from 'path';
import { resolveConfig, createMarkdownRenderer } from 'vitepress';

const config = await resolveConfig('docs');
const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.base, config.logger);
console.log('Pages count in docs:', config.pages.length);

let found = false;
for (const p of config.pages) {
  const full = path.join(config.srcDir, p);
  const content = fs.readFileSync(full, 'utf8');
  const env = {};
  md.render(content, env);
  const head = env.frontmatter?.head;
  if (head === null) {
    console.log('!!! FOUND page with frontmatter.head === null:', p);
    found = true;
  }
}
if (!found) console.log('None of config.pages produced frontmatter.head === null!');
