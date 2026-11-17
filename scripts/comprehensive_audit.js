const fs = require('fs');
const path = require('path');

const distDir = path.resolve('docs/.vitepress/dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} HTML files in dist...`);

let canonicalIssues = [];
let missingCanonical = [];
let externalLinksNoNofollow = [];
let trackingIds = new Set();
let sensitivePathLeaks = [];
let thinContentPages = [];
let emptyATags = [];
let titleMap = new Map();
let descMap = new Map();
let jsonLdCount = 0;
let jsonLdErrors = [];
let answerFirstCount = 0;
let tableCount = 0;
let faqCount = 0;

htmlFiles.forEach(file => {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');

  // 1. Canonical check
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
                         html.match(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  if (!canonicalMatch) {
    missingCanonical.push(relPath);
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith('https://tizicloud.homes/')) {
      canonicalIssues.push({ relPath, canonical, reason: 'Non-standard domain/protocol' });
    }
  }

  // 2. External affiliate / commercial links check
  // Look for links to clash-cloud.run or other external http(s)
  const linkMatches = [...html.matchAll(/<a\s+([^>]*?)href=["'](https?:\/\/[^"']+)["']([^>]*?)>/gi)];
  linkMatches.forEach(m => {
    const fullTag = m[0];
    const href = m[2];
    if (!href.includes('tizicloud.homes') && !href.includes('localhost') && !href.includes('schema.org') && !href.includes('vitepress.dev')) {
      const relMatch = fullTag.match(/rel=["']([^"']+)["']/i);
      const rel = relMatch ? relMatch[1] : '';
      const isCommercial = href.includes('clash-cloud.run') || href.includes('aff') || href.includes('register');
      if (isCommercial) {
        if (!rel.includes('nofollow')) {
          externalLinksNoNofollow.push({ relPath, href, rel, fullTag });
        }
      }
    }
  });

  // 3. Tracking scripts
  const gaMatches = html.match(/G-[A-Za-z0-9]+/g);
  if (gaMatches) gaMatches.forEach(id => trackingIds.add(`GA4: ${id}`));
  const baiduMatches = html.match(/hm\.baidu\.com\/hm\.js\?[a-z0-9]+/g);
  if (baiduMatches) baiduMatches.forEach(id => trackingIds.add(`Baidu: ${id}`));

  // 4. Sensitive leaks
  if (html.includes('C:\\Users\\') || html.includes('Users/Pro User')) {
    sensitivePathLeaks.push(relPath);
  }

  // 5. Content thickness: extract pure text
  // remove scripts, styles, tags
  const bodyText = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                       .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                       .replace(/<[^>]+>/g, ' ')
                       .replace(/\s+/g, ' ');
  const zhMatches = bodyText.match(/[\u4e00-\u9fa5]/g) || [];
  const zhCount = zhMatches.length;
  if (zhCount < 500 && !relPath.includes('404')) {
    thinContentPages.push({ relPath, zhCount });
  }

  // 6. Empty <a> tags
  const emptyLinks = html.match(/<a\s+(?!href)[^>]*>/gi) || [];
  const hrefPound = html.match(/<a\s+[^>]*href=["']#["'][^>]*>/gi) || [];
  if (emptyLinks.length > 0 || hrefPound.length > 0) {
    emptyATags.push({ relPath, count: emptyLinks.length + hrefPound.length });
  }

  // 7. Title & Meta Desc
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(relPath);
  }
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    const desc = descMatch[1].trim();
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(relPath);
  }

  // 8. JSON-LD check
  const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  if (jsonLdMatches.length > 0) {
    jsonLdCount += jsonLdMatches.length;
    jsonLdMatches.forEach(m => {
      try {
        JSON.parse(m[1]);
      } catch (e) {
        jsonLdErrors.push({ relPath, error: e.message });
      }
    });
  }

  // 9. GEO / AEO elements
  if (html.includes('Answer-First') || html.includes('tz-callout-primary')) answerFirstCount++;
  if (html.includes('<table')) tableCount++;
  if (html.includes('<details') || html.includes('tz-faq-item') || html.includes('FAQ')) faqCount++;
});

console.log('\n--- AUDIT RESULTS SUMMARY ---');
console.log('1. Canonical:');
console.log(`   Missing canonical: ${missingCanonical.length}`);
console.log(`   Canonical issues: ${canonicalIssues.length}`);
if (canonicalIssues.length > 0) console.log('   Sample issues:', canonicalIssues.slice(0, 3));

console.log('\n2. External Commercial Links without Nofollow:');
console.log(`   Total violations: ${externalLinksNoNofollow.length}`);
if (externalLinksNoNofollow.length > 0) {
  console.log('   Sample violations:', externalLinksNoNofollow.slice(0, 5));
}

console.log('\n3. Tracking IDs:');
console.log(`   Found IDs:`, Array.from(trackingIds));

console.log('\n4. Sensitive Path Leaks:');
console.log(`   Total pages with local path leaks: ${sensitivePathLeaks.length}`);
if (sensitivePathLeaks.length > 0) console.log('   Sample:', sensitivePathLeaks.slice(0, 5));

console.log('\n5. Content Thickness:');
console.log(`   Thin content pages (< 500 Chinese characters): ${thinContentPages.length}`);
if (thinContentPages.length > 0) console.log('   Sample:', thinContentPages.slice(0, 5));

console.log('\n6. Duplicate Titles:');
let dupTitles = Array.from(titleMap.entries()).filter(([t, files]) => files.length > 1);
console.log(`   Duplicate title groups: ${dupTitles.length}`);
if (dupTitles.length > 0) {
  dupTitles.slice(0, 5).forEach(([t, files]) => console.log(`   - "${t}": ${files.length} pages`));
}

console.log('\n7. Duplicate Meta Descriptions:');
let dupDescs = Array.from(descMap.entries()).filter(([d, files]) => files.length > 1);
console.log(`   Duplicate description groups: ${dupDescs.length}`);
if (dupDescs.length > 0) {
  dupDescs.slice(0, 5).forEach(([d, files]) => console.log(`   - "${d}": ${files.length} pages`));
}

console.log('\n8. JSON-LD Structured Data:');
console.log(`   Total JSON-LD scripts found: ${jsonLdCount}`);
console.log(`   JSON-LD parse errors: ${jsonLdErrors.length}`);

console.log('\n9. GEO / AEO Indicators:');
console.log(`   Pages with Answer-First callout: ${answerFirstCount} / ${htmlFiles.length}`);
console.log(`   Pages with <table>: ${tableCount} / ${htmlFiles.length}`);
console.log(`   Pages with FAQ blocks: ${faqCount} / ${htmlFiles.length}`);
