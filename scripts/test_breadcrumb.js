const navNameMap = {
  'airport': '机场推荐',
  'vpn': 'VPN 与加速器',
  'clash': 'Clash 客户端',
  'resources': '资源与情报',
  'brands': '机场品牌库',
  'compare': '横向对比'
};

const subNameMap = {
  'recommend': '推荐评测',
  'ranking': '测速排行',
  'cost-effective': '高性价比',
  'stable': '稳定专线',
  'cheap': '便宜机场',
  'free': '免费梯子',
  'guide': '通识指南',
  'mobile': '手机客户端',
  'reviews': '深度评测',
  'accelerator': '外贸加速器',
  'comparison': '加速器对比',
  'best': '年度最好用',
  'verge': 'Clash Verge',
  'verge-download': 'Verge 下载',
  'verge-subscription': '订阅管理',
  'meta': 'Clash Meta',
  'tutorial': '新手教程',
  'troubleshooting': '故障排查',
  'free-nodes': '免费节点',
  'risk-warning': '跑路预警',
  'faq': '高频 FAQ',
  'intelligence': '风险情报',
  'node-check': '节点检测',
  'subscription-issues': '订阅问题',
  'beginner': '新手帮助'
};

function generateBreadcrumb(relativePath, pageTitle, canonicalUrl) {
  if (relativePath === 'index.md' || relativePath === '404.md') return null;

  const parts = relativePath.replace(/\\/g, '/').replace(/\.md$/, '').split('/');
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: 'https://tizicloud.homes/'
    }
  ];

  let currentPath = '';
  let pos = 2;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === 'index') continue;

    currentPath += (currentPath ? '/' : '') + part;
    const isLast = (i === parts.length - 1) || (i === parts.length - 2 && parts[i + 1] === 'index');

    let name = navNameMap[part] || subNameMap[part] || part;
    if (isLast) {
      name = pageTitle ? pageTitle.split(/[:：\-_|]/)[0].trim() : name;
    }

    const itemUrl = isLast ? canonicalUrl : `https://tizicloud.homes/${currentPath}/`;

    items.push({
      '@type': 'ListItem',
      position: pos++,
      name: name,
      item: itemUrl
    });

    if (isLast) break;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
}

// Test cases
console.log('Hub test:');
console.log(JSON.stringify(generateBreadcrumb('airport/cheap/index.md', '便宜机场 2026 深度选型与权威指南', 'https://tizicloud.homes/airport/cheap/'), null, 2));

console.log('\nArticle test:');
console.log(JSON.stringify(generateBreadcrumb('airport/cheap/pitfalls/cheap-pitfalls-art-1.md', '【低价机场避坑与备用策略】：2026 深度选型', 'https://tizicloud.homes/airport/cheap/pitfalls/cheap-pitfalls-art-1'), null, 2));
