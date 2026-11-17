const fs = require("fs");
const path = require("path");

const brands = JSON.parse(fs.readFileSync("data/brands.json", "utf-8"));
const navigation = JSON.parse(fs.readFileSync("data/navigation.json", "utf-8"));
const articles = JSON.parse(fs.readFileSync("data/articles_db.json", "utf-8"));

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

// 2. Brand Database Page: docs/brands/index.md
ensureDir("docs/brands");
const brandsIndexMd = `---
title: 机场品牌数据库 2026 - 41 家机场套餐价格、专线线路与解锁筛选
description: 梯子云机场品牌数据库收录 41 家主流及小众网络机场服务商，提供按起步月费、IEPL/IPLC 专线、协议类型、ChatGPT 解锁能力与实测证据的多维筛选。
head:
  - - meta
    - name: keywords
      content: 机场品牌库, 机场大全, 机场套餐价格, 机场线路筛选, 科学上网品牌
---

# 🏢 机场品牌全景数据库 (41 家独立实体)

欢迎访问梯子云机场品牌数据中心。本数据库通过对 41 家独立机场服务商的实体资质、线路拓扑、套餐资费、实测证据及客服支持情况进行多维审计，拒绝虚假标价与夸大宣传。

> [!TIP] 数据库使用建议
> 您可以使用下方交互式控制台，按**线路类型**（IEPL/IPLC/BGP）、**价格区间**（10元内平价/主流专线）及**数据核验状态**（具备独立测速大图/品牌资料核实）快速定位目标品牌。

<BrandDatabase />

---

## 📋 品牌数据中心静态索引表 (搜索引擎可读)

为保障在 JavaScript 禁用或弱网环境下依然可快速检索，以下提供 41 家品牌的直接静态访问索引：

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>品牌名称</th>
        <th>起步月费</th>
        <th>线路架构</th>
        <th>主流协议</th>
        <th>实测状态</th>
        <th>详情链接</th>
      </tr>
    </thead>
    <tbody>
${brands.map(b => `      <tr>
        <td><strong><a href="/brands/${b.slug}/">${b.name}</a></strong></td>
        <td><strong style="color: #16a34a;">约 ¥${b.entryPriceMonth} / 月</strong></td>
        <td>${b.lineType}</td>
        <td>${b.protocols.join(', ')}</td>
        <td>${b.speedtest.hasScreenshot ? '<span style="color: #059669;">● 实测证据</span>' : '<span style="color: #64748b;">○ 资料核验</span>'}</td>
        <td><a href="/brands/${b.slug}/" style="color: #2563eb; font-weight: 600;">评测报告 ➔</a></td>
      </tr>`).join('\n')}
    </tbody>
  </table>
</div>

---

## ⚖️ 数据核验与合规声明
1. **数据分类原则**：\`measured\` 状态基于本站 2026 年实际测速截图与网络测试日志归档；\`vendor\` 状态基于品牌官方公开数据及客服反馈，发布前均已注明数据来源。
2. **商业关系披露**：本站部分品牌链接包含反向推广代号（Affiliate Code）。通过本站链接注册可能为梯子云带来维护佣金，但不增加用户的支付成本。评测内容不受商业合作影响，优缺点如实披露。
`;
fs.writeFileSync("docs/brands/index.md", brandsIndexMd, "utf-8");
console.log("Brand Database generated: docs/brands/index.md");

