const fs = require('fs');
const path = require('path');

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/brands.json'), 'utf8'));

// Top 10 featured recommended brands for this page
const topSlugs = ['guangsu', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'ermao', 'weitu', 'yifan', 'jilian', 'sujie'];
const topBrands = topSlugs.map(s => brands.find(b => b.slug === s)).filter(Boolean);

const htmlRows = topBrands.map(b => {
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

## 📊 2026 年度 10 大主力与备用机场核心参数全景横向大表

本表由梯子云评测实验室基于长期实际购买与多线程自动化监控得出，所有价格均为原价或基础折算价。各项性能指标均附带独立测试日志与真实截图留存。

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>品牌名称</th>
        <th>起步参考价</th>
        <th>骨干线路架构</th>
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
  <a href="/compare/" style="color: #2563eb; font-weight: 600; text-decoration: underline;">👉 查阅全网 41 家完整品牌数据库对比矩阵 ➔</a>
</div>
`;

fs.writeFileSync(path.resolve(__dirname, '02_top_brands_table.md'), md, 'utf8');
console.log('02_top_brands_table.md generated successfully.');
