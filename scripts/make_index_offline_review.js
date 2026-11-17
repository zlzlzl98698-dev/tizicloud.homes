const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '../docs/.vitepress/dist/index.html');
let html = fs.readFileSync(distIndex, 'utf8');

const assetsDir = path.resolve(__dirname, '../docs/.vitepress/dist/assets');
const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
let combinedCss = '';
cssFiles.forEach(f => {
  combinedCss += fs.readFileSync(path.join(assetsDir, f), 'utf8') + '\n';
});

html = html.replace('</head>', `<style>\n${combinedCss}\n</style>\n</head>`);
html = html.replace(/src="\/images\//g, 'src="https://tizicloud.homes/images/');

const outReview = path.resolve(__dirname, '../docs/homepage_monograph_preview.html');
fs.writeFileSync(outReview, html, 'utf8');

const artifactPath = path.resolve('C:/Users/Pro User/.gemini/antigravity/brain/5a04c497-be8c-40b4-bde7-a705a12eee91/homepage_monograph_offline_review.html');
fs.writeFileSync(artifactPath, html, 'utf8');

console.log('Saved offline homepage review HTML:');
console.log('1.', outReview);
console.log('2.', artifactPath);
