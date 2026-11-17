const fs = require('fs');

// Trim in 08_faq_10_deep_answers.md
let s8 = fs.readFileSync('scripts/resources_hub_sections/08_faq_10_deep_answers.md', 'utf8');
s8 = s8.replace(
  '很多移动办公人员在机场、咖啡厅或酒店连接开放无密码的公共 WiFi 时，常常对网络通信保密性产生担忧。\n\n当您在设备上成功启动客户端并建立起加密网络隧道后，客户端与远端接入服务器之间的数据通信就已经被高强度对称加密算法（如 AES-256-GCM 或 ChaCha20-Poly1305）完全封装包裹。在此状态下，公共 WiFi 路由器的管理员在抓包工具中只能观察到您的设备正在向特定的专线接入 IP 发送一连串乱码二进制数据流。\n\n他们既无法解析出您具体正在访问的海外网址，也无法还原出网页内容或登录口令。但是需要特别注意，必须在客户端中强制启用 DNS 加密解析机制，防止系统底层的明文 DNS 请求绕过加密隧道向公共路由器泄露您的访问意图。',
  '在公共 WiFi 连接代理节点后，客户端与远端服务器之间通信已被强对称加密算法完全封装。公共 WiFi 管理员在抓包工具中只能观察到设备正向专线接入 IP 发送一连串乱码数据流，既无法解析访问网址，也无法还原网页内容或登录口令。但须在客户端中开启 DNS 加密解析，防止明文 DNS 请求泄露访问意图。'
);
s8 = s8.replace(
  '系统代理模式主要依托操作系统层面的环境变量与代理设置接口。其工作在计算机网络的应用层，主要对遵循系统代理约定的通用浏览器以及常规桌面软件生效。\n\n系统代理模式的优点在于占用底层资源极少，启动与停止极为敏捷，不会对网络适配器驱动产生侵入性修改。然而其短板在于无法接管那些不主动遵循系统代理设置的应用程序，例如终端命令行工具、部分依赖 UDP 协议的跨国联机游戏以及特定虚拟机。',
  '系统代理模式依托系统环境变量与代理接口，工作在应用层。优点在于资源占用极少、启动敏捷，不修改驱动；短板在于无法接管不主动遵循代理设置的应用，如终端命令行工具、部分联机游戏与特定虚拟机。'
);
s8 = s8.replace(
  '虚拟网卡模式（TUN Mode）则直接深入至网络层。客户端在操作系统内部虚拟出一张独立的硬件网络适配器，利用底层路由表规则，将设备网卡接收到的所有未经处理的原始 IP 数据包无差别强行捕获并接管。其优点在于实现了无死角的全平台流量接管；其缺点是需要用户赋予客户端管理员提升权限，并且在极少数特殊操作系统环境下可能与现存的虚拟专用网络发生底层驱动冲突。',
  '虚拟网卡模式（TUN）直接深入至网络层，在系统内虚拟出独立网卡并接管所有原始 IP 数据包。优点是实现无死角的全平台流量接管；缺点是需管理员权限，在极少数环境下可能与现有企业专用网络发生底层驱动冲突。'
);
fs.writeFileSync('scripts/resources_hub_sections/08_faq_10_deep_answers.md', s8, 'utf8');

// Trim in 06_operational_roadmap.md
let s6 = fs.readFileSync('scripts/resources_hub_sections/06_operational_roadmap.md', 'utf8');
s6 = s6.replace(
  '一切网络安全防护的基础在于终端软件的纯净性。市面上存在大量被二次打包或植入后门流氓广告的山寨客户端，安装此类软件会导致个人凭证被实时监听。\n\n用户应当严格从官方认证的开源项目发布页面或正规服务商后台下载安装包。对于桌面端平台（Windows、macOS、Linux），推荐选用架构现代化、基于 Tauri 框架打造的开源客户端 Clash Verge Rev，或者轻量高效的 Mihomo Party；对于 iOS 移动端，应通过海外区 App Store 获取正版 Shadowrocket 或 Sing-box；对于 Android 平台，推荐使用官方签名的 Clash Meta for Android 或 v2rayNG。\n\n安装完成后，应当在操作系统安全中心内确认软件签名无误，并禁止软件在未经允许的情况下修改非必要的系统底层驱动。',
  '网络安全基础在于终端软件的纯净性。市面存在大量二次打包或植入后门广告的山寨客户端，安装会导致凭据泄露。\n\n用户应严格从官方开源页面或正规后台下载。桌面端推荐开源的 Clash Verge Rev 或 Mihomo Party；iOS 端通过海外区 App Store 获取 Shadowrocket 或 Sing-box；Android 端推荐官方签名的 Clash Meta for Android。安装后应确认数字签名无误。'
);
fs.writeFileSync('scripts/resources_hub_sections/06_operational_roadmap.md', s6, 'utf8');

console.log('Final trim applied.');
