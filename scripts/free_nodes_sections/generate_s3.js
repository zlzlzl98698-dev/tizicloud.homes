const fs = require('fs');

const content = `
---

## 免费节点核心文章集群与横向知识网络

为了帮助用户彻底掌握免费节点的使用界限、安全防护手段与本地自建转换技巧，本栏目在底层构建了两个专业的三级文章集群，共收录十六篇深度实操技术文章，并与全站各大核心专题紧密互通。

### 下辖两大三级文章集群深度检索

<div class="tz-grid-4">
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群一 每日公开节点池安全性与可用性巡检</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      系统剖析公开抓取节点池的运行机制、高频丢包根源、蜜罐指纹侦测以及突发断网应急清洗方案。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/free-nodes/pool/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入公开节点池文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-1">选型与实测指南</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-2">核心原理与避坑要点</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-3">新手完整解决方案</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-4">晚高峰网络对比</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-5">技术细节全场景实践</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-6">常见错误排查修复</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-7">高阶使用防坑手册</a></div>
        <div>• <a href="/resources/free-nodes/pool/free-nodes-pool-art-8">数据审计与安全建议</a></div>
      </div>
    </div>
  </div>
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群二 免费节点自建与安全转换全解析</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      深度解析 Cloudflare Workers/Pages 反代部署、免费云主机节点配置以及客户端本地私有格式转换。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/free-nodes/convert/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入自建与转换文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-1">自建选型实测指南</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-2">自建原理操作详解</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-3">配置实操完整方案</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-4">晚高峰抗封锁表现</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-5">安全转换技术剖析</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-6">诊断排查修复手段</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-7">进阶配置技巧防坑</a></div>
        <div>• <a href="/resources/free-nodes/convert/free-nodes-convert-art-8">最新安全转换指南</a></div>
      </div>
    </div>
  </div>
</div>

### 跨专题纵向协同与横向知识互联

在使用免费节点的过程中，许多技术痛点会延伸至客户端分流、网络封锁情报以及商业专线选型等领域。建议结合以下专题协同查阅。

1. **返回 [资源与情报专题中心](/resources/)**
   总览行业前沿情报，包含专线成本模型、域名污染动态以及全周期网络安全防护规范。
2. **联动 [跑路预警专区](/resources/risk-warning/) 与 [机场风险情报](/resources/intelligence/)**
   了解低价年付机场的资金链运作内幕，掌握上游机房封禁动态与服务商失联前兆。
3. **联动 [节点检测专区](/resources/node-check/)**
   利用专业检测脚本核验当前免费节点的实际纯净度、欺诈分值与流媒体解锁权限。
4. **联动 [Clash 使用与配置全指南](/clash/) 与 [订阅问题排查](/resources/subscription-issues/)**
   掌握 Clash Verge Rev 等主流客户端的本地解析内核配置方法，彻底远离第三方在线转换器的数据泄露风险。
5. **参考 [2026 机场推荐全指南](/airport/) 与 [免费 VPN 实测](/vpn/free/)**
   在免费资源无法满足高带宽与低延迟生产力需求时，无缝过渡至具备电信级保障的正规商业服务。
`;

fs.writeFileSync('scripts/free_nodes_sections/03_cluster_navigation.md', content, 'utf8');
console.log('Section 3 written.');
