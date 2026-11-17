import { defineConfig } from 'vitepress';

// 搜索引擎站长平台所有权验证配置（支持环境变量注入或直接在此填入代码）
const verificationCodes = {
  google: process.env.GOOGLE_SITE_VERIFICATION || '',
  bing: process.env.BING_SITE_VERIFICATION || '',
  baidu: process.env.BAIDU_SITE_VERIFICATION || '',
  shenma: process.env.SHENMA_SITE_VERIFICATION || ''
};

const navNameMap: Record<string, string> = {
  'airport': '机场推荐',
  'vpn': 'VPN 与加速器',
  'clash': 'Clash 客户端',
  'resources': '资源与情报',
  'brands': '机场品牌库',
  'compare': '横向对比'
};

const subNameMap: Record<string, string> = {
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

export default defineConfig({
  title: '梯子云',
  description: '中文机场推荐、VPN评测与科学上网知识库 - 专业机场测速排行榜与全平台 Clash 客户端教程',
  lang: 'zh-CN',
  cleanUrls: true,
  titleTemplate: ':title',
  sitemap: {
    hostname: 'https://tizicloud.homes',
    transformItems(items) {
      return items.filter(item => !item.url.includes('404'));
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/avatar.jpg' }],
    ['meta', { name: 'theme-color', content: '#1d4ed8' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: '机场推荐, 机场排行, 性价比机场, 稳定机场, 便宜机场, 免费梯子, 科学上网, VPN推荐, Clash Verge, Clash Meta, 免费节点, 跑路预警' }],
    ['meta', { property: 'og:site_name', content: '梯子云' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://tizicloud.homes/images/avatar.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://tizicloud.homes/images/avatar.jpg' }],
    // 搜索引擎验证代码（有值时动态输出）
    ...(verificationCodes.google ? [['meta', { name: 'google-site-verification', content: verificationCodes.google }]] as any : []),
    ...(verificationCodes.bing ? [['meta', { name: 'msvalidate.01', content: verificationCodes.bing }]] as any : []),
    ...(verificationCodes.baidu ? [['meta', { name: 'baidu-site-verification', content: verificationCodes.baidu }]] as any : []),
    ...(verificationCodes.shenma ? [['meta', { name: 'shenma-site-verification', content: verificationCodes.shenma }]] as any : []),
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://tizicloud.homes/#organization',
            name: '梯子云',
            url: 'https://tizicloud.homes',
            logo: 'https://tizicloud.homes/images/avatar.jpg',
            description: '中文机场与 VPN 专业评测媒体 + 品牌数据库 + 网络工具知识库'
          },
          {
            '@type': 'WebSite',
            '@id': 'https://tizicloud.homes/#website',
            url: 'https://tizicloud.homes',
            name: '梯子云',
            publisher: { '@id': 'https://tizicloud.homes/#organization' },
            inLanguage: 'zh-CN'
          }
        ]
      })
    ]
  ],
  transformHead({ pageData }) {
    const head: [string, Record<string, string>, string?][] = [];

    // 1. 规范化 Canonical URL 与 Open Graph URL
    let p = pageData.relativePath.replace(/\\/g, '/').replace(/\.md$/, '');
    let canonicalUrl = 'https://tizicloud.homes/';
    if (p !== 'index') {
      if (p.endsWith('/index')) {
        p = p.substring(0, p.length - 5);
      }
      canonicalUrl = `https://tizicloud.homes/${p}`;
    }
    head.push(['link', { rel: 'canonical', href: canonicalUrl }]);
    head.push(['meta', { property: 'og:url', content: canonicalUrl }]);

    // 2. 结构化数据 Schema 针对性输出
    if (pageData.relativePath !== 'index.md' && pageData.relativePath !== '404.md') {
      // (1) 面包屑导航 BreadcrumbList Schema
      const parts = pageData.relativePath.replace(/\\/g, '/').replace(/\.md$/, '').split('/');
      const breadcrumbItems: any[] = [
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
          name = pageData.title ? pageData.title.split(/[:：\-_|]/)[0].trim() : name;
        }

        const itemUrl = isLast ? canonicalUrl : `https://tizicloud.homes/${currentPath}/`;

        breadcrumbItems.push({
          '@type': 'ListItem',
          position: pos++,
          name: name,
          item: itemUrl
        });

        if (isLast) break;
      }

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems
      };
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbSchema)]);

      // (2) 页面级业务 Schema: Article 或 CollectionPage
      const isHub = parts[parts.length - 1] === 'index' || parts.length <= 2;
      const schemaType = isHub ? 'CollectionPage' : 'Article';

      const pageSchema: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        headline: pageData.title || '梯子云专业技术指南',
        name: pageData.title || '梯子云专业技术指南',
        description: pageData.description || '梯子云专业评测媒体与网络工具知识库。',
        url: canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        author: {
          '@type': 'Organization',
          name: '梯子云技术审计团队',
          url: 'https://tizicloud.homes'
        },
        publisher: {
          '@type': 'Organization',
          name: '梯子云',
          logo: {
            '@type': 'ImageObject',
            url: 'https://tizicloud.homes/images/avatar.jpg'
          }
        },
        inLanguage: 'zh-CN'
      };

      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(pageSchema)]);
    }

    return head as any;
  },
  themeConfig: {
    siteTitle: '梯子云 tizicloud.homes',
    logo: '/images/avatar.jpg',
    nav: [
      {
        text: '机场推荐',
        link: '/airport/',
        items: [
          { text: '机场推荐大全', link: '/airport/recommend/' },
          { text: '晚高峰测速排行', link: '/airport/ranking/' },
          { text: '高性价比机场精选', link: '/airport/cost-effective/' },
          { text: '企业级稳定专线', link: '/airport/stable/' },
          { text: '10元内平价便宜机场', link: '/airport/cheap/' },
          { text: '免费梯子与试用核验', link: '/airport/free/' },
          { text: '科学上网通识指南', link: '/airport/guide/' }
        ]
      },
      {
        text: 'VPN 与加速器',
        link: '/vpn/',
        items: [
          { text: '全球商业 VPN 推荐', link: '/vpn/recommend/' },
          { text: '免费 VPN 实测与风险', link: '/vpn/free/' },
          { text: '手机端移动翻墙', link: '/vpn/mobile/' },
          { text: 'VPN 软件技术评测', link: '/vpn/reviews/' },
          { text: '跨境外贸网络加速器', link: '/vpn/accelerator/' },
          { text: '游戏与网络加速器对比', link: '/vpn/comparison/' },
          { text: '年度最好用 VPN 榜单', link: '/vpn/best/' }
        ]
      },
      {
        text: 'Clash 客户端',
        link: '/clash/',
        items: [
          { text: 'Clash 客户端全家桶推荐', link: '/clash/recommend/' },
          { text: 'Clash Verge Rev 核心详解', link: '/clash/verge/' },
          { text: 'Clash Verge 官方安全下载', link: '/clash/verge-download/' },
          { text: '订阅链接一键导入与维护', link: '/clash/verge-subscription/' },
          { text: 'Mihomo (Clash.Meta) 内核', link: '/clash/meta/' },
          { text: 'Clash 新手极速入门教程', link: '/clash/tutorial/' },
          { text: '无法联网与故障深度排查', link: '/clash/troubleshooting/' }
        ]
      },
      {
        text: '资源与情报',
        link: '/resources/',
        items: [
          { text: '每日免费节点安全巡检', link: '/resources/free-nodes/' },
          { text: '机场跑路与失联预警', link: '/resources/risk-warning/' },
          { text: '科学上网高频 FAQ 百科', link: '/resources/faq/' },
          { text: '专线成本与隐私风险情报', link: '/resources/intelligence/' },
          { text: '流媒体与 AI 原生检测', link: '/resources/node-check/' },
          { text: '订阅打不开与转换问题', link: '/resources/subscription-issues/' },
          { text: '新手小白从 0 到 1 指南', link: '/resources/beginner/' }
        ]
      },
      { text: '品牌数据库', link: '/brands/' },
      { text: '横向对比', link: '/compare/' }
    ],
    sidebar: {
      '/airport/': [
        {
          text: '✈️ 机场推荐专题',
          items: [
            { text: '机场专题首页', link: '/airport/' },
            { text: '1. 机场推荐', link: '/airport/recommend/' },
            { text: '2. 机场排行', link: '/airport/ranking/' },
            { text: '3. 性价比机场', link: '/airport/cost-effective/' },
            { text: '4. 稳定机场', link: '/airport/stable/' },
            { text: '5. 便宜机场', link: '/airport/cheap/' },
            { text: '6. 免费梯子', link: '/airport/free/' },
            { text: '7. 科学上网', link: '/airport/guide/' }
          ]
        }
      ],
      '/vpn/': [
        {
          text: '🛡️ VPN 与加速器专题',
          items: [
            { text: 'VPN 专题首页', link: '/vpn/' },
            { text: '1. VPN 推荐', link: '/vpn/recommend/' },
            { text: '2. 免费 VPN', link: '/vpn/free/' },
            { text: '3. 手机 VPN', link: '/vpn/mobile/' },
            { text: '4. VPN 软件评测', link: '/vpn/reviews/' },
            { text: '5. VPN 加速器', link: '/vpn/accelerator/' },
            { text: '6. 加速器对比', link: '/vpn/comparison/' },
            { text: '7. 好用的 VPN', link: '/vpn/best/' }
          ]
        }
      ],
      '/clash/': [
        {
          text: '⚡ Clash 客户端知识库',
          items: [
            { text: 'Clash 专题首页', link: '/clash/' },
            { text: '1. Clash 推荐', link: '/clash/recommend/' },
            { text: '2. Clash Verge', link: '/clash/verge/' },
            { text: '3. Clash Verge 下载', link: '/clash/verge-download/' },
            { text: '4. Clash Verge 订阅', link: '/clash/verge-subscription/' },
            { text: '5. Clash Meta', link: '/clash/meta/' },
            { text: '6. Clash 使用教程', link: '/clash/tutorial/' },
            { text: '7. Clash 故障排查', link: '/clash/troubleshooting/' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '📡 资源与情报专区',
          items: [
            { text: '资源情报首页', link: '/resources/' },
            { text: '1. 免费节点', link: '/resources/free-nodes/' },
            { text: '2. 跑路预警', link: '/resources/risk-warning/' },
            { text: '3. 机场 FAQ', link: '/resources/faq/' },
            { text: '4. 机场风险情报', link: '/resources/intelligence/' },
            { text: '5. 节点检测', link: '/resources/node-check/' },
            { text: '6. 订阅问题', link: '/resources/subscription-issues/' },
            { text: '7. 新手帮助', link: '/resources/beginner/' }
          ]
        }
      ],
      '/brands/': [
        {
          text: '🏢 机场品牌库',
          items: [
            { text: '品牌数据库全景', link: '/brands/' },
            { text: '光速云 (Guangsu Cloud)', link: '/brands/guangsu/' },
            { text: '暮光加速 (Twilight)', link: '/brands/muguang/' },
            { text: '飞猫云 (FlyCat)', link: '/brands/feimao/' },
            { text: '星岛梦 (Xingdaomeng)', link: '/brands/xingdaomeng/' },
            { text: '二猫云 (2Mao Cloud)', link: '/brands/ermao/' },
            { text: '唯兔云 (V2Yun)', link: '/brands/weitu/' },
            { text: 'Firefly 萤火虫', link: '/brands/firefly/' },
            { text: '宇宙云 (Universe)', link: '/brands/yuzhou/' },
            { text: '梯子云服务 (TiziCloud)', link: '/brands/tiziyun/' },
            { text: '全品牌横向对比', link: '/compare/' }
          ]
        }
      ]
    },
    footer: {
      message: '梯子云 (tizicloud.homes) - 专业中文机场评测媒体与网络工具知识库 | 商业推广合作披露',
      copyright: 'Copyright © 2026 梯子云. All rights reserved. 网站最终生成静态 HTML 支持 Apache 部署.'
    }
  }
});
