import fs from 'fs';
import path from 'path';
import { resolveConfig } from 'vitepress';

const config = await resolveConfig('docs');
console.log('Pages count in docs:', config.pages.length);

for (const p of config.pages) {
  const full = path.join(config.srcDir, p);
  const content = fs.readFileSync(full, 'utf8');
  const env = {};
  config.markdown.render(content, env);
  const head = env.frontmatter?.head;
  if (head === null) {
    console.log('!!! FOUND page with frontmatter.head === null:', p);
  }
}
console.log('Check finished.');
