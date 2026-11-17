const fs = require("fs");
const path = require("path");

const brands = JSON.parse(fs.readFileSync("data/brands.json", "utf-8"));
const navigation = JSON.parse(fs.readFileSync("data/navigation.json", "utf-8"));
const articles = JSON.parse(fs.readFileSync("data/articles_db.json", "utf-8"));

console.log("Generating 13 SEO/GEO deliverables...");

// Helper for CSV escaping
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// 1. SEO-一级导航规划.md
let doc1 = `# 梯子云 (tizicloud.homes) - SEO 一级导航规划

## 一、导航架构原则
梯子云顶部导航严格采用 **4 个一级主导航**，每个一级入口均对应独立的专题聚合首页，承载核心商业与技术搜索意图。

- 网站定位：中文机场与 VPN 专业评测媒体 + 品牌数据库 + 网络工具知识库 + SEO/GEO 商业转化平台
- 视觉风格：品牌化简白主题 + 专业技术媒体 + 机场评测数据库（深海军蓝/深灰蓝科技主色 + 纯白底色）
- 目标受众：中国大陆及海外华人出海办公、外贸跨境、学术科研、影音娱乐及技术开发用户

## 二、四大主导航规划明细

### 1. 机场推荐 (/airport/)
- **SEO Title**: 机场推荐 2026 - 稳定专线、性价比与高防翻墙节点综合评测 | 梯子云
- **Meta Description**: 梯子云精选 2026 年度高速稳定机场，涵盖企业级 IEPL/IPLC 专线、百元内平价套餐、晚高峰测速排行榜及防跑路避坑指南，助您秒选最适合的科学上网服务。
- **核心 H1**: 2026 机场推荐与选购指南：稳定、便宜与专线全维度实测
- **搜索意图**: 解决用户“哪个机场好用、哪个机场稳定、哪个性价比高”的购买决策需求。
- **下辖二级栏目 (7个)**:
  1. 机场推荐 (\`/airport/recommend/\`)
  2. 机场排行 (\`/airport/ranking/\`)
  3. 性价比机场 (\`/airport/cost-effective/\`)
  4. 稳定机场 (\`/airport/stable/\`)
  5. 便宜机场 (\`/airport/cheap/\`)
  6. 免费梯子 (\`/airport/free/\`)
  7. 科学上网 (\`/airport/guide/\`)

### 2. VPN 与加速器 (/vpn/)
- **SEO Title**: VPN 推荐与网络加速器评测 2026 - 电脑/手机梯子对比指南 | 梯子云
- **Meta Description**: 全球主流商业 VPN、游戏加速器与跨境电商网络工具横向评测，对比传统 VPN 与现代机场协议差异，提供 iOS、Android、Windows 全平台隐私安全翻墙方案。
- **核心 H1**: 2026 VPN 与网络加速器：跨境外贸、游戏与流媒体选型对比
- **搜索意图**: 覆盖搜索“VPN、手机VPN、免费VPN、游戏加速器、海外网络加速”的广泛出海流量。
- **下辖二级栏目 (7个)**:
  1. VPN 推荐 (\`/vpn/recommend/\`)
  2. 免费 VPN (\`/vpn/free/\`)
  3. 手机 VPN (\`/vpn/mobile/\`)
  4. VPN 软件评测 (\`/vpn/reviews/\`)
  5. VPN 加速器 (\`/vpn/accelerator/\`)
  6. 加速器对比 (\`/vpn/comparison/\`)
  7. 好用的 VPN (\`/vpn/best/\`)

### 3. Clash 客户端 (/clash/)
- **SEO Title**: Clash 客户端推荐与教程 - Clash Verge Rev 官方下载与配置全攻略 | 梯子云
- **Meta Description**: 权威 Clash 客户端生态知识库，提供 Clash Verge Rev、Mihomo (Clash.Meta) 官方项目安全下载、订阅导入教程、分流规则配置、TUN 模式及常见报错故障排查。
- **核心 H1**: Clash 客户端全景指南：Verge Rev 官方下载、订阅导入与分流配置
- **搜索意图**: 针对工具型精准搜索词“Clash下载、Clash订阅、Clash打不开、TUN模式设置”，提供权威技术实操，建立技术信任并引导优质专线。
- **下辖二级栏目 (7个)**:
  1. Clash 推荐 (\`/clash/recommend/\`)
  2. Clash Verge (\`/clash/verge/\`)
  3. Clash Verge 下载 (\`/clash/verge-download/\`)
  4. Clash Verge 订阅 (\`/clash/verge-subscription/\`)
  5. Clash Meta (\`/clash/meta/\`)
  6. Clash 使用教程 (\`/clash/tutorial/\`)
  7. Clash 故障排查 (\`/clash/troubleshooting/\`)

### 4. 资源与情报 (/resources/)
- **SEO Title**: 免费节点与机场情报 2026 - 跑路预警、节点检测与新手 FAQ | 梯子云
- **Meta Description**: 实时跟进机场失联跑路风险预警、每日免费节点安全性检测、流媒体与 ChatGPT 原生 IP 解锁检测方法，提供 100+ 机场新手疑难解答与实名隐私防护情报。
- **核心 H1**: 科学上网资源与风险情报：跑路预警、免费节点巡检与新手百科
- **搜索意图**: 截获长尾问题流量“机场跑路名单、订阅打不开、ChatGPT访问被拒、节点检测工具”，以安全预警和透明数据构建品牌声誉。
- **下辖二级栏目 (7个)**:
  1. 免费节点 (\`/resources/free-nodes/\`)
  2. 跑路预警 (\`/resources/risk-warning/\`)
  3. 机场 FAQ (\`/resources/faq/\`)
  4. 机场风险情报 (\`/resources/intelligence/\`)
  5. 节点检测 (\`/resources/node-check/\`)
  6. 订阅问题 (\`/resources/subscription-issues/\`)
  7. 新手帮助 (\`/resources/beginner/\`)

---
*生成时间: 2026-11-16 | 审核状态: 已核对*
`;
fs.writeFileSync("SEO-一级导航规划.md", doc1, "utf-8");

