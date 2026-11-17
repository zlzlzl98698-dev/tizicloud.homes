const fs = require('fs');
const path = require('path');

function getMdFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getMdFiles(p));
    else if (f.endsWith('.md')) res.push(p);
  });
  return res;
}

const mdFiles = getMdFiles('docs');
// Filter for cluster articles (e.g., *-art-*.md)
const clusterArticles = mdFiles.filter(f => /-art-\d+\.md$/.test(f));
console.log('Total cluster articles matching *-art-*.md:', clusterArticles.length);

// Analyze title patterns, headings, and character counts
let headingPatterns = new Map();
let duplicateSentenceCount = 0;
let sentenceFreq = new Map();

clusterArticles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const h2s = (content.match(/^##\s+(.+)$/gm) || []).map(h => h.replace(/^##\s+/, '').trim());
  const key = h2s.join(' || ');
  headingPatterns.set(key, (headingPatterns.get(key) || 0) + 1);

  // sample sentences
  const sentences = content.split(/[。！？\n]/).map(s => s.trim()).filter(s => s.length > 20);
  sentences.forEach(s => {
    sentenceFreq.set(s, (sentenceFreq.get(s) || 0) + 1);
  });
});

console.log('Unique H2 heading structure patterns across cluster articles:', headingPatterns.size);
console.log('Top heading patterns:');
const sortedPatterns = Array.from(headingPatterns.entries()).sort((a,b) => b[1] - a[1]);
sortedPatterns.slice(0, 5).forEach(([p, count]) => {
  console.log(`- Count ${count}: ${p}`);
});

console.log('\nTop repeated sentences (>20 chars) across cluster articles:');
const repeatedSentences = Array.from(sentenceFreq.entries())
  .filter(([s, count]) => count > 10)
  .sort((a, b) => b[1] - a[1]);
console.log(`Found ${repeatedSentences.length} sentences repeated more than 10 times:`);
repeatedSentences.slice(0, 5).forEach(([s, count]) => {
  console.log(`- [${count} times] "${s.substring(0, 60)}..."`);
});
