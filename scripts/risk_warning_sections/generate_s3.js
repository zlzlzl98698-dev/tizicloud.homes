const fs = require('fs');

const content = `
---

## 跑路预警核心文章集群与横向知识网络

为了帮助用户全方位掌握风险识别技能与紧急避险工具链，本栏目在底层构建了两个专业的三级文章集群，共收录十六篇深度实操技术文章，并与全站各大核心专题紧密互通。

### 下辖两大三级文章集群深度检索

<div class="tz-grid-4">
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群一 机场运营异常与失联风险实时通报</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      深度追踪当前高危失联品牌、节点大面积断流事件调查、服务器硬件故障与机房账单纠纷。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/risk-warning/alerts/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入失联通报文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-1">选型与实测指南</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-2">核心原理与避坑要点</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-3">新手完整解决方案</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-4">晚高峰网络对比</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-5">技术细节全场景实践</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-6">常见错误排查修复</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-7">高阶使用防坑手册</a></div>
        <div>• <a href="/resources/risk-warning/alerts/risk-warning-alerts-art-8">数据审计与安全建议</a></div>
      </div>
    </div>
  </div>
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群二 识别高危跑路机场的 8 大危险信号</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      系统拆解超常骨折甩卖、社群全员禁言、工单无故停滞与上游机房断网等八大关键跑路信号。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/risk-warning/signals/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入危险信号文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-1">危险信号实测指南</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-2">核心原理与避坑要点</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-3">配置实操完整方案</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-4">晚高峰网络对比</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-5">技术细节全场景实践</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-6">诊断排查修复手段</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-7">进阶避险技巧防坑</a></div>
        <div>• <a href="/resources/risk-warning/signals/risk-warning-signals-art-8">最新安全选购建议</a></div>
      </div>
    </div>
  </div>
</div>

### 跨专题纵向协同与横向知识互联

在应对机场跑路风险的过程中，用户往往需要结合其他专业板块的信息进行综合判定与资产迁移。

1. **返回 [资源与情报专题中心](/resources/)**
   宏观掌握整个跨境代理生态的安全基线，查阅国际专线批发成本与域名污染动态。
2. **联动 [机场风险情报](/resources/intelligence/)**
   深入了解跨境陆缆与海缆的真实租用账本，核实商家声称的骨干专线是否具备物理真实性。
3. **联动 [机场高频 FAQ](/resources/faq/)**
   学习如何通过匿名结算工具进行财务隔离，掌握退款纠纷与多设备并发冲突的处理原则。
4. **联动 [免费节点专区](/resources/free-nodes/)**
   在主力机场突发失联后，利用安全的公开应急节点作为跳板下载正规客户端并获取新订阅。
5. **参考 [2026 机场推荐全指南](/airport/) 与 [便宜平价机场](/airport/cheap/)**
   在遭遇失联后快速敲定新方案，甄选具备五年以上合规记录的老牌成熟专线，彻底杜绝重复踩坑。
`;

fs.writeFileSync('scripts/risk_warning_sections/03_cluster_navigation.md', content, 'utf8');
console.log('Section 3 written.');
