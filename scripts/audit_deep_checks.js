const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getFiles(p, ext));
    else if (f.endsWith(ext)) res.push(p);
  });
  return res;
}

const mdFiles = getFiles('docs', '.md');
console.log('Total markdown files:', mdFiles.length);

// 1. Check all external commercial links in markdown files
let unshieldedLinks = [];
mdFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  // Raw HTML <a> tags
  const tagMatches = [...c.matchAll(/<a\s+([^>]*?)href=["'](https?:\/\/clash-cloud\.run[^"']*)["']([^>]*?)>/gi)];
  tagMatches.forEach(m => {
    const fullTag = m[0];
    if (!fullTag.includes('nofollow')) {
      unshieldedLinks.push({ file: f, type: 'raw-html', tag: fullTag });
    }
  });

  // Markdown links: [text](https://clash-cloud.run...)
  const mdLinks = [...c.matchAll(/\[([^\]]*)\]\((https?:\/\/clash-cloud\.run[^\)]*)\)/gi)];
  mdLinks.forEach(m => {
    unshieldedLinks.push({ file: f, type: 'markdown-link', link: m[0] });
  });
});

console.log('Unshielded commercial links count:', unshieldedLinks.length);
unshieldedLinks.forEach(l => console.log(' -', l.file, l.type, l.tag || l.link));

// 2. Word count distribution across markdown files
let wordCountDistribution = {
  under1k: [],
  k1_to_2k: [],
  k2_to_5k: [],
  k5_to_10k: [],
  over10k: []
};

mdFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const zh = (c.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (zh < 1000) wordCountDistribution.under1k.push({ file: f, zh });
  else if (zh < 2000) wordCountDistribution.k1_to_2k.push({ file: f, zh });
  else if (zh < 5000) wordCountDistribution.k2_to_5k.push({ file: f, zh });
  else if (zh < 10000) wordCountDistribution.k5_to_10k.push({ file: f, zh });
  else wordCountDistribution.over10k.push({ file: f, zh });
});

console.log('\n--- WORD COUNT DISTRIBUTION ---');
console.log('< 1000 pure Chinese characters:', wordCountDistribution.under1k.length);
console.log('1000 - 2000 pure Chinese characters:', wordCountDistribution.k1_to_2k.length);
console.log('2000 - 5000 pure Chinese characters:', wordCountDistribution.k2_to_5k.length);
console.log('5000 - 10000 pure Chinese characters:', wordCountDistribution.k5_to_10k.length);
console.log('> 10000 pure Chinese characters:', wordCountDistribution.over10k.length);

if (wordCountDistribution.under1k.length > 0) {
  console.log('Sample < 1000 chars:', wordCountDistribution.under1k.slice(0, 5));
}
if (wordCountDistribution.k1_to_2k.length > 0) {
  console.log('Sample 1000-2000 chars:', wordCountDistribution.k1_to_2k.slice(0, 5));
}
console.log('Pages > 10,000 chars:', wordCountDistribution.over10k.map(x => `${x.file} (${x.zh})`));

// 3. Check for template fingerprints in cluster articles
// Sample 10 cluster articles from docs/airport/cheap/pitfalls/
const clusterFiles = getFiles('docs/airport/cheap/pitfalls', '.md');
console.log('\nCluster files count in airport/cheap/pitfalls:', clusterFiles.length);
let sampleHeadings = [];
clusterFiles.slice(0, 5).forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const h2s = (c.match(/^##\s+(.+)$/gm) || []).slice(0, 5);
  sampleHeadings.push({ file: path.basename(f), h2s });
});
console.log('Sample H2s across cluster files:', JSON.stringify(sampleHeadings, null, 2));

// 4. Check JSON-LD across dist HTML files
const distFiles = getFiles('docs/.vitepress/dist', '.html');
let schemaTypes = new Map();
distFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const jsonLds = [...c.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  jsonLds.forEach(m => {
    try {
      const data = JSON.parse(m[1]);
      const type = data['@type'] || (Array.isArray(data) ? 'Array' : 'Unknown');
      schemaTypes.set(type, (schemaTypes.get(type) || 0) + 1);
    } catch(e) {}
  });
});
console.log('\n--- SCHEMA.ORG JSON-LD TYPES IN DIST ---');
console.log(Array.from(schemaTypes.entries()));
