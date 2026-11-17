const fs = require('fs');

const trustPages = ['docs/about.md', 'docs/privacy.md', 'docs/terms.md', 'docs/disclaimer.md', 'docs/methodology.md'];
trustPages.forEach(p => {
  console.log(p, 'exists?', fs.existsSync(p));
});
