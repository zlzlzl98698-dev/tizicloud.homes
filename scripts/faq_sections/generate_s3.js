const fs = require('fs');

const content = `
---

## 机场 FAQ 核心文章集群与横向知识网络

为了帮助用户彻底掌握从前期选型支付到后期技术排障的全套核心技能，本栏目在底层构建了两个专业的三级文章集群，共收录十六篇深度实操技术文章，并与全站各大核心专题紧密互通。

### 下辖两大三级文章集群深度检索

<div class="tz-grid-4">
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群一 购买与支付常见避坑问答</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      深度剖析实名支付风险隔离、退款争议法律边界、长周期套餐陷阱与账单流水去关联化技巧。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/faq/payment/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入支付答疑文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/faq/payment/faq-payment-art-1">支付选型与实测指南</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-2">核心原理与避坑要点</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-3">新手必看配置实操</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-4">晚高峰网络资费对比</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-5">技术细节全场景实践</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-6">支付异常诊断排查</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-7">高阶使用防坑手册</a></div>
        <div>• <a href="/resources/faq/payment/faq-payment-art-8">数据审计与安全建议</a></div>
      </div>
    </div>
  </div>
  <div class="tz-feature-card" style="grid-column: span 2;">
    <div class="tz-card-title" style="font-size: 1.15rem; color: #1e293b;">集群二 节点连不上与网络卡顿通用解决方案</div>
    <div class="tz-card-desc" style="margin-top: 0.5rem; line-height: 1.6;">
      系统拆解节点超时变红、系统时间漂移、端口冲突、DNS 投毒阻断与 TUN 虚拟网卡排障手段。
    </div>
    <div style="margin-top: 0.75rem; font-size: 0.875rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">
      <a href="/resources/faq/connectivity/" style="font-weight: 700; color: #2563eb; display: inline-block; margin-bottom: 0.5rem;">进入连通排查文章库 ➔</a>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: #475569;">
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-1">连通排查实测指南</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-2">核心原理与避坑要点</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-3">新手配置实操方案</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-4">晚高峰网络表现对比</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-5">技术细节全场景实践</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-6">常见错误诊断修复</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-7">进阶故障排查手册</a></div>
        <div>• <a href="/resources/faq/connectivity/faq-connectivity-art-8">最新连通性安全建议</a></div>
      </div>
    </div>
  </div>
</div>

### 跨专题纵向协同与横向知识互联

在使用和排查机场节点的过程中，用户往往需要结合其他专业板块的信息进行综合诊断与优化。

1. **返回 [资源与情报专题中心](/resources/)**
   宏观掌握全站情报网络，了解专线成本构成、域名污染机制与全周期安全基线。
2. **联动 [节点检测专区](/resources/node-check/)**
   利用专业检测脚本测量出口 IP 纯净度与欺诈分，核验当前节点是否支持 Netflix 4K 与 ChatGPT 解锁。
3. **联动 [订阅问题排查](/resources/subscription-issues/)**
   掌握订阅链接更新失败、四零四报错与私有转换器配置要领，杜绝配置解析中断。
4. **联动 [跑路预警专区](/resources/risk-warning/)**
   当遇到节点大面积变红且客服工单连续数天停滞时，快速核对是否触发服务商跑路高危特征。
5. **参考 [Clash 使用教程](/clash/tutorial/) 与 [Clash 故障排查](/clash/troubleshooting/)**
   深入学习 Clash Verge Rev 的底层内核参数调优、TUN 虚拟网卡配置与 DNS 防污染实践。
`;

fs.writeFileSync('scripts/faq_sections/03_cluster_navigation.md', content, 'utf8');
console.log('Section 3 written.');
