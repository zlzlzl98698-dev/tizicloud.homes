const fs = require('fs');

const files = [
  'docs/brands/index.md',
  'docs/compare/index.md',
  'docs/resources/beginner/index.md',
  'docs/resources/node-check/index.md',
  'docs/resources/subscription-issues/index.md',
  'scripts/build_brands_monograph.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const oldTag = '<a href="https://clash-cloud.run" target="_blank" rel="noopener noreferrer">';
    const newTag = '<a href="https://clash-cloud.run" target="_blank" rel="nofollow sponsored noopener">';
    if (content.includes(oldTag)) {
      content = content.replaceAll(oldTag, newTag);
      fs.writeFileSync(f, content, 'utf8');
      console.log('Fixed in:', f);
    } else {
      console.log('No oldTag found in:', f);
    }
  }
});
