const fs = require('fs');
if (fs.existsSync('docs/.vitepress/dist/.htaccess')) {
  console.log('dist/.htaccess exists!');
  const content = fs.readFileSync('docs/.vitepress/dist/.htaccess', 'utf8');
  console.log('Contains www?', content.includes('www'));
} else {
  console.log('dist/.htaccess does not exist!');
}