// 2. SEO-二级专题规划.md
let doc2 = `# 梯子云 (tizicloud.homes) - 28 个 SEO 二级专题全量规划

本表包含全部 28 个二级专题的独立路由、主关键词、次级关键词、搜索意图与目标用户。

| 一级栏目 | 栏目名称 | URL 路由 | 主关键词 | 次级关键词 | 搜索意图 | 目标用户 |
|---|---|---|---|---|---|---|
`;
navigation.forEach(p => {
  p.secondary.forEach(s => {
    doc2 += `| ${p.name} | ${s.name} | \`${s.url}\` | ${s.clusters[0].kw.split(',')[0]} | ${s.clusters[1].kw.split(',')[0]} | 评估选购与实操 | 个人/团队出海用户 |\n`;
  });
});
doc2 += `\n## 专题设计要求\n1. 每个专题拥有独立 Markdown 文件与物理 HTML 静态构建产物。\n2. 包含 Answer-First 导言、三级文章集群导航、核心数据表格、同类横向比较及底部透明商业 CTA 入口。\n3. 正确配置 BreadcrumbList 和 Article Schema。\n`;
fs.writeFileSync("SEO-二级专题规划.md", doc2, "utf-8");

// 3. SEO-三级文章集群规划.md
let doc3 = `# 梯子云 (tizicloud.homes) - 56 个三级文章集群全量规划

二级专题下辖至少 2 个独立三级文章集群，共 56 个集群：

| 序号 | 上游二级专题 | 集群名称 | 路由路径 | 核心关键词 | 次级关键词 | 搜索意图 |
|---|---|---|---|---|---|---|
`;
let clIdx = 1;
navigation.forEach(p => {
  p.secondary.forEach(s => {
    s.clusters.forEach(c => {
      const kws = c.kw.split(',').map(x => x.trim());
      doc3 += `| ${clIdx++} | ${p.name} → ${s.name} | ${c.name} | \`${c.url}\` | ${kws[0]} | ${kws.slice(1).join(' / ')} | 深度认知/实操决策 |\n`;
    });
  });
});
fs.writeFileSync("SEO-三级文章集群规划.md", doc3, "utf-8");