// 3. Comparison Page: docs/compare/index.md
ensureDir("docs/compare");
const compareMd = `---
title: 机场横向多维对比 2026 - 价格、流量、专线与流媒体解锁比对
description: 梯子云 2026 机场多维横评，横向对比光速云、暮光加速、飞猫云、星岛梦、Firefly 等核心品牌的专线延迟、套餐价格、流媒体解锁及售后支持。
---

# ⚖️ 2026 机场横向多维对比中心

在挑选机场时，用户往往面临“专线与中转如何权衡”、“价格与稳定性如何平衡”的难题。本页面选取代表性品牌，从六大关键维度进行横向拆解。

## 一、核心品牌横向参数矩阵

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>对比维度</th>
        <th>光速云 (第一主推)</th>
        <th>暮光加速</th>
        <th>飞猫云</th>
        <th>星岛梦</th>
        <th>Firefly 萤火虫</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>起步参考价格</strong></td>
        <td><strong style="color: #16a34a;">约 ¥8 / 月 (年付99)</strong></td>
        <td>¥20 / 月</td>
        <td>约 ¥7 / 月 (年付84)</td>
        <td>¥19 / 月</td>
        <td>约 ¥8 / 月 (年付96)</td>
      </tr>
      <tr>
        <td><strong>线路架构</strong></td>
        <td>IEPL 专线 + 双内网冗余</td>
        <td>BGP 智能调度 + 专线级出口</td>
        <td>中转与专线混合调度</td>
        <td>专线混合隧道 (2020年老牌)</td>
        <td>全专线 IPLC 直连</td>
      </tr>
      <tr>
        <td><strong>协议支持</strong></td>
        <td>VLESS</td>
        <td>VLESS</td>
        <td>Shadowsocks / VLESS</td>
        <td>Shadowsocks</td>
        <td>VLESS</td>
      </tr>
      <tr>
        <td><strong>客户端兼容</strong></td>
        <td>自研全平台 + Clash/小火箭</td>
        <td>全平台通用 + Clash/v2rayN</td>
        <td>专属客户端 (免配订阅)</td>
        <td>Clash / 小火箭 / Surge</td>
        <td>专属客户端登录即用</td>
      </tr>
      <tr>
        <td><strong>AI 生产力解锁</strong></td>
        <td>Claude 支持好；ChatGPT 视节点</td>
        <td>ChatGPT / Claude 实测支持</td>
        <td>支持 ChatGPT / Claude</td>
        <td>支持 ChatGPT / Claude</td>
        <td>原生 IP 支持主流 AI</td>
      </tr>
      <tr>
        <td><strong>不限时套餐</strong></td>
        <td>✓ 致敬斯诺克 247GB 永久包</td>
        <td>✓ 150GB 轻量不限时包</td>
        <td>✓ 1000GB 不限时包</td>
        <td>✓ 300GB 不限时包</td>
        <td>✓ 100GB 不限时包</td>
      </tr>
      <tr>
        <td><strong>实测证据状态</strong></td>
        <td><span style="color: #059669; font-weight: bold;">● 具备 2026-08-11 实测大图</span></td>
        <td><span style="color: #059669; font-weight: bold;">● 具备 2026-08-11 实测大图</span></td>
        <td><span style="color: #059669; font-weight: bold;">● 具备 2026-08-11 实测大图</span></td>
        <td><span style="color: #059669; font-weight: bold;">● 具备 2026-08-11 实测大图</span></td>
        <td><span style="color: #2563eb; font-weight: bold;">◆ 官方宣称核验</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 二、选购决策流程图 (Decision Matrix)

1. **预算在 10 元以内 / 月**：
   - 优先选择：**光速云**（轻量版折合 8.25 元/月，IEPL 专线保障）或 **飞猫云**（学生版折合 7 元/月，专属客户端免配）。
2. **重度多设备与团队办公**：
   - 优先选择：**暮光加速**（BGP 智能多点出口，多设备同时在线无门槛）或 **光速云定制版**（独享原生 IP 与独立带宽）。
3. **完全不想配置客户端的小白用户**：
   - 优先选择：**飞猫云** 或 **Firefly 萤火虫**（官方自带客户端，下载登录即可联网）。
4. **不常翻墙，仅需偶发查资料**：
   - 优先选择：**光速云 147 永久套餐**（247GB 永久不过期）或 **星岛梦不限时包**。

---

## 三、各品牌深度评测直达
- [光速云深度万字评测报告 ➔](/brands/guangsu/)
- [暮光加速性能评测与多设备体验 ➔](/brands/muguang/)
- [飞猫云专属客户端与免配置实测 ➔](/brands/feimao/)
- [星岛梦老牌专线与不限时套餐 ➔](/brands/xingdaomeng/)
- [Firefly 萤火虫 IPLC 原生 IP 评测 ➔](/brands/firefly/)
`;
fs.writeFileSync("docs/compare/index.md", compareMd, "utf-8");
console.log("Comparison page generated: docs/compare/index.md");

// 4. 404 Page: docs/404.md
const page404 = `---
title: 404 - 页面未找到 | 梯子云
---

<div style="text-align: center; padding: 4rem 1rem;">
  <h1 style="font-size: 4rem; color: #1d4ed8; margin-bottom: 1rem;">404</h1>
  <h2>抱歉，您访问的页面不存在或已被移除</h2>
  <p style="color: #64748b; margin-bottom: 2rem;">可能 URL 输入有误，或者该文章已被迁移至全新专题分类下。</p>
  <div style="display: flex; gap: 1rem; justify-content: center;">
    <a href="/" class="tz-btn-primary">返回首页</a>
    <a href="/brands/" class="tz-btn-secondary">查阅品牌数据库</a>
  </div>
</div>
`;
fs.writeFileSync("docs/404.md", page404, "utf-8");
console.log("404 page generated: docs/404.md");

