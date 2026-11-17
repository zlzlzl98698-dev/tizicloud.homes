const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'hub_sections');
const files = [
  '01_intro.md',
  '02_quick_answers.md',
  '03_table_and_legend.md',
  '04_technical_deep_dive.md',
  '05_ai_productivity.md',
  '06_streaming_and_ecommerce.md',
  '07_brand_profiles.md',
  '08_client_guides.md',
  '09_security_and_anti_scam.md',
  '10_secondary_hubs.md',
  '11_deep_faq.md',
  '12_disclosure_and_audit.md'
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

const outputPath = path.resolve(__dirname, '../docs/airport/index.md');
fs.writeFileSync(outputPath, fullMarkdown, 'utf8');

const hanziMatches = fullMarkdown.match(/[\u4e00-\u9fa5]/g) || [];
const totalHanzi = hanziMatches.length;

console.log('=== COMPILE AIRPORT HUB REPORT ===');
console.log(`Target path: ${outputPath}`);
console.log(`Total markdown bytes: ${Buffer.byteLength(fullMarkdown, 'utf8')}`);
console.log(`Total characters: ${fullMarkdown.length}`);
console.log(`Pure Chinese characters (纯汉字): ${totalHanzi}`);
console.log('=== END REPORT ===');
