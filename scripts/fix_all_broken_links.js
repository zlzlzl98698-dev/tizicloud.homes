const fs = require('fs');

const replacements = [
  {
    file: 'docs/airport/cheap/index.md',
    pairs: [
      { from: '/brands/dalao/', to: '/brands/dalaoyun/' },
      { from: '/brands/starisland/', to: '/brands/xingdaomeng/' },
      { from: '/brands/51link/', to: '/brands/wuyou/' },
      { from: '/brands/flashmouse/', to: '/brands/shandianshu/' }
    ]
  },
  {
    file: 'docs/airport/cost-effective/index.md',
    pairs: [
      { from: '/brands/starisland/', to: '/brands/xingdaomeng/' }
    ]
  },
  {
    file: 'docs/airport/free/index.md',
    pairs: [
      { from: '/brands/dalao/', to: '/brands/dalaoyun/' }
    ]
  },
  {
    file: 'docs/airport/stable/index.md',
    pairs: [
      { from: '/brands/v2cloud/', to: '/brands/weitu/' }
    ]
  },
  {
    file: 'docs/brands/index.md',
    pairs: [
      { from: '/brands/2mao/', to: '/brands/ermao/' },
      { from: '/brands/v2yun/', to: '/brands/weitu/' }
    ]
  },
  {
    file: 'scripts/build_brands_monograph.js',
    pairs: [
      { from: '/brands/2mao/', to: '/brands/ermao/' },
      { from: '/brands/v2yun/', to: '/brands/weitu/' }
    ]
  },
  {
    file: 'docs/resources/index.md',
    pairs: [
      { from: '/resources/risk-warning/signs/', to: '/resources/risk-warning/' },
      { from: '/resources/subscription-issues/client/', to: '/resources/subscription-issues/' },
      { from: '/resources/subscription-issues/format/', to: '/resources/subscription-issues/' }
    ]
  }
];

replacements.forEach(item => {
  if (fs.existsSync(item.file)) {
    let content = fs.readFileSync(item.file, 'utf8');
    let modified = false;
    item.pairs.forEach(p => {
      if (content.includes(p.from)) {
        content = content.replaceAll(p.from, p.to);
        modified = true;
        console.log(`Replaced ${p.from} -> ${p.to} in ${item.file}`);
      }
    });
    if (modified) {
      fs.writeFileSync(item.file, content, 'utf8');
    }
  }
});
