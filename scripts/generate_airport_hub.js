const fs = require('fs');
const path = require('path');

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/brands.json'), 'utf8'));

// Format brands table rows
const tableRows = brands.map(b => {
  const price = b.entryPriceMonth ? `¥${b.entryPriceMonth}/月` : '暂无报价';
  const plansNote = b.entryPriceNote ? b.entryPriceNote.replace(/\|/g, '/') : '以官网为准';
  const line = b.lineType || '常规中转';
  const proto = (b.protocols && b.protocols.length > 0) ? b.protocols.join(', ') : 'SS/VLESS';
  const status = b.dataStatus === 'measured' ? '✅ 实测核验' : (b.dataStatus === 'official' ? '📋 官方宣称' : '⏳ 待复测');
  const ai = b.aiUnlock?.status === 'full' ? '🟢 良好' : (b.aiUnlock?.status === 'partial' ? '🟡 部分可用' : '⚪ 暂未核实');
  const stream = b.streamingUnlock?.status === 'full' ? '🟢 4K秒开' : (b.streamingUnlock?.status === 'partial' ? '🟡 部分支持' : '⚪ 基础支持');
  const risk = b.riskWarning ? b.riskWarning.replace(/\|/g, '；').slice(0, 35) + '...' : '建议按月付费';
  
  return `| [${b.name}](/brands/${b.slug}/) | ${price} | ${line} | ${proto} | ${ai} | ${stream} | ${status} | ${risk} |`;
}).join('\n');

console.log('Built table rows for 41 brands.');