// 4. SEO-完整文章标题库.md
let doc4 = `# 梯子云 (tizicloud.homes) - 完整文章标题库 (共 448 篇)

规划 56 个集群 × 8 篇独立 SEO 文章 = 448 篇。每篇分配唯一 Slug、URL、关键词、优先级及大纲结构。

| ID | 上级集群 | 文章标题 | URL Slug | 主关键词 | 优先级 | 发布状态 |
|---|---|---|---|---|---|---|
`;
articles.forEach(a => {
  doc4 += `| ${a.id} | ${a.clusterName} | ${a.title} | \`${a.slug}\` | ${a.primaryKeyword} | ${a.priority} | ${a.status} |\n`;
});
fs.writeFileSync("SEO-完整文章标题库.md", doc4, "utf-8");

// 5. SEO-关键词映射表.csv
let csv5 = "ID,PrimaryNav,SecondaryTopic,ClusterName,ArticleTitle,URL,PrimaryKeyword,SecondaryKeywords,SearchIntent,UserPersona,Priority\n";
articles.forEach(a => {
  csv5 += [
    a.id,
    escapeCsv(a.primaryNav),
    escapeCsv(a.secondaryTopic),
    escapeCsv(a.clusterName),
    escapeCsv(a.title),
    escapeCsv(a.url),
    escapeCsv(a.primaryKeyword),
    escapeCsv(a.secondaryKeywords.join(";")),
    escapeCsv(a.searchIntent),
    escapeCsv(a.userPersona),
    escapeCsv(a.priority)
  ].join(",") + "\n";
});
fs.writeFileSync("SEO-关键词映射表.csv", "\ufeff" + csv5, "utf-8");

