const fs = require('fs');

const clusterFiles = [
  'docs/airport/cheap/pitfalls/cheap-pitfalls-art-1.md',
  'docs/airport/free/trials/free-trials-art-3.md',
  'docs/resources/node-check/unlock/node-check-unlock-art-1.md'
];

clusterFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const pronCount = (content.match(/[它其这家]/g) || []).length;
  console.log(f, 'pronoun matches count:', pronCount);
});
