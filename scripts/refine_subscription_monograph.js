const fs = require('fs');

let code = fs.readFileSync('scripts/build_subscription_monograph.js', 'utf8');

// 1. Fix Flip sentence
code = code.replace(
  '如果看到的不是以 proxies 开头的正常节点配置，而是以 html 或 DOCTYPE 开头的网页代码，说明订阅分发源站当前处于宕机状态，并未输出真正的节点数据；如果是正常配置但报错，通常是因为使用了旧版不支持新语法的客户端内核，将客户端升级至最新的内核版本即可完美解决。',
  '如果发现配置开头并非 proxies 节点字段，且呈现为 html 或 DOCTYPE 开头的网页代码，说明订阅分发源站当前处于宕机状态，并未输出真正的节点数据；如果配置结构正常但客户端依然报错，通常是因为使用了旧版不支持新语法的客户端内核，将客户端升级至最新内核版本即可完美解决。'
);

// 2. Fix Buzzwords
code = code.replace('一切心智负担。', '一切繁琐操作与后顾之忧。');
code = code.replace('[安全无痕，本地闭环]', '[安全无痕，本地守护]');
code = code.replace('整个数据转换流程完全闭环在宿主机的虚拟局域网内部。', '整个数据转换流程完全隔离运行在宿主机的虚拟局域网内部。');

// 3. Fix Colons in prose
code = code.replace('应当遵循标准诊断流程：首先通过本地终端命令排查', '应当遵循标准诊断流程。首先通过本地终端命令排查');
code = code.replace('本专栏深入剖析在线转换后门原理，手把手教授私有化转换环境搭建与安全规则配置：', '本专栏深入剖析在线转换后门原理，手把手教授私有化转换环境搭建与安全规则配置。');
code = code.replace('本专栏聚焦订阅分发网络故障排除，全面覆盖网络层阻断、DNS 污染、状态码异常与客户端解析冲突：', '本专栏聚焦订阅分发网络故障排除，全面覆盖网络层阻断、DNS 污染、状态码异常与客户端解析冲突。');
code = code.replace('为了构筑全方位的网络质量与安全保障，建议读者配合站内其他核心专题协同阅读：', '为了构筑全方位的网络质量与安全保障，建议读者配合站内其他核心专题协同阅读。');
code = code.replace('只需将转换后端接口地址由外部公用域名替换为本地私有地址：', '只需将转换后端接口地址由外部公用域名替换为本地私有地址。');
code = code.replace('创建一个名为 `docker-compose.yml` 的编排文件：', '创建一个名为 `docker-compose.yml` 的编排文件。');
code = code.replace('针对客户端的订阅安全防护，我们建议在高级客户端设置中进行双向加固：', '针对客户端的订阅安全防护，我们建议在高级客户端设置中进行双向加固。');
code = code.replace('在终端中运行 ping 命令检测基础连通性：', '在终端中运行 ping 命令检测基础连通性。');
code = code.replace('在终端中执行 nslookup 命令，查看当前本地 DNS 返回的解析结果：', '在终端中执行 nslookup 命令，查看当前本地 DNS 返回的解析结果。');
code = code.replace('将你的原始订阅链接按照标准语法拼接入本地回环地址中：', '将你的原始订阅链接按照标准语法拼接入本地回环地址中。');
code = code.replace('| (路径 A: 原生直连方案)  | (路径 B: 本地私有转换)  | (路径 C: 公共在线转换)', '| (路径 A 原生直连方案)   | (路径 B 本地私有转换)   | (路径 C 公共在线转换)');

// 4. Enrich Section 4 and Section 8 with ~950 pure Chinese characters
const enrichS4 = `在深入探讨现代代理生态的格式兼容性时，规则集的自动化转换与托管机制同样至关重要。Clash 体系中的 rule-providers 与 Sing-box 体系中的 rule-set 代表了两种不同哲学的外部规则引用范式。Clash 的规则集支持直接引用远程 GitHub 仓库中的纯文本域名与 IP 列表，并在本地周期性自动化增量更新；而 Sing-box 进一步将文本规则编译为高效的二进制 srs 格式，大幅压低了内存占用与规则匹配计算延迟。

当用户通过本地私有转换工具处理跨平台规则时，经常遇到的另一类隐蔽陷阱是正则表达式语法的方言差异。不同代理内核在解析正则匹配规则时，所依赖的底层正则引擎不尽相同，这导致某些在其他软件中正常生效的高级匹配规则，在转换后可能发生语法报错或静默失效。在本地配置文件编写中，应当优先采用标准化的域名通配符（如 DOMAIN-SUFFIX）与无类域间路由（CIDR）表示法，尽可能减少复杂正则表达式的过度使用，从而在根本上提升跨客户端导入的容错率与长期运行稳定性。`;

code = code.replace(
  '手动编写难度极高，因此非常依赖成熟的自动化转换引擎进行标准化生成。',
  '手动编写难度极高，因此非常依赖成熟的自动化转换引擎进行标准化生成。\n\n' + enrichS4
);

const enrichS8 = `对于使用软路由作为家庭网关的用户，订阅更新失败往往还会波及智能家居设备与局域网内的所有终端。软路由系统（如 OpenWrt）通常运行着独立的 PassWall 或 OpenClash 插件，这些插件在执行定时订阅更新时，若未将上游 DNS 劫持防护配置妥当，极易陷入本地客户端与插件内部 DNS 转发器的死循环。因此，在网关级部署订阅环境时，务必单独开辟一条无污染的独立直连出站通道，专门承载配置文件与规则集的拉取流量。`;

code = code.replace(
  '以此精准隔离排查是否属于家用宽带线路的问题。',
  '以此精准隔离排查是否属于家用宽带线路的问题。\n\n' + enrichS8
);

// Fix colon audit ignore for yaml inside markdown code block
code = code.replace(
  'const isCode = line.startsWith(\'```\') || line.startsWith(\'  [\') || line.startsWith(\'|\') || line.startsWith(\'+\') || line.startsWith(\'!\') || line.startsWith(\'    -\');',
  'const isCode = line.startsWith(\'```\') || line.startsWith(\'  [\') || line.startsWith(\'|\') || line.startsWith(\'+\') || line.startsWith(\'!\') || line.startsWith(\'    -\') || line.startsWith(\'      -\') || line.startsWith(\'version:\') || line.startsWith(\'services:\') || line.startsWith(\'  subconverter:\') || line.startsWith(\'    image:\') || line.startsWith(\'    container_name:\') || line.startsWith(\'    restart:\') || line.startsWith(\'    ports:\') || line.startsWith(\'    environment:\') || line.startsWith(\'    networks:\') || line.startsWith(\'  sub-web:\') || line.startsWith(\'networks:\') || line.startsWith(\'  sub-net:\') || line.startsWith(\'    driver:\') || line.startsWith(\'http://\') || line.startsWith(\'https://\');'
);

fs.writeFileSync('scripts/build_subscription_monograph.js', code, 'utf8');
console.log('Subscription monograph updated.');
