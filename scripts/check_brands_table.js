const fs = require('fs');

const content = fs.readFileSync('docs/brands/index.md', 'utf8');
const tableStart = content.indexOf('<div class="tz-table-wrap">');
const tableEnd = content.indexOf('</div>', tableStart) + 6;

if (tableStart !== -1 && tableEnd !== -1) {
  const tableContent = content.substring(tableStart, tableEnd);
  const tableZh = (tableContent.match(/[\u4e00-\u9fa5]/g) || []).length;
  console.log('Existing 41 brands table pure Chinese count:', tableZh);
} else {
  console.log('Table not found');
}
