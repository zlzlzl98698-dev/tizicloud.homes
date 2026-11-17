const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'recommend_sections');
const files = [
  '01_intro_and_answers.md',
  '02_top_brands_table.md',
  '03_cluster_navigation.md',
  '04_detailed_brand_reviews.md',
  '05_scenario_matching_guide.md',
  '06_technical_selection_principles.md',
  '07_action_roadmap_and_workflow.md',
  '08_security_and_anti_scam.md',
  '09_deep_faq.md',
  '10_disclosure_and_audit.md'
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

const outputPath = path.resolve(__dirname, '../docs/airport/recommend/index.md');
fs.writeFileSync(outputPath, fullMarkdown, 'utf8');

const hanziMatches = fullMarkdown.match(/[\u4e00-\u9fa5]/g) || [];
const totalHanzi = hanziMatches.length;

console.log('=== COMPILE AIRPORT RECOMMEND REPORT ===');
console.log(`Target path: ${outputPath}`);
console.log(`Total markdown bytes: ${Buffer.byteLength(fullMarkdown, 'utf8')}`);
console.log(`Total characters: ${fullMarkdown.length}`);
console.log(`Pure Chinese characters (纯汉字): ${totalHanzi}`);
console.log('=== END REPORT ===');
