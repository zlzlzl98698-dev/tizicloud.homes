const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'stable_sections');
const targetFile = path.join(__dirname, '..', 'docs', 'airport', 'stable', 'index.md');

const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.md')).sort();

let fullContent = '';
for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  fullContent += content + '\n\n';
}

// Clean up excess newlines
fullContent = fullContent.replace(/\n{3,}/g, '\n\n').trim() + '\n';

// Count characters
const chineseChars = (fullContent.match(/[\u4e00-\u9fa5]/g) || []).length;
const totalChars = fullContent.length;

console.log('--- Word Count Audit ---');
console.log('Total characters:', totalChars);
console.log('Pure Chinese characters ([\\u4e00-\\u9fa5]):', chineseChars);

// Human writing rule checks
const lines = fullContent.split('\n');
const colonViolations = [];
const dashViolations = [];
const flipViolations = [];

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const trimmed = line.trim();
  // ignore frontmatter, headings, table rows, html tags, script tags, blockquotes
  if (trimmed.startsWith('---') || trimmed.startsWith('#') || trimmed.startsWith('|') || 
      trimmed.startsWith('<') || trimmed.startsWith('>') || trimmed.startsWith('`') ||
      trimmed.includes('http') || trimmed.includes('@context')) {
    return;
  }
  
  if (line.includes('：')) {
    colonViolations.push({ lineNum, line: trimmed });
  }
  if (line.includes('——') || line.includes('—')) {
    dashViolations.push({ lineNum, line: trimmed });
  }
  if (line.includes('不是') && line.includes('而是')) {
    flipViolations.push({ lineNum, line: trimmed });
  }
});

console.log('Colon violations in prose:', colonViolations.length);
if (colonViolations.length > 0) {
  console.log('Sample colon violations:', colonViolations.slice(0, 5));
}
console.log('Dash violations in prose:', dashViolations.length);
if (dashViolations.length > 0) {
  console.log('Sample dash violations:', dashViolations.slice(0, 5));
}
console.log('Flip violations in prose:', flipViolations.length);
if (flipViolations.length > 0) {
  console.log('Sample flip violations:', flipViolations.slice(0, 5));
}

if (chineseChars < 10000) {
  console.log('WARNING: Pure Chinese characters count is below 10,000! Need to expand sections.');
} else if (chineseChars > 15000) {
  console.log('WARNING: Pure Chinese characters count exceeds 15,000! Need to trim sections.');
} else {
  console.log('SUCCESS: Pure Chinese characters count is strictly within 10,000 - 15,000 range!');
}

fs.writeFileSync(targetFile, fullContent, 'utf8');
console.log('Updated target file successfully:', targetFile);
