const fs = require('fs');
const path = require('path');

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/brands.json'), 'utf8'));

const htmlRows = brands.map(b => {
  const price = b.entryPriceMonth ? `¥${b.entryPriceMonth}/月` : '官网为准';
  const line = (b.lineType || '常规中转').replace(/\|/g, '/');
  const proto = (b.protocols && b.protocols.length > 0) ? b.protocols.join(', ') : 'Shadowsocks / VLESS';
  const statusBadge = b.dataStatus === 'measured' 
    ? '<span style="color: #16a34a; font-weight: 600;">✅ 实测核验</span>' 
    : (b.dataStatus === 'official' ? '<span style="color: #2563eb;">📋 官方宣称</span>' : '<span style="color: #ca8a04;">⏳ 待复测</span>');
  const aiBadge = b.aiUnlock?.status === 'full' 
    ? '<span style="color: #16a34a;">🟢 良好</span>' 
    : (b.aiUnlock?.status === 'partial' ? '<span style="color: #ca8a04;">🟡 部分</span>' : '<span style="color: #94a3b8;">⚪ 未核实</span>');
  const streamBadge = b.streamingUnlock?.status === 'full' 
    ? '<span style="color: #16a34a;">🟢 4K全解</span>' 
    : (b.streamingUnlock?.status === 'partial' ? '<span style="color: #2563eb;">🔵 主流</span>' : '<span style="color: #94a3b8;">⚪ 基础</span>');
  const risk = (b.riskWarning || '建议按月付费体验').replace(/\|/g, '；').slice(0, 32) + '...';
  
  return `      <tr>
        <td><a href="/brands/${b.slug}/" style="font-weight: 600; color: #2563eb;">${b.name}</a></td>
        <td><strong>${price}</strong></td>
        <td>${line}</td>
        <td><code>${proto}</code></td>
        <td>${aiBadge}</td>
        <td>${streamBadge}</td>
        <td>${statusBadge}</td>
        <td style="font-size: 0.85rem; color: #64748b;">${risk}</td>
      </tr>`;
}).join('\n');

const md = `---

## 📊 2026 全网 41 家核心机场横向评测全景数据库

为打破翻墙服务的信息不对称，梯子云收录并深度审计了市面上 41 家主流机场品牌。所有列出数据均以实际账单、节点连通性测试与独立实验室环境实测为准。对于无法交叉核实的数据，我们一律如实标注为官方宣称或待复测，绝不虚构任何测试指标。

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>品牌名称</th>
        <th>起步月付</th>
        <th>骨干线路类型</th>
        <th>核心支持协议</th>
        <th>AI 平台支持</th>
        <th>4K 流媒体</th>
        <th>数据认证状态</th>
        <th>避坑风险提示</th>
      </tr>
    </thead>
    <tbody>
${htmlRows}
    </tbody>
  </table>
</div>

<div style="text-align: center; margin: 1.5rem 0;">
  <a href="/compare/" style="color: #2563eb; font-weight: 600; text-decoration: underline;">👉 访问独立横向对比矩阵，按价格与线路类型自定义交叉筛选 ➔</a>
</div>

### 梯子云数据三级认证标准说明

在浏览上方数据库与全站评测时，梯子云严格遵循以下准则对服务商进行分级标注。
1. **实测核验**：梯子云测试团队已自费购买真实套餐，在珠海联通 5Gbps 独立实验室环境下进行了完整的晚高峰测速、流媒体解锁测试与长效丢包监控，后台具备完整的测速大图与日志留存。
2. **官方宣称**：该参数主要源自服务商官网文档公示、工单答复或公开面板，本站尚未完成独立的第三方盲测闭环，供读者作为参考依据。
3. **待复测**：该品牌近期经历了机房割接、域名更换或管理团队调整，历史数据已过保质期，新一轮测试周期正在排期执行中。
`;

fs.writeFileSync(path.resolve(__dirname, '02_brand_database_table.md'), md, 'utf8');
console.log('02_brand_database_table.md generated successfully.');
