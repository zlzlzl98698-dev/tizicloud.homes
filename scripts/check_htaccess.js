const fs = require('fs');
if (fs.existsSync('docs/public/.htaccess')) {
  console.log(fs.readFileSync('docs/public/.htaccess', 'utf8'));
} else {
  console.log('.htaccess not found');
}
