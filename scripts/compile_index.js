const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'index_sections');
const files = [
  '01_hero_and_core_answers.md',
  '02_brand_database_table.md',
  '03_four_pillars_deep_guide.md',
  '04_technical_architecture.md',
  '05_ai_and_streaming_unlock.md',
  '06_client_tools_matrix.md',
  '07_security_and_anti_scam.md',
  '08_deep_faq.md',
  '09_disclosure_and_audit.md'
];

let fullMarkdown = '';
files.forEach(f => {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8').trim();
    fullMarkdown += text + '\n\n';
  } else {
    console.error(`File missing: ${f}`);
  }
});

const outputPath = path.resolve(__dirname, '../docs/index.md');
fs.writeFileSync(outputPath, fullMarkdown, 'utf8');

const hanziMatches = fullMarkdown.match(/[\u4e00-\u9fa5]/g) || [];
const totalHanzi = hanziMatches.length;

console.log('=== COMPILE HOMEPAGE INDEX REPORT ===');
console.log(`Target path: ${outputPath}`);
console.log(`Total markdown bytes: ${Buffer.byteLength(fullMarkdown, 'utf8')}`);
console.log(`Total characters: ${fullMarkdown.length}`);
console.log(`Pure Chinese characters (纯汉字): ${totalHanzi}`);
console.log('=== END REPORT ===');