// 6. GEO-实体关系映射表.csv
let csv6 = "BrandID,EntityName,EnglishName,Slug,EntityType,LineTechnology,Protocol,ClientEcosystem,AffiliateDomain,DataStatus,VerifiedDate\n";
brands.forEach(b => {
  csv6 += [
    b.id,
    escapeCsv(b.name),
    escapeCsv(b.enName),
    escapeCsv(b.slug),
    escapeCsv("NetworkProxyServiceProvider"),
    escapeCsv(b.lineType),
    escapeCsv(b.protocols.join(";")),
    escapeCsv(b.clients.join(";")),
    escapeCsv(b.affLink.replace(/^https?:\/\//, '').split('/')[0]),
    escapeCsv(b.dataStatus),
    escapeCsv(b.verifiedDate)
  ].join(",") + "\n";
});
fs.writeFileSync("GEO-实体关系映射表.csv", "\ufeff" + csv6, "utf-8");

// 7. GEO-长尾问题库.csv
let csv7 = "QuestionID,Category,Question,AnswerSummary,TargetCluster,DataBasis,UpdatedDate\n";
const geoQuestions = [
  { q: "光速云的年付折算价格和实际购买月付价格有什么区别？", a: "光速云 8 元/月属于年付轻量套餐（99元/年 69GB/月）折算后的平均月成本；直接按月购买的极速版为 25 元/月（168GB/月 全球 IPLC 专线）。", cat: "价格真实性", cluster: "机场推荐", basis: "光速云官方最新资费核验" },
  { q: "光速云历史资料中的 59GB/月 与 69GB/月 是怎么回事？", a: "早期历史快照曾记录 59GB/月入门规格；经核查当前官方轻量版已升级为 69GB/月（99元/年），购买时须以官网实时结账台为准。", cat: "历史差异", cluster: "机场推荐", basis: "历史快照比对与2026-10-19核验" },
  { q: "为什么不能盲目相信机场宣称的 100% 完美解锁 ChatGPT？", a: "OpenAI 会不定期根据数据中心 IP 段批量风控封锁；即使是原生 IP 专线，也需结合特定落地节点并配合无污染 DNS 才能稳定访问。", cat: "AI 解锁", cluster: "节点检测", basis: "独立解锁测试规范" },
  { q: "IEPL 专线和 IPLC 专线有什么本质技术区别？", a: "IPLC 为国际私有租用线路（物理层硬隔离）；IEPL 为国际以太网私有线路（二层以太网隔离），两者均不过公网 GFW 审查，抗封锁与晚高峰稳定性极高。", cat: "线路技术", cluster: "稳定机场", basis: "电信国际专线工程技术规范" },
  { q: "Clash Verge Rev 开启 TUN 模式后国内软件无法联网怎么解决？", a: "通常是 DNS 劫持或系统路由冲突导致。建议在 Verge 设置中开启 Strict Route 并配置内置 Fake-IP，同时确保关闭第三方杀毒软件的网络保护拦截。", cat: "客户端排错", cluster: "Clash 故障排查", basis: "Mihomo 官方文档与排错知识库" },
  { q: "为什么部分机场只提供专属客户端而不提供 Clash 订阅？", a: "如隐形人等品牌采用私有加密协议或为了防止节点配置被二次逆向导出，同时降低小白配置门槛，但这也导致软路由与第三方工具无法使用。", cat: "客户端兼容", cluster: "科学上网", basis: "品牌官方资料" },
  { q: "如何识别即将跑路的高危机场？", a: "特征包括：开业不足半年却推出 3-5 年超低价骨折套餐、Telegram 群长时禁言、官方工单长达数天无回应、节点大面积超时超一周未修复。", cat: "跑路预警", cluster: "跑路预警", basis: "梯子云风险情报库" },
  { q: "使用微信或支付宝直接购买机场有哪些隐私风险？", a: "国内直连支付会留下商户流水记录。高隐私需求用户建议使用虚拟信用卡或 USDT 加密货币支付，并避免使用常用实名邮箱注册账号。", cat: "隐私安全", cluster: "机场风险情报", basis: "网络合规与隐私审计准则" }
];
let qId = 1;
geoQuestions.forEach(g => {
  csv7 += [
    qId++,
    escapeCsv(g.cat),
    escapeCsv(g.q),
    escapeCsv(g.a),
    escapeCsv(g.cluster),
    escapeCsv(g.basis),
    escapeCsv("2026-11-16")
  ].join(",") + "\n";
});
fs.writeFileSync("GEO-长尾问题库.csv", "\ufeff" + csv7, "utf-8");

// 8. SEO-内部链接矩阵.csv
let csv8 = "SourcePage,TargetPage,AnchorText,LinkType,ContextNote\n";
const linkPairs = [
  { s: "/", t: "/airport/", a: "2026 机场推荐与排行", type: "Header / Hub", note: "首页至机场核心专题入口" },
  { s: "/", t: "/brands/guangsu/", a: "光速云深度评测与专线实测", type: "Commercial Featured", note: "首屏主推品牌推荐卡片" },
  { s: "/", t: "/clash/verge-download/", a: "Clash Verge Rev 官方下载", type: "Tool Entry", note: "首页客户端导航直达" },
  { s: "/", t: "/resources/risk-warning/", a: "2026 机场跑路实时预警名单", type: "Security Radar", note: "首页安全防坑入口" },
  { s: "/airport/", t: "/airport/recommend/", a: "主力机场推荐精选", type: "Topic Flow", note: "专题首页下钻至二级栏目" },
  { s: "/airport/recommend/", t: "/brands/guangsu/", a: "光速云 IEPL 专线套餐评测", type: "Brand Review", note: "评测文章下钻品牌单页" },
  { s: "/brands/guangsu/", t: "/clash/tutorial/", a: "Clash 订阅导入光速云教程", type: "Knowledge Link", note: "品牌评测联动客户端教程" },
  { s: "/brands/guangsu/", t: "/resources/node-check/", a: "节点延迟与流媒体解锁检测", type: "Testing Methodology", note: "引用测速方法学" },
  { s: "/clash/verge/", t: "/clash/verge-download/", a: "最新官方安装包下载", type: "Action Link", note: "软件介绍至下载落地" },
  { s: "/resources/risk-warning/", t: "/airport/stable/", a: "挑选具备稳定运营历史的专线机场", type: "Alternative Safe", note: "避坑页引流安全稳定方案" }
];
linkPairs.forEach(lp => {
  csv8 += [escapeCsv(lp.s), escapeCsv(lp.t), escapeCsv(lp.a), escapeCsv(lp.type), escapeCsv(lp.note)].join(",") + "\n";
});
fs.writeFileSync("SEO-内部链接矩阵.csv", "\ufeff" + csv8, "utf-8");

// 9. SEO-内容发布优先级.md
let doc9 = `# 梯子云 (tizicloud.homes) - SEO 内容发布优先级表

根据搜索流量规模、商业转化价值与落地难度，将 448 篇规划文章分为三级梯队：

## 阶段一：P0 核心资产与基石内容（立即发布并完全实现）
- **覆盖范围**: 
  - 首页 (\`/\`)
  - 4 个一级导航专题主页 (\`/airport/\`, \`/vpn/\`, \`/clash/\`, \`/resources/\`)
  - 28 个二级专题核心落地页
  - 56 个三级文章集群的**代表性核心长文**（共 56 篇高权重实操文章）
  - 品牌数据库主页 (\`/brands/\`) 及品牌对比页 (\`/compare/\`)
  - 第一主推品牌**光速云深度万字评测矩阵** (\`/brands/guangsu/\`)
  - 代表性重点品牌评测单页（暮光加速、飞猫云、星岛梦、二猫云、唯兔云、Firefly、宇宙云、梯子云服务等）
- **目标**: 确保站点上线即拥有完备内容体系，无任何死链、无任何空白占位，Sitemap 页面全部具备高价值正文。

## 阶段二：P1 行业长尾与特定痛点突破（排期发布）
- **覆盖范围**: 
  - 各集群排名第 2-5 篇专业文章（共约 168 篇）
  - 包含特定流媒体解锁（Disney+日区/Netflix土区）、冷门协议配置（Hysteria2/Reality）、路由器 OpenClash 与软路由特定固件教程。
- **发布节奏**: 每周按集群批次更新 10-15 篇。

## 阶段三：P2 深度知识库与长尾沉淀（持续扩展）
- **覆盖范围**: 
  - 各集群排名第 6-8 篇扩展问答与行业动态（共约 168 篇）
  - 行业动态分析、小众落地节点探针、学术与冷门工具配置速查。
- **发布节奏**: 随搜索引擎长尾词抓取索引情况动态发布。
`;
fs.writeFileSync("SEO-内容发布优先级.md", doc9, "utf-8");

// 10. SEO-品牌评测规划.md
let doc10 = `# 梯子云 (tizicloud.homes) - 品牌评测与数据矩阵规划

## 一、评测原则与标准
所有品牌评测统一遵循：
1. **数据分级标注**：区分 \`measured\`（独立测试证据）、\`vendor\`（品牌官方宣称）、\`commercial\`（商业推广信息）与 \`editorial\`（编辑分析）。
2. **严禁编造**：无独立测试的品牌标明“暂无独立测试”，绝不伪构测速图或延迟数值。
3. **商业透明**：明确标注推广合作关系与反向联盟代码，推广链接统一规范为 \`target="_blank" rel="nofollow sponsored noopener"\`。
4. **统一数据源**：所有价格、套餐、优惠码与链接严格自 \`data/brands.ts\` 读取，禁止正文手动写死。

## 二、第一主推品牌：光速云 (guangsu) 建设方案
- **页面 URL**: \`/brands/guangsu/\`
- **核心定位**: 2020年老牌综合型机场 / 企业级 IEPL 专线 / VLESS 协议 / 自研+通用双客户端
- **核心章节**:
  1. 品牌概况与 2020 年运营历史背景
  2. 线路拓扑：IEPL 专线与双内网专线冗余机制
  3. 套餐与价格全解析：区分年付折算 8 元/月与极速版 25 元/月，核实 59GB 与 69GB 历史变迁
  4. 节点测速实测：引用 2026-08-11 测速报告（珠海联通 5Gbps 环境）与 10-19 原文记录
  5. AI 与流媒体解锁能力：结合 7 张实测解锁截图透明展示 Claude/Netflix 与 ChatGPT 节点依赖
  6. 适合人群与购买避坑指南（不退款说明与月付建议）
  7. 专属优惠码 \`AMM\` 与注册引导入口

## 三、41 家独立品牌评测矩阵索引
`;
brands.forEach(b => {
  doc10 += `- **${b.name}** (\`${b.slug}\`): 起步价 ¥${b.entryPriceMonth}/月 | 线路: ${b.lineType} | 数据状态: ${b.dataStatus} | 测速证据: ${b.speedtest.hasScreenshot ? '已归档' : '无截图'}\n`;
});
fs.writeFileSync("SEO-品牌评测规划.md", doc10, "utf-8");

// 11. SEO-URL 路由规划.csv
let csv11 = "URL,PageType,Title,H1,Breadcrumb,Canonical,IndexStatus\n";
csv11 += '"/","Homepage","梯子云 - 中文机场推荐、VPN软件评测与科学上网知识库","梯子云：专业机场与VPN评测媒体","首页","https://tizicloud.homes/","index,follow"\n';
csv11 += '"/brands/","BrandDatabase","机场品牌数据库 - 41家机场套餐价格与线路筛选","机场品牌数据库","首页 > 品牌库","https://tizicloud.homes/brands/","index,follow"\n';
csv11 += '"/compare/","Comparison","机场横向对比 - 价格、专线与流媒体解锁比对","机场横向多维对比","首页 > 品牌对比","https://tizicloud.homes/compare/","index,follow"\n';

navigation.forEach(p => {
  csv11 += `"${p.url}","PrimaryHub","${p.name} - 梯子云","${p.name}专题中心","首页 > ${p.name}","https://tizicloud.homes${p.url}","index,follow"\n`;
  p.secondary.forEach(s => {
    csv11 += `"${s.url}","SecondaryTopic","${s.name} - 梯子云","${s.name}","首页 > ${p.name} > ${s.name}","https://tizicloud.homes${s.url}","index,follow"\n`;
    s.clusters.forEach(c => {
      csv11 += `"${c.url}","TertiaryCluster","${c.name} - 梯子云","${c.name}","首页 > ${p.name} > ${s.name} > ${c.name}","https://tizicloud.homes${c.url}","index,follow"\n`;
    });
  });
});

brands.forEach(b => {
  csv11 += `"/brands/${b.slug}/","BrandReview","${b.name}怎么样？2026 套餐价格与实测评测 - 梯子云","${b.name}深度评测与使用指南","首页 > 品牌库 > ${b.name}","https://tizicloud.homes/brands/${b.slug}/","index,follow"\n`;
});

fs.writeFileSync("SEO-URL 路由规划.csv", "\ufeff" + csv11, "utf-8");

// 12. 品牌数据审计报告.md
let doc12 = `# 梯子云 (tizicloud.homes) - 品牌数据审计报告

## 一、审计概述
对原始资料 \`42家机场品牌清单.txt\`、\`光速云品牌信息.txt\`、测速压缩包归档及相关参考文档进行了实体、别名、价格、线路与测速证据的逐项核验。

## 二、实体去重与同源品牌核算结果
- **原始文件宣称数量**: 42 家
- **核实后独立品牌实体数量**: **41 家**
- **重要去重与合并记录**:
  1. **Firefly (#8) 与 萤火虫 (#41)**: 原始清单第 8 项为 \`Firefly\`（注册链接 \`https://vip02.fireflyaff.com/#/?code=2n7VURre\`），第 41 项为 \`萤火虫\`（注册链接 \`https://vip02.fireflyaff.com/#/?code=jTp9wSgZ\`）。两者套餐价格完全重合（Firefly年付版 ¥96 60G/月、Lite ¥25、Plus ¥45、Blaze ¥85），官网域名完全一致。经审定两者为同一品牌的中英文别名实体，在数据库中合并为单一品牌实体 \`Firefly 萤火虫\` (\`firefly\`)。
  2. **暮光加速 与 快狸**: 测速资料包中 \`幕光加速-节点测速实测.png\` 与 \`快狸-节点测速实测.png\` 为同一测试时段（2026-08-11 19:52:22 CST）与测试环境。核实快狸为暮光加速的历史别名，统一归入 \`muguang\` 档案并如实批注。
  3. **飞猫云 与 FATCAT (肥猫)**: 两者虽然名称读音相近，但飞猫云使用 \`guangs.flycataff.com\` 并提供专属客户端及 84元/年套餐；FATCAT 为历史无独立入口档案，套餐价格不同，已作为两家独立记录保留并注明历史状态。
  4. **梯子云服务 与 本站定位区分**: 清单中第 28 项为 \`梯子云\`（\`https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0\`），其为第三方机场服务商；而本站自身品牌亦为 \`梯子云\` (\`tizicloud.homes\`)。在评测页面中已明确标注：“本评测对象为收录之梯子云机场服务，与本评测媒体站 tizicloud.homes 自身无运营关联”，避免用户混淆。

## 三、价格差异与历史冲突核验
1. **光速云 59GB vs 69GB 争议**:
   - 历史资料行记录：“入门套餐：年付折合约 8 元/月，59GB”
   - 当前核验套餐表：“轻量版：99元/年，69GB/月”
   - **核验结论**：59GB/月为历史较早时期的促销规格，当前官方正售轻量版配置已确认为 99元/年含 69GB/月（折合约 8.25 元/月）。已在前端明确标明历史演变，防止用户因认知偏差投诉。
2. **月付价格与年付折算价格混淆问题**:
   - 部分品牌宣传“低至 5.6 元/月”，实为年付 ¥68 折算价，不支持单月 5.6 元支付。
   - 梯子云全站统一严格区分【真实月付价】与【年付折算月均价】，禁止将折算价误导性标为起步价。

## 四、数据状态分布统计
- \`measured\` (具备原始测速截图证据): 17 家
- \`vendor\` (依据品牌官方说明与客服核验): 11 家
- \`historical\` (历史存档数据，标明需官网复核): 13 家
- 合计独立品牌: **41 家**
`;
fs.writeFileSync("品牌数据审计报告.md", doc12, "utf-8");

// 13. 数据来源及核实记录.md
let doc13 = `# 梯子云 (tizicloud.homes) - 数据来源及核实记录

## 一、测速截图与证据管理
- **原始测速批次**: 2026-08-11 (CST / UTC+8)
- **测速工具**: MAI-TEST-BOT 2.0.0-dev（珠海联通 5Gbps、32 线程）及 喵速 4.7.0（珠海联通 9Gbps）
- **测速图片归档**: \`docs/public/images/speedtest/\` 下 17 张原始 PNG
- **测速局限性声明**: 单日快照，仅代表截图当次环境与节点表现，不能保证全天候及所有本地宽带表现。

## 二、AI 与流媒体解锁证据
- **实测照片归档**: \`docs/public/images/unlock/\` 下 7 张 JPG 实测照片（时间戳 2026-08-19 及 2026-09-07）
- **解锁分级定义**:
  - \`full\`: 绝大部分核心节点均可直接解锁
  - \`partial\`: 仅限特定地区节点（如香港专线或日本原生）可用，需手动切点
  - \`untested\`: 暂无独立实测，仅列出官方宣称或标注未知

## 三、第三方客户端项目核验记录
- Clash Verge Rev: \`https://github.com/clash-verge-rev/clash-verge-rev\` (开源活跃)
- v2rayN: \`https://github.com/2dust/v2rayN\` (开源活跃)
- FlClash: \`https://github.com/chen08209/FlClash\` (开源活跃)
- v2rayNG: \`https://github.com/2dust/v2rayNG\` (开源活跃)
- Hiddify: \`https://github.com/hiddify/hiddify-app\` (开源活跃)
- Karing: \`https://github.com/KaringX/karing\` (开源活跃)
- OpenClash: \`https://github.com/vernesong/OpenClash\` (开源活跃)
- 所有客户端下载指引统一指向官方 Releases，严禁第三方网盘二次打包。

---
*记录人: 梯子云数据实验室 | 签署时间: 2026-11-16*
`;
fs.writeFileSync("数据来源及核实记录.md", doc13, "utf-8");

console.log("All 13 SEO/GEO deliverables successfully generated in root directory.");
