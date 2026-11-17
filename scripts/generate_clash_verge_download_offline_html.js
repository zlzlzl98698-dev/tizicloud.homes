const fs = require('fs');
const path = require('path');

const builtHtmlPath = path.join(__dirname, '..', 'docs', '.vitepress', 'dist', 'clash', 'verge-download', 'index.html');
const cssDistDir = path.join(__dirname, '..', 'docs', '.vitepress', 'dist', 'assets');
const targetLocal = path.join(__dirname, '..', 'docs', 'clash_verge_download_monograph_preview.html');
const artifactPath = path.join('C:\\Users\\Pro User\\.gemini\\antigravity\\brain\\5a04c497-be8c-40b4-bde7-a705a12eee91', 'clash_verge_download_offline_review.html');

let html = fs.readFileSync(builtHtmlPath, 'utf8');

// Find all css files in dist/assets
let embeddedCss = '';
const cssFiles = fs.readdirSync(cssDistDir).filter(f => f.endsWith('.css'));
for (const cf of cssFiles) {
  const cssContent = fs.readFileSync(path.join(cssDistDir, cf), 'utf8');
  embeddedCss += `\n/* --- ${cf} --- */\n` + cssContent;
}

// Inject embedded CSS
const cssTag = `<style>\n${embeddedCss}\n</style>`;
html = html.replace('</head>', `${cssTag}\n</head>`);

// Fix asset paths to relative or absolute
html = html.replace(/src="\/logo\.png"/g, 'src="https://tizicloud.homes/logo.png"');
html = html.replace(/href="\/assets\//g, 'href="https://tizicloud.homes/assets/');

fs.writeFileSync(targetLocal, html, 'utf8');
fs.writeFileSync(artifactPath, html, 'utf8');

console.log('Successfully generated offline HTML files for clash verge download:');
console.log('Local:', targetLocal);
console.log('Artifact:', artifactPath);
console.log('File size:', (fs.statSync(artifactPath).size / 1024).toFixed(1) + ' KB');
