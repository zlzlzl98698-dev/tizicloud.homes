const fs = require('fs');
const path = require('path');

const dir = 'scripts/free_nodes_sections';
const sectionFiles = [
  '01_answer_first.md',
  '02_comparison_table.md',
  '03_cluster_navigation.md',
  '04_deep_dive_topics.md',
  '05_protocol_and_architecture.md',
  '06_operational_roadmap.md',
  '07_security_iron_laws.md',
  '08_faq_10_deep_answers.md',
  '09_disclosure_and_metadata.md'
];

let fullContent = '';
sectionFiles.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.error('Missing file:', filePath);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  fullContent += content + '\n';
});

// Check pure Chinese characters count
const chineseChars = fullContent.match(/[\u4e00-\u9fa5]/g) || [];
console.log('Total pure Chinese characters ([\\u4e00-\\u9fa5]):', chineseChars.length);

// Audit prose lines for colons
const lines = fullContent.split('\n');
let inFrontmatter = false;
let inCodeBlock = false;
let frontmatterCount = 0;
let colonErrors = [];
let emDashErrors = [];
let flipErrors = [];
const buzzwords = ['矩阵', '赋能', '闭环', '心智', '抓手', '画卷', '宛如', '不可否认', '综上所述', '总而言之'];
let buzzwordErrors = [];

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const trimmed = line.trim();

  if (trimmed === '---') {
    frontmatterCount++;
    if (frontmatterCount === 1) inFrontmatter = true;
    else if (frontmatterCount === 2) inFrontmatter = false;
    return;
  }
  if (inFrontmatter) return;

  if (trimmed.startsWith('```')) {
    inCodeBlock = !inCodeBlock;
    return;
  }
  if (inCodeBlock) return;

  // Ignore html tags and BrandAffiliateCard
  if (trimmed.startsWith('<') || trimmed.endsWith('>') || trimmed.includes('<BrandAffiliateCard')) return;

  // Check colons in prose (both ： and :)
  if (trimmed.includes('：') || (trimmed.includes(':') && !trimmed.startsWith('http:') && !trimmed.startsWith('https:'))) {
    const stripped = trimmed.replace(/https?:\/\/[^\s)]+/g, '');
    if (stripped.includes('：') || stripped.includes(':')) {
      colonErrors.push({ lineNum, line: trimmed });
    }
  }

  // Check em-dashes
  if (trimmed.includes('——') || trimmed.includes('—')) {
    emDashErrors.push({ lineNum, line: trimmed });
  }

  // Check flip sentences (不是...而是..., 与其...不如...)
  if ((trimmed.includes('不是') && trimmed.includes('而是')) || (trimmed.includes('与其') && trimmed.includes('不如'))) {
    flipErrors.push({ lineNum, line: trimmed });
  }

  // Check buzzwords
  buzzwords.forEach(bw => {
    if (trimmed.includes(bw)) {
      buzzwordErrors.push({ lineNum, word: bw, line: trimmed });
    }
  });
});

console.log('--- AUDIT RESULTS ---');
console.log('Colon errors:', colonErrors.length);
if (colonErrors.length > 0) {
  console.log('Sample colon errors:', colonErrors.slice(0, 10));
}

console.log('Em-dash errors:', emDashErrors.length);
if (emDashErrors.length > 0) {
  console.log('Sample em-dash errors:', emDashErrors);
}

console.log('Flip sentence errors:', flipErrors.length);
if (flipErrors.length > 0) {
  console.log('Sample flip sentence errors:', flipErrors);
}

console.log('Buzzword errors:', buzzwordErrors.length);
if (buzzwordErrors.length > 0) {
  console.log('Sample buzzword errors:', buzzwordErrors);
}

if (colonErrors.length === 0 && emDashErrors.length === 0 && flipErrors.length === 0 && buzzwordErrors.length === 0) {
  if (chineseChars.length >= 10000 && chineseChars.length <= 15000) {
    console.log('ALL CHECKS PASSED PERFECTLY!');
    fs.writeFileSync('docs/resources/free-nodes/index.md', fullContent.trim() + '\n', 'utf8');
    console.log('Successfully wrote full content to docs/resources/free-nodes/index.md');
  } else {
    console.log('Word count out of range (10000-15000):', chineseChars.length);
  }
} else {
  console.log('Audit failed, please fix errors.');
}
