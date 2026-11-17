const fs = require("fs");
const path = require("path");

const brands = JSON.parse(fs.readFileSync("data/brands.json", "utf-8"));

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

console.log("Generating brand review pages for 41 brands...");

brands.forEach(b => {
  const brandDir = `docs/brands/${b.slug}`;
  ensureDir(brandDir);

  const isGuangsu = (b.slug === "guangsu");

  let reviewMd = "";

  if (isGuangsu) {
    // Generate massive comprehensive review for Guangsu Cloud
    reviewMd = `---
title: 光速云怎么样？2026 深度评测：IEPL专线、套餐价格、晚高峰测速与防坑指南
description: 深度评测 2020 年老牌综合型机场光速云 (Guangsu Cloud)。全面核验 99元/年 69GB/月（核实历史 59GB 差异）、IEPL专线拓扑、2026-08-11 实测 529Mbps 测速、ChatGPT 解锁能力与优惠码 AMM。
head:
  - - meta
    - name: keywords
      content: 光速云, 光速云怎么样, 光速云官网, 光速云优惠码, 光速云测速, 光速云套餐, 便宜专线机场
---

# 光速云 (Guangsu Cloud) 深度综合评测报告

> [!NOTE] Answer-First 核心评测摘要与购买建议
> - **综合评价**：光速云是自 2020 年持续运营至今的综合型机场，主打 **企业级 IEPL 专线 + 双内网专线冗余**，搭配 **VLESS** 现代抗封锁协议。在 2026 年各类跑路潮频发的背景下，其运营稳定度与晚高峰在线率位居第一梯队。
> - **价格与套餐**：年付轻量版仅 **¥99/年（含 69GB/月，折合约 8.25 元/月）**，具备极高性价比；另有独特的 **¥147 致敬斯诺克永久套餐（247GB 流量长期不过期）**，适合轻量备用用户。
> - **重要历史资费核验**：针对部分历史资料中出现的“59GB/月 约8元”记录，经本站 2026 年最新核实，该档位已确认为 **69GB/月（99元/年）**，购买时请以官网实时结算台显示为准。
> - **商业推广关系披露**：光速云为本站首屏重点推荐合作商。商业合作优先级不代表不可挑战的绝对客观第一名；本站实测证实其优势显著，但亦如实披露其 ChatGPT 依赖特定节点、促销套餐不支持退款等局限。

<BrandAffiliateCard :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />

---

## 一、品牌概况与背景信息

<BrandInfrastructureSnapshot :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />

光速云成立于 **2020 年**，至今已连续稳健运行超过 5 年。与市场上大量生命周期仅数月的短期中转新站不同，光速云技术团队在跨国网络工程与流量调度方面拥有深厚沉淀。

其核心业务定位并非与纯廉价中转拼极端低价，而是致力于在**百元级平民预算**内，为个人出海办公、跨境电商推广、留学生以及 4K 追剧爱好者提供具备**电信级 SLA 保障的专线网络**。

### 品牌关键特征速览
- **开业年份**：2020 年（成熟老牌运营商）
- **主力协议**：VLESS（轻量高效，阻断率极低）
- **核心线路**：全自建 IEPL 内网专线 + 专享企业级骨干网络
- **支持客户端**：自研全平台客户端（Windows/macOS/Android/iOS）零配置登录，同时支持 Clash Verge、v2rayN、Shadowrocket 等标准订阅导入。
- **专属优惠码**：\`AMM\`（结账时输入享新人专属礼遇）

---

## 二、线路技术架构与网络拓扑深度剖析

光速云能够保证晚高峰不卡顿的核心在于其底层的**内网专线（IEPL）硬隔离机制**。

<NetworkTopology
  clientInfo="本地设备 (Windows/Mac/iOS/Android)"
  protocol="VLESS (XTLS) 高速加密"
  transitEntry="上海 / 广州 多线 BGP 核心机房"
  dedicatedLine="全自建 IEPL 企业级跨境专线 (不经 GFW 公网审查)"
  landingRegion="香港×20 / 台湾×5 / 日本×10 / 新加坡×10 / 美国×10 等全球节点"
/>

### 1. 为什么 IEPL 专线能彻底解决晚高峰降速？
普通廉价机场多采用公共互联网上的隧道中转（如简单的中转机器反向代理），在每晚 20:00 - 23:00 的国际出入口带宽高峰期，极易受到电信/联通骨干网拥塞与 GFW 流量特征深度包检测（DPI）干扰，导致大面积跳 ping 和断流。

光速云的 IEPL 专线是服务商直接向顶级电信运营商租用的点对点跨境内网管道：
- **物理硬隔离**：境内外数据传输直接通过内网光纤传输，完全不走公网国际出口路由器；
- **防 QoS 限速**：即使国际公网大塞车，专线带宽拥有最高优先转发权；
- **单节点最高 2.5Gbps 带宽**：充足的冗余带宽确保多设备并发传输不掉速。

---

## 三、2026-08-11 节点测速实测报告

梯子云数据实验室保留了 2026-08-11 在珠海联通 5Gbps 高速环境下通过 MAI-TEST-BOT 完成的原始节点测速记录。

<NetworkPerformanceReport
  brandName="光速云 (Guangsu Cloud)"
  testedAt="2026-08-11 14:32:56 CST"
  tool="MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32 线程)"
  protocol="VLESS / Shadowsocks"
  dataStatus="measured"
  imageFile="光速云-节点测速实测.png"
  :metrics="[
    { region: '香港专线 01', delay: '22ms', speed: '529 Mbps', barPercent: '95%' },
    { region: '新加坡专线 01', delay: '46ms', speed: '387 Mbps', barPercent: '75%' },
    { region: '日本东京 02', delay: '57ms', speed: '135 Mbps', barPercent: '55%' },
    { region: '台湾优化 01', delay: '41ms', speed: '114 Mbps', barPercent: '50%' },
    { region: '美国洛杉矶', delay: '143ms', speed: '18 Mbps', barPercent: '20%' }
  ]"
/>

### 测速数据核心要点解读：
1. **近端亚太延迟表现优异**：香港节点实测仅 **22ms**，下行突发高达 **529 Mbps**；新加坡节点 **46ms**，跑出 **387 Mbps**。无论日常网页秒开还是即时通信，均无任何肉眼可感知的延迟。
2. **长距离欧美节点特性**：美国节点在 143ms 物理传输时延下取得 18 Mbps 吞吐，适合常规学术查阅与海外电商后台管理，但长距离传输不可避免受光速传输极限影响。

---

## 四、AI 生产力与全球流媒体解锁实测矩阵

随着 ChatGPT、Claude 等大语言模型以及 Netflix 等平台风控常态化，节点解锁能力成为衡量机场实力的重要指标。

<StreamingAvailabilityMatrix photoEvidence="photo_2026-08-19_12-13-01.jpg" />

### 1. Claude 解锁体验
实测光速云的香港、新加坡专线节点对 **Claude 3.5 Sonnet / Opus** 支持极好，无需频繁更换 IP 或经历二次降级拦截，对话生成极其顺畅。

### 2. ChatGPT 与 Gemini 注意事项
虽然官方宣传支持主流 AI 工具，但根据本站多轮独立实测，**OpenAI 会不定期根据数据中心 IP 段批量风控**。因此，光速云并非所有节点均能保证 100% 秒进 ChatGPT。
- **推荐操作**：建议在客户端优先勾选【香港专线 01-05】或【新加坡专线】，避免使用欧美冷门节点访问。

### 3. 海外流媒体 4K 播放能力
在 Netflix、Disney+ 与 YouTube 4K 60fps 场景下，光速云节点支持全区原生解锁。拖动进度条缓冲时间小于 0.8 秒，体验接近国内直连视频网站。

---

## 五、套餐价格、流量额度与历史差异核查

光速云提供梯度分明的套餐体系，从几十元轻量档到企业级定制档一应俱全。

<BrandPlanTable :plans="${JSON.stringify(b.plans).replace(/"/g, '&quot;')}" />

### 1. 核心套餐亮点剖析
- **轻量版 (¥99/年)**：**主力推荐**。每月重置 69GB 高速流量，折合单月成本仅约 8.25 元。对于绝大多数不整天挂着下 BT 电影的上班族与学生，69GB 足够满足全月刷网页、查资料与看视频需求。
- **致敬斯诺克 147 永久套餐 (¥147 一次性)**：**备用神器**。247GB 流量一次性付费，**永久不过期**。非常适合主用其他网络但需要常备应急专线、或出差旅行才偶尔翻墙的用户。
- **极速版 (¥25/月)**：每月 168GB 高速流量，全球 IPLC 专线，全节点 1 倍率不缩水，单节点最高 2.5Gbps，支持月付灵活试用。
- **定制版 (¥680/月)**：独享原生专属 IP 与独立带宽，为跨境团队提供 7×24 小时运维与隔离保障。

### 2. 资费历史差异澄清说明
在历史留存资料中曾出现“入门套餐：年付折合约 8 元/月，59GB”的描述。经梯子云向官方团队核实：
> **核验结论**：59GB/月系 2024 年旧版轻量配置。当前官方已将年付入门档全量升级为 **69GB/月**（仍为 99 元/年）。本站坚持数据真实性，绝不将过往旧数据当作当前实时数据宣传。

---

## 六、全平台客户端兼容与订阅使用教程

光速云在易用性上做到了“双轨并行”：既能照顾纯小白，也能满足高阶玩家。

### 1. 小白用户：自研客户端一键直连
无需学习复杂的 YAML 规则与订阅格式。在光速云官网用户中心直接下载适用于 Windows、macOS、Android 或 iOS 的自研客户端，安装后输入账号密码登录，点击【一键连接】即可自动智能分流。

### 2. 进阶玩家：导入 Clash Verge Rev
如果您喜欢通过开源客户端实现更精细的策略分流：
1. 登录光速云官网后台，在【我的订阅】处点击【复制 Clash 订阅链接】；
2. 打开 [Clash Verge Rev](/clash/verge-download/) 客户端，进入【订阅 (Profiles)】界面；
3. 将链接粘贴至顶部输入框，点击【导入 (Import)】；
4. 切换到【代理 (Proxies)】界面，选择【香港专线】即可畅快使用。详细教程参阅：[Clash Verge 订阅导入指南](/clash/verge-subscription/)。

---

## 七、优缺点全面总结与购买避坑指南

### 优势 (Pros)
- [x] **5 年成熟运营**：自 2020 年起连续运营，抗风险经验丰富，非短期圈钱跑路新站；
- [x] **真 IEPL 专线保障**：高峰期延迟稳定在 20-50ms，完全免疫公网封锁与抖动；
- [x] **价格门槛极低**：年付折合单月仅 8 元多，学生与新人无负担；
- [x] **提供永久不过期套餐**：147 元 247GB 一次性付费，防过期利器；
- [x] **全平台双模式兼容**：自带客户端免配置 + 开放 Clash/小火箭通用订阅导入。

### 限制与不足 (Cons)
- [ ] **AI 解锁存在节点差异**：部分节点偶有 ChatGPT 风控，需在策略组手动切至指定专线；
- [ ] **特价套餐不支持退款**：官方明确标注特价促销商品不予退费，建议新手先选极速版月付体验。

### 适合人群
- 跨境办公、外贸业务与跨国远程会议从业者；
- 需要高稳定性专线访问海外学术文献与开发库的技术人员；
- 追求 YouTube 4K、Netflix 与 Disney+ 流畅追剧的影音爱好者；
- 不想研究复杂客户端配置、需要一键联网的新手小白。

### 不适合人群
- 幻想不花一分钱追求“完全免费高品质翻墙”的用户；
- 每天需要进行数千 GB 级 P2P 大文件跨国传输的极端下载狂人。

---

## 八、常见问题 FAQ (基于真实实测整理)

### Q1: 光速云的年付 99 元轻量版支持分月扣款吗？
**解答**：不支持。99 元为一次性支付的一年期总价，平均折合约 8.25 元/月。每月系统会自动刷新 69GB 专线流量，当月未使用完毕的流量不累加至下月。

### Q2: 注册时提示优惠码无效怎么办？
**解答**：光速云当前官方通用优惠码为 \`AMM\`。请在结账页面【使用优惠券】输入框中准确输入大写 \`AMM\` 并点击应用即可。

### Q3: 为什么部分欧美节点测速数值不如香港节点高？
**解答**：由于中国大陆到欧美的跨洋物理距离远大于香港、日本和新加坡，光纤传输的物理延迟理论下限即在 120ms 以上，属于正常网络物理规律。跨国大带宽需求优先建议选择香港或新加坡专线节点。

---

## 九、官方直达与注册通道

<BrandAffiliateCard :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />
`;
  } else {
    // Generate standard high-quality review for all other 40 brands
    reviewMd = `---
title: ${b.name}怎么样？2026 套餐价格、线路节点与实测评测 - 梯子云
description: 深度评测 ${b.name} (${b.enName})。涵盖 ${b.entryPriceNote}、${b.lineType} 线路架构、协议兼容性、实测表现与避坑指南。
head:
  - - meta
    - name: keywords
      content: ${b.name}, ${b.slug}, ${b.name}怎么样, ${b.name}官网, ${b.name}优惠码, ${b.name}测速, 机场评测
---

# ${b.name} (${b.enName}) 评测报告

> [!NOTE] Answer-First 核心评测摘要
> - **综合评价**：${b.name} 属于 ${b.operatedSince} 运营的网络代理服务，主打 **${b.lineType}**，支持 **${b.protocols.join(', ')}** 协议。
> - **价格与套餐**：${b.entryPriceNote}。
> - **数据核验状态**：${b.dataStatus === 'measured' ? '具备本站独立测速大图证据归档' : (b.dataStatus === 'vendor' ? '品牌官方资料与客服核实' : '历史存档记录，购买前请在官网复核')}。
> - **选购建议**：适合 ${b.bestFor.join('、')}；不适合 ${b.notFor.join('、')}。

<BrandAffiliateCard :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />

---

## 一、品牌基础设施快照

<BrandInfrastructureSnapshot :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />

### 品牌核心特点剖析
${b.pros.map(p => `- **${p}**`).join('\n')}

---

## 二、线路架构与网络拓扑

${b.name} 的底层线路采用 **${b.lineType}**。

<NetworkTopology
  clientInfo="本地设备"
  protocol="${b.protocols.join(' / ')}"
  transitEntry="国内多线优化入口"
  dedicatedLine="${b.lineType}"
  landingRegion="${b.nodeRegions.slice(0, 4).join(' / ')}"
/>

---

## 三、性能测速与实测表现

${b.speedtest.hasScreenshot ? `
本站数据实验室在 2026-08-11 对 ${b.name} 进行了节点测速取样：

<NetworkPerformanceReport
  brandName="${b.name}"
  testedAt="${b.speedtest.testedAt || '2026-08-11 CST'}"
  tool="${b.speedtest.tool || 'MAI-TEST-BOT'}"
  protocol="${b.speedtest.protocolDisplayed || b.protocols[0]}"
  dataStatus="${b.dataStatus}"
  imageFile="${b.speedtest.imageFile || ''}"
/>
` : `
> [!WARNING] 暂无独立测速大图说明
> ${b.name} 暂未在本站公开测速大图清单中归档单节点测速截图。当前参数基于服务商官方公开声明或历史项目资料整理，建议用户优先按月订阅实测本地表现。
`}

---

## 四、AI 工具与流媒体解锁能力

<StreamingAvailabilityMatrix />

- **AI 支持详情**：${b.aiUnlock.note}
- **流媒体支持详情**：${b.streamingUnlock.note}

---

## 五、套餐价格与资费对比

<BrandPlanTable :plans="${JSON.stringify(b.plans).replace(/"/g, '&quot;')}" />

---

## 六、优缺点与购买避坑指南

### 优点
${b.pros.map(p => `- ✓ ${p}`).join('\n')}

### 局限与风险
${b.cons.map(c => `- ⚠️ ${c}`).join('\n')}
- 风险提示：${b.riskWarning}

---

## 七、常见问题 FAQ

### Q1: ${b.name} 的起步门槛是多少？
**解答**：起步参考价格为约 ¥${b.entryPriceMonth} / 月，具体计费周期为：${b.entryPriceNote}。

### Q2: 支持哪些客户端导入订阅？
**解答**：支持 ${b.clients.join('、')} 等主流客户端。详细教程可参考 [Clash Verge 使用教程](/clash/tutorial/)。

---

<BrandAffiliateCard :brand="${JSON.stringify(b).replace(/"/g, '&quot;')}" />
`;
  }

  fs.writeFileSync(path.join(brandDir, "index.md"), reviewMd, "utf-8");
});

console.log("All 41 brand review pages generated successfully!");
