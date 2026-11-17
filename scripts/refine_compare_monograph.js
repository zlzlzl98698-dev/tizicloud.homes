const fs = require('fs');

let code = fs.readFileSync('scripts/build_compare_monograph.js', 'utf8');

// 1. Fix Em-dash
code = code.replace(
  '梯子云评测实验室选取了当前市场上最具代表性的五大核心主流服务商——光速云、暮光加速、飞猫云、星岛梦与 Firefly 萤火虫',
  '梯子云评测实验室选取了当前市场上最具代表性的五大核心主流服务商，包括光速云、暮光加速、飞猫云、星岛梦与 Firefly 萤火虫'
);

// 2. Fix Buzzwords
code = code.replace('海外社交媒体多账号矩阵运营团队', '海外社交媒体多账号运营团队');
code = code.replace('拥有正向健康的商业盈利闭环', '拥有正向健康的商业盈利模型');
code = code.replace('全链路的隐私脱敏与安全闭环', '全链路的隐私脱敏与安全保障体系');
code = code.replace('[内网核心交换矩阵 (流量特征剥离)]', '[内网核心交换集群 (流量特征剥离)]');

// 3. Fix Colons in prose
code = code.replace('五大核心品牌各具鲜明的技术基因与适用边界：追求极致稳定性', '五大核心品牌各具鲜明的技术基因与适用边界。追求极致稳定性');
code = code.replace('[核心首推: 光速云]', '[核心首推 光速云]');
code = code.replace('[首选: 飞猫云]', '[首选 飞猫云]');
code = code.replace(/-\s*\*\*核心技术优势\*\*：/g, '- **核心技术优势** ');
code = code.replace(/-\s*\*\*主要限制与不足\*\*：/g, '- **主要限制与不足** ');
code = code.replace(/-\s*\*\*实际价格体系\*\*：/g, '- **实际价格体系** ');
code = code.replace(/-\s*\*\*适合人群\*\*：/g, '- **适合人群** ');
code = code.replace(/-\s*\*\*不适合人群\*\*：/g, '- **不适合人群** ');

code = code.replace('服务商跑路风险系数评级体系：', '服务商跑路风险系数评级体系。');
code = code.replace('- **极低风险标杆级（光速云）**：', '- **极低风险标杆级（光速云）** ');
code = code.replace('- **低风险稳健级（暮光加速 / 星岛梦）**：', '- **低风险稳健级（暮光加速 / 星岛梦）** ');
code = code.replace('- **中度风险受控级（飞猫云 / Firefly 萤火虫）**：', '- **中度风险受控级（飞猫云 / Firefly 萤火虫）** ');
code = code.replace('- **极高风险红色预警级（全网不知名新上线小机场）**：', '- **极高风险红色预警级（全网不知名新上线小机场）** ');
code = code.replace('路径 A: 企业级双IEPL专线 / 如光速云', '路径 A 企业级双IEPL专线 / 如光速云');
code = code.replace('路径 B: 普通公网中转 / 常见廉价机场', '路径 B 普通公网中转 / 常见廉价机场');

fs.writeFileSync('scripts/build_compare_monograph.js', code, 'utf8');
console.log('Compare monograph script refined.');