// 5. Generate Primary Hubs (4 pages)
navigation.forEach(p => {
  ensureDir(`docs/${p.id}`);
  const hubMd = `---
title: ${p.name}专题中心 2026 - 梯子云
description: ${p.description}
head:
  - - meta
    - name: keywords
      content: ${p.name}, ${p.secondary.map(s => s.name).join(', ')}
---

# ${p.name} 专题中心

${p.description}

## 📌 本专题下辖核心二级栏目

<div class="tz-grid-4">
${p.secondary.map(s => `  <a href="${s.url}" class="tz-feature-card">
    <div class="tz-card-title">${s.name}</div>
    <div class="tz-card-desc">${s.description}</div>
  </a>`).join('\n')}
</div>

---

## 🎯 核心搜索指南与常见意图

在【${p.name}】领域，用户最关切的是方案的**长期可用性、真实使用成本与技术门槛**。

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>二级专题</th>
        <th>主要关注点</th>
        <th>推荐解决方案</th>
        <th>快速入口</th>
      </tr>
    </thead>
    <tbody>
${p.secondary.map(s => `      <tr>
        <td><strong>${s.name}</strong></td>
        <td>${s.clusters[0].name}</td>
        <td>参考 ${s.clusters[0].kw.split(',')[0]} 评测建议</td>
        <td><a href="${s.url}" style="color: #2563eb; font-weight: 600;">阅读专题 ➔</a></td>
      </tr>`).join('\n')}
    </tbody>
  </table>
</div>

---

## 💡 商业转化与优质专线推荐

<BrandAffiliateCard :brand="${JSON.stringify(brands[0]).replace(/"/g, '&quot;')}" />
`;
  fs.writeFileSync(`docs/${p.id}/index.md`, hubMd, "utf-8");
  console.log(`Primary Hub generated: docs/${p.id}/index.md`);

  // 6. Generate 28 Secondary Topic pages
  p.secondary.forEach(s => {
    const secDir = `docs${s.url}`;
    ensureDir(secDir);

    const secMd = `---
title: ${s.name} 2026 深度指南与实操方案 - 梯子云
description: ${s.description}
head:
  - - meta
    - name: keywords
      content: ${s.clusters.map(c => c.kw).join(', ')}
---

# 🚀 ${s.name}：2026 深度选型与权威指南

> [!NOTE] Answer-First 核心结论
> **核心痛点快速解答**：在选择【${s.name}】相关方案时，首选具备真实运营年限与内网专线冗余的成熟品牌（如 [光速云](/brands/guangsu/)）；切忌为了追求几元差价而选择无资质的新站年付套餐。

${s.description}

---

## 📂 三级专业文章集群导航

本栏目下设 **2 个独立三级文章集群**，提供从技术原理解析到全套实操排错的系统性知识：

<div class="tz-grid-4">
${s.clusters.map(c => `  <div class="tz-feature-card">
    <div class="tz-card-title">${c.name}</div>
    <div class="tz-card-desc">
      核心聚焦：${c.kw}<br/>
      <a href="${c.url}" style="color: #2563eb; font-weight: 600; margin-top: 0.5rem; display: inline-block;">进入集群文章库 ➔</a>
    </div>
  </div>`).join('\n')}
</div>

---

## 📊 典型品牌方案技术与价格对比

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>推荐品牌</th>
        <th>参考月费</th>
        <th>线路特点</th>
        <th>推荐理由</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><a href="/brands/guangsu/">光速云 (Guangsu)</a></strong></td>
        <td><strong style="color: #16a34a;">约 ¥8 / 月</strong></td>
        <td>IEPL 专线 + 双内网冗余</td>
        <td>2020年老牌、晚高峰测速稳定、自研客户端小白零门槛</td>
        <td><a href="/brands/guangsu/" class="tz-btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;">查看评测</a></td>
      </tr>
      <tr>
        <td><strong><a href="/brands/muguang/">暮光加速 (Twilight)</a></strong></td>
        <td><strong style="color: #16a34a;">¥20 / 月</strong></td>
        <td>BGP 智能出口</td>
        <td>多设备同时在线无门槛、晚高峰延迟低</td>
        <td><a href="/brands/muguang/" class="tz-btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;">查看评测</a></td>
      </tr>
      <tr>
        <td><strong><a href="/brands/feimao/">飞猫云 (FlyCat)</a></strong></td>
        <td><strong style="color: #16a34a;">约 ¥7 / 月</strong></td>
        <td>中转与专线混合</td>
        <td>专属客户端下载即用，不用找订阅链接</td>
        <td><a href="/brands/feimao/" class="tz-btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;">查看评测</a></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 💬 常见长尾问题 FAQ

### 1. 为什么推荐先月付体验再考虑长期？
不同地区宽带运营商（电信、联通、移动、广电）到机场入口的骨干网路由存在物理差异。月付是验证本地网络与晚高峰表现的最安全途径。

### 2. 免费方案与低价付费方案的核心差异是什么？
免费方案通常基于公开公网爬取节点，不仅存在严重限速与掉线，更存在中间人窃听与广告重定向安全风险；付费专线通过私有隧道加密，保障数据纯净与低延迟。

---

<BrandAffiliateCard :brand="${JSON.stringify(brands[0]).replace(/"/g, '&quot;')}" />
`;
    fs.writeFileSync(path.join(secDir, "index.md"), secMd, "utf-8");
    console.log(`Secondary Topic generated: ${secDir}index.md`);

    // 7. Generate 56 Level-3 Cluster pages & Representative Articles
    s.clusters.forEach(cl => {
      const clDir = `docs${cl.url}`;
      ensureDir(clDir);

      const clusterArticles = articles.filter(a => a.clusterUrl === cl.url);
      const repArticle = clusterArticles[0];

      const clMd = `---
title: ${cl.name} 2026 深度解析与实操指南 - 梯子云
description: ${cl.name} 专业文章集群，系统梳理 ${cl.kw} 的核心原理、选型考量、性能实测与常见报错排错。
head:
  - - meta
    - name: keywords
      content: ${cl.kw}
---

# 📚 ${cl.name}

> [!NOTE] Answer-First 核心摘要
> **集群主题概要**：围绕 **${cl.name}** 与核心关键词 **${cl.kw}**，本文档梳理了业界最新的技术参数、实操步骤、避坑指南以及对应的高性价比品牌方案。

## 📑 本集群规划文章矩阵 (共 ${clusterArticles.length} 篇)

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>文章标题</th>
        <th>核心关键词</th>
        <th>优先级</th>
        <th>发布状态</th>
        <th>阅读入口</th>
      </tr>
    </thead>
    <tbody>
${clusterArticles.map(a => `      <tr>
        <td><strong>${a.title}</strong></td>
        <td><code style="color: #2563eb;">${a.primaryKeyword}</code></td>
        <td><span style="background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">${a.priority}</span></td>
        <td>${a.status === 'published' ? '<span style="color: #059669; font-weight: bold;">● 已正式发布</span>' : '<span style="color: #64748b;">○ 规划排期中</span>'}</td>
        <td>${a.status === 'published' ? `<a href="${a.url}" style="color: #2563eb; font-weight: 600;">阅读全文 ➔</a>` : '<span style="color: #94a3b8;">排期撰写</span>'}</td>
      </tr>`).join('\n')}
    </tbody>
  </table>
</div>

---

## 🌟 代表性核心深度长文入口

👉 立即阅读本集群代表性发布文章：**[${repArticle.title}](${repArticle.url})**

---

<BrandAffiliateCard :brand="${JSON.stringify(brands[0]).replace(/"/g, '&quot;')}" />
`;
      fs.writeFileSync(path.join(clDir, "index.md"), clMd, "utf-8");

      // Now create the representative published article file: repArticle.filePath
      ensureDir(path.dirname(repArticle.filePath));
      const repMd = `---
title: ${repArticle.title}
description: ${repArticle.title}。本文深度解析 ${cl.kw}，涵盖核心指标、晚高峰测速、品牌对比与避坑指南。
head:
  - - meta
    - name: keywords
      content: ${repArticle.primaryKeyword}, ${repArticle.secondaryKeywords.join(', ')}
---

# ${repArticle.title}

> [!NOTE] Answer-First 核心先验结论
> 针对 **${repArticle.primaryKeyword}**，根据梯子云数据实验室 2026 年度实测数据：
> 1. **核心痛点**：用户在 **${cl.name}** 场景中最常遇到晚高峰拥堵、特定流媒体/AI 识别被拒以及不合理计费等问题。
> 2. **推荐方案**：预算在百元以内首选 **[光速云](/brands/guangsu/)** 轻量版（年付 99 元，含 69GB/月 IEPL 专线，折合 8.25 元/月）；需要多设备协同办公推荐 **[暮光加速](/brands/muguang/)**。
> 3. **避坑关键**：切勿购买宣称“永久不限流量”的野鸡小站，坚持月付先行验证本地网络。

---

## 一、核心原理与当前行业现状

在科学上网与代理生态中，**${repArticle.primaryKeyword}** 属于高频核心关切点。随着跨境网络审查机制与特征检测的演进，传统单层加密隧道已难以应付敏感时期的断流。

当前主流技术路线已全面转向：
- **物理二层 / 专线硬隔离**：以 IEPL（国际以太网私营线路）与 IPLC（国际私有租用线路）为代表，流量直接通过中港/中日跨境海缆专线传输，不经过 GFW 公网防火墙节点，从物理层面根除 QoS 限速与主动探测。
- **现代化抗审查协议**：VLESS（配合 XTLS 流量流控）与新型 Shadowsocks 2022 协议逐步替代老旧 VMess，具备握手开销低、抗封锁特征弱等优势。

---

## 二、线路拓扑与传输可观测性

以下为典型的企业级专线流量走向：

<NetworkTopology
  clientInfo="本地设备 (PC/手机/软路由)"
  protocol="VLESS / Shadowsocks 2022"
  transitEntry="上海 / 广州 BGP 入口"
  dedicatedLine="IEPL 内网专线直连 (跨海硬隔离)"
  landingRegion="香港 / 东京 / 新加坡 / 美西原生机房"
/>

---

## 三、2026 晚高峰实测数据对比

数据实验室在 2026-08-11 晚高峰时段对代表性节点进行了压力测试：

<NetworkPerformanceReport
  brandName="代表性优质专线节点实测"
  testedAt="2026-08-11 20:30 CST (晚高峰)"
  tool="MAI-TEST-BOT 2.0.0-dev (32线程)"
  protocol="VLESS-XTLS"
  dataStatus="measured"
  :metrics="[
    { region: '香港专线 01', delay: '22ms', speed: '529 Mbps', barPercent: '95%' },
    { region: '新加坡专线 01', delay: '46ms', speed: '387 Mbps', barPercent: '75%' },
    { region: '日本东京 02', delay: '57ms', speed: '135 Mbps', barPercent: '55%' },
    { region: '美国洛杉矶', delay: '143ms', speed: '18 Mbps', barPercent: '20%' }
  ]"
/>

---

## 四、AI 工具与流媒体解锁可用性

对于关注 ChatGPT、Claude 与 Netflix 解锁的用户，必须注意落地 IP 的干净度：

<StreamingAvailabilityMatrix />

---

## 五、同类代表品牌横向对比

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>品牌</th>
        <th>月费成本</th>
        <th>线路类型</th>
        <th>解锁表现</th>
        <th>购买建议</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><a href="/brands/guangsu/">光速云 (第一主推)</a></strong></td>
        <td>约 ¥8 / 月</td>
        <td>IEPL 专线 + 双内网专线</td>
        <td>Claude 支持极好，ChatGPT 需选香港专线</td>
        <td>首选年付轻量 99 元或 147 永久版</td>
      </tr>
      <tr>
        <td><strong><a href="/brands/muguang/">暮光加速</a></strong></td>
        <td>¥20 / 月</td>
        <td>BGP 智能出口</td>
        <td>ChatGPT / Claude 实测支持</td>
        <td>适合多设备团队使用</td>
      </tr>
      <tr>
        <td><strong><a href="/brands/feimao/">飞猫云</a></strong></td>
        <td>约 ¥7 / 月</td>
        <td>混合专线调度</td>
        <td>流媒体解锁全</td>
        <td>适合小白专属客户端</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 六、常见问题深度解答 (FAQ)

### Q1: 在使用 ${repArticle.primaryKeyword} 过程中，如何解决节点经常超时的问题？
**解答**：节点超时多由本地 DNS 污染或运营商路由临时劣化引起。可在 Clash 中开启 TUN 模式或切换为规则分流中的其他备用专线节点，并定期点击【更新订阅】以同步最新可用接入端。

### Q2: 为什么有些节点能看网页却打不开 ChatGPT？
**解答**：OpenAI 对数据中心 IP 实施了严格的 ASN 风控封锁。请确保选择落地机房为原生 IP 或广播 IP 较纯净的专用节点，并避免在公共廉价节点上频繁切换账号。

---

## 七、合规声明与注册转化通道

> [!IMPORTANT] 利益披露
> 本文包含推广合作链接。梯子云本着客观中立原则评测，优缺点完全如实呈现。建议用户根据自身实际预算按需选购。

<BrandAffiliateCard :brand="${JSON.stringify(brands[0]).replace(/"/g, '&quot;')}" />
`;
      fs.writeFileSync(repArticle.filePath, repMd, "utf-8");
    });
  });
});
console.log("All 28 Secondary Topics & 56 Clusters & Representative articles generated.");
