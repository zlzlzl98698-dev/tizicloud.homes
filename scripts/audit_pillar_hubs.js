const fs = require('fs');

const pages = [
  { name: '首页', path: 'docs/index.md', url: '/' },
  { name: '机场推荐主入口', path: 'docs/airport/index.md', url: '/airport/' },
  { name: 'VPN与加速器主入口', path: 'docs/vpn/index.md', url: '/vpn/' },
  { name: 'Clash知识库主入口', path: 'docs/clash/index.md', url: '/clash/' },
  { name: '资源与情报主入口', path: 'docs/resources/index.md', url: '/resources/' },
  { name: '品牌数据库主入口', path: 'docs/brands/index.md', url: '/brands/' },
  { name: '横向对比主入口', path: 'docs/compare/index.md', url: '/compare/' },
  { name: '科学上网指南(机场专题第7篇)', path: 'docs/airport/guide/index.md', url: '/airport/guide/' }
];

console.log('=== Pillar Hubs Audit ===');
pages.forEach(p => {
  if (fs.existsSync(p.path)) {
    const content = fs.readFileSync(p.path, 'utf8');
    const zh = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
    console.log(`${p.name} (${p.url}): ${zh} 纯汉字 | 字符数 ${content.length}`);
  } else {
    console.log(`${p.name} (${p.url}): 文件不存在!`);
  }
});
