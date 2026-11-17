export interface Brand {
  id: number;
  slug: string;
  name: string;
  enName: string;
  aliases: string[];
  color: string;
  operatedSince: string;
  entryPriceMonth: number;
  entryPriceNote: string;
  lineType: string;
  protocols: string[];
  clients: string[];
  nodeRegions: string[];
  affLink: string;
  coupon: string;
  couponDiscount: string;
  aiUnlock: { status: string; note: string };
  streamingUnlock: { status: string; note: string };
  speedtest: {
    hasScreenshot: boolean;
    imageFile?: string;
    testedAt?: string;
    tool?: string;
    protocolDisplayed?: string;
    dataStatus: string;
    summary?: Record<string, string>;
  };
  plans: Array<{ name: string; billing: string; price: string; traffic: string; period: string; note?: string }>;
  pros: string[];
  cons: string[];
  bestFor: string[];
  notFor: string[];
  riskWarning: string;
  dataStatus: string;
  verifiedDate: string;
  updatedAt: string;
  isFeatured: boolean;
  isPrimaryPush: boolean;
}

export const brands: Brand[] = [
  {
    "id": 1,
    "slug": "guangsu",
    "name": "光速云",
    "enName": "Guangsu Cloud",
    "aliases": [
      "光速云",
      "GSY",
      "guangsu"
    ],
    "color": "#2563eb",
    "operatedSince": "2020年",
    "entryPriceMonth": 8,
    "entryPriceNote": "年付折合约 8 元/月，69GB/月（轻量版 99 元/年；历史快照曾记录 59GB/月，经核对当前轻量版为 69GB/月）",
    "lineType": "IEPL 专线 + 企业级内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研客户端（Windows/macOS/Android/iOS）",
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港×20",
      "台湾×5",
      "日本×10",
      "新加坡×10",
      "美国×10",
      "马来西亚×2",
      "英国",
      "法国",
      "德国",
      "土耳其",
      "泰国",
      "巴西"
    ],
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "couponDiscount": "新人专属优惠券",
    "aiUnlock": {
      "status": "partial",
      "note": "Claude 支持良好；ChatGPT、Gemini 视具体节点路由而定，建议连接香港/新加坡专线节点。"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、Disney+、YouTube 4K、HBO Max、TikTok、Spotify 主流流媒体支持良好。"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "光速云-节点测速实测.png",
      "testedAt": "2026-08-11 14:32:56 CST",
      "tool": "MAI-TEST-BOT 2.0.0-dev（珠海联通 5Gbps / 32 线程）",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured",
      "summary": {
        "hkDelay": "22ms",
        "hkSpeed": "529Mbps",
        "sgDelay": "46ms",
        "sgSpeed": "387Mbps",
        "jpDelay": "57ms",
        "jpSpeed": "135Mbps",
        "usDelay": "143ms",
        "usSpeed": "18Mbps"
      }
    },
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB",
        "period": "长期不过期",
        "note": "单节点最高2.5Gbps，不限设备"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB/月",
        "period": "每月重置",
        "note": "折合约 8.25 元/月，原生稳定节点"
      },
      {
        "name": "极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB/月",
        "period": "每月重置",
        "note": "全球 IPLC 专线，全节点×1倍率，最高2.5Gbps"
      },
      {
        "name": "流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "268GB/月",
        "period": "每月重置",
        "note": "大流量首选，支持高并发"
      },
      {
        "name": "量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "568GB/月",
        "period": "每月重置",
        "note": "重度流媒体与生产力办公"
      },
      {
        "name": "无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB/月",
        "period": "每月重置",
        "note": "团队/跨国多设备重度传输"
      },
      {
        "name": "定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "period": "每月重置",
        "note": "独享原生 IP / 独立带宽 / 专属客服一对一"
      }
    ],
    "pros": [
      "2020年起稳定运营，非短期跑路新站",
      "IEPL 专线与企业级内网双线路冗余，晚高峰稳定性强",
      "自研客户端零配置一键登录，同时支持 Clash/小火箭订阅导入",
      "入门门槛低，年付折算仅 8 元/月左右",
      "提供一次性不限时 247GB 套餐，适合轻量备用用户"
    ],
    "cons": [
      "ChatGPT/Gemini 等 AI 平台并非全部节点秒开，需结合特定节点使用",
      "特殊促销套餐不支持退款，建议先月付体验",
      "历史资料中曾有 59GB/月与 69GB/月记录差异，购买时须以官网当前实时结算为准"
    ],
    "bestFor": [
      "跨境办公与远程协作",
      "外贸社媒运营",
      "YouTube 4K 与 Netflix 追剧",
      "追求稳定性的新手与进阶用户"
    ],
    "notFor": [
      "需要完全免费翻墙的小白",
      "要求 100% 节点无条件秒解所有小众 AI 平台的用户"
    ],
    "riskWarning": "建议按需购买月付或年付轻量套餐，谨慎一次性大额充值；本站与光速云存在推广合作关系，但在评测中如实披露优缺点与测试限制。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": true
  },
  {
    "id": 2,
    "slug": "muguang",
    "name": "暮光加速",
    "enName": "Twilight Acceleration",
    "aliases": [
      "暮光加速",
      "muguang",
      "快狸"
    ],
    "color": "#6366f1",
    "operatedSince": "2023年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元起，含 120GB 流量；另有年付轻量版 109 元/年（约 9 元/月，70GB/月）",
    "lineType": "BGP 智能调度 + 专线级出口",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "Windows",
      "macOS",
      "iOS",
      "Android",
      "Linux 全平台"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国等"
    ],
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "couponDiscount": "专属折扣优惠码",
    "aiUnlock": {
      "status": "full",
      "note": "实测支持 ChatGPT、Claude；Gemini 视节点而定。"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify 支持良好。"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "幕光加速-节点测速实测.png",
      "testedAt": "2026-08-11 19:52:22 CST",
      "tool": "喵速 4.7.0 (A11-32) / 珠海联通 9Gbps",
      "protocolDisplayed": "VLESS",
      "dataStatus": "measured",
      "summary": {
        "hkDelay": "26ms",
        "hkSpeed": "509Mbps",
        "sgDelay": "43ms",
        "sgSpeed": "419Mbps",
        "jpDelay": "53ms",
        "jpSpeed": "150Mbps",
        "usDelay": "160ms",
        "usSpeed": "19Mbps"
      }
    },
    "plans": [
      {
        "name": "暮光·基础版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "period": "每月重置"
      },
      {
        "name": "暮光·标准版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB/月",
        "period": "每月重置"
      },
      {
        "name": "暮光·旗舰版",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB/月",
        "period": "每月重置"
      },
      {
        "name": "暮光·年付轻量版",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB/月",
        "period": "每月重置"
      },
      {
        "name": "暮光·不限时轻量包",
        "billing": "一次性",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "多设备同时在线无门槛",
      "BGP 智能调度，延迟低",
      "官方宣称 7x24 小时真人客服"
    ],
    "cons": [
      "月付起步价格略高于纯廉价机场",
      "历史测试图曾以快狸别名存档"
    ],
    "bestFor": [
      "团队远程办公",
      "多设备重度用户",
      "流媒体追剧"
    ],
    "notFor": [
      "极度追求 5 元以下低价的用户"
    ],
    "riskWarning": "测速截图存在历史重合别名记录，建议月付测试。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 3,
    "slug": "feimao",
    "name": "飞猫云",
    "enName": "FlyCat Cloud",
    "aliases": [
      "飞猫云",
      "feimao",
      "flycat"
    ],
    "color": "#f59e0b",
    "operatedSince": "2023年",
    "entryPriceMonth": 7,
    "entryPriceNote": "年付学生版 ¥84，折合约 7 元/月，50GB/月",
    "lineType": "优质中转 + 专线混合调度",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "专属客户端（下载登录即用）",
      "通用订阅"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "couponDiscount": "专属折扣码",
    "aiUnlock": {
      "status": "full",
      "note": "支持 ChatGPT、Claude；Gemini 视节点而定"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、Disney+、YouTube、TikTok 全支持"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "飞猫云-节点测速实测.png",
      "testedAt": "2026-08-11 08:52:30 CST",
      "tool": "MAI-TEST-BOT 2.0.0-dev",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured",
      "summary": {
        "hkDelay": "21ms",
        "hkSpeed": "526Mbps",
        "sgDelay": "45ms",
        "sgSpeed": "413Mbps",
        "jpDelay": "54ms",
        "jpSpeed": "138Mbps",
        "usDelay": "178ms",
        "usSpeed": "14Mbps"
      }
    },
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB/月",
        "period": "每月重置"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "period": "每月重置"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "专属客户端免配置",
      "上手门槛极低",
      "香港与新加坡节点速度优异"
    ],
    "cons": [
      "欧美长距离节点速度稍慢",
      "学生版需年付"
    ],
    "bestFor": [
      "新手小白用户",
      "日常轻量看视频、查资料"
    ],
    "notFor": [
      "需要高度自定义策略分流的高阶网络工程师"
    ],
    "riskWarning": "专属客户端模式依赖官方更新，建议保留通用订阅备用。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 4,
    "slug": "weifeng",
    "name": "微风网络",
    "enName": "BreezeNet",
    "aliases": [
      "微风网络",
      "weifeng",
      "breeze"
    ],
    "color": "#06b6d4",
    "operatedSince": "2024年",
    "entryPriceMonth": 7,
    "entryPriceNote": "年付约 7 元/月，60GB/月",
    "lineType": "BGP 入口 + 隧道优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "v2rayN",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "couponDiscount": "9折优惠码",
    "aiUnlock": {
      "status": "partial",
      "note": "ChatGPT 部分节点支持，建议香港专线"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持 Netflix、YouTube 4K"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "微风-节点测速实测.png",
      "testedAt": "2026-08-11 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "微风·入门版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "60GB/月",
        "period": "每月重置"
      },
      {
        "name": "微风·进阶版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "价格亲民",
      "Clash 订阅格式兼容好",
      "界面简洁清晰"
    ],
    "cons": [
      "高峰期偶有延迟浮动",
      "运营时间较短"
    ],
    "bestFor": [
      "预算有限的学生与上班族",
      "备用节点库"
    ],
    "notFor": [
      "金融高频交易或高要求内网穿透"
    ],
    "riskWarning": "2024 年新兴品牌，注意控制订阅周期。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 5,
    "slug": "dalaoyun",
    "name": "大佬云",
    "enName": "Dalao Cloud",
    "aliases": [
      "大佬云",
      "dalaoyun"
    ],
    "color": "#8b5cf6",
    "operatedSince": "2024年",
    "entryPriceMonth": 5.6,
    "entryPriceNote": "年付 ¥68，折合约 5.6 元/月，60GB/月",
    "lineType": "优质中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "v2rayN",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "couponDiscount": "首发优惠码",
    "aiUnlock": {
      "status": "partial",
      "note": "部分节点支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "支持 YouTube 与部分 Netflix 区域"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "尝鲜套餐",
        "billing": "年付",
        "price": "¥68",
        "traffic": "60GB/月",
        "period": "每月重置"
      },
      {
        "name": "日常套餐",
        "billing": "月付",
        "price": "¥16",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "月均仅 5.6 元极低价格",
      "节点分布覆盖主流区域"
    ],
    "cons": [
      "无独立单节点测速截图",
      "晚高峰带宽可能限速"
    ],
    "bestFor": [
      "低预算用户",
      "作为第二主力备用梯子"
    ],
    "notFor": [
      "8K 极速视频或大文件极速下载"
    ],
    "riskWarning": "极低价格机场需防范高峰拥堵风险。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 6,
    "slug": "xingdaomeng",
    "name": "星岛梦",
    "enName": "Xingdaomeng",
    "aliases": [
      "星岛梦",
      "xingdaomeng"
    ],
    "color": "#ec4899",
    "operatedSince": "2020年",
    "entryPriceMonth": 19,
    "entryPriceNote": "月付 19 元，120GB/月；提供不限时不过期流量包",
    "lineType": "专线混合隧道",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "couponDiscount": "活动优惠",
    "aiUnlock": {
      "status": "full",
      "note": "ChatGPT/Claude 支持良好"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、Disney+ 常见流媒体解锁"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "星岛梦-节点测速实测.png",
      "testedAt": "2026-08-11 01:48:13 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "月付套餐",
        "billing": "月付",
        "price": "¥19",
        "traffic": "120GB/月",
        "period": "每月重置"
      },
      {
        "name": "不限时流量包",
        "billing": "一次性",
        "price": "¥158",
        "traffic": "300GB",
        "period": "长期有效"
      }
    ],
    "pros": [
      "2020年老牌稳定运营",
      "有不限时套餐",
      "流媒体解锁稳定"
    ],
    "cons": [
      "节点倍率不一，需注意策略选择"
    ],
    "bestFor": [
      "不常上网但需要稳定备用的用户",
      "流媒体追剧"
    ],
    "notFor": [
      "需要每日超大 GB 流量下载的用户"
    ],
    "riskWarning": "测速图为凌晨时段测试，晚高峰速度略有差异。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 7,
    "slug": "ermao",
    "name": "二猫云",
    "enName": "2Mao Cloud",
    "aliases": [
      "二猫云",
      "ermao",
      "2maoyun"
    ],
    "color": "#14b8a6",
    "operatedSince": "2023年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，130GB/月",
    "lineType": "BGP 隧道专线优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "韩国"
    ],
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "couponDiscount": "专属优惠码",
    "aiUnlock": {
      "status": "partial",
      "note": "ChatGPT 亚洲节点可用"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、YouTube 体验流畅"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "二猫云-节点测速实测.png",
      "testedAt": "2026-08-11 10:45:27 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "轻度体验版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB/月",
        "period": "每月重置"
      },
      {
        "name": "深度畅享版",
        "billing": "月付",
        "price": "¥38",
        "traffic": "280GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "节点延迟较低",
      "客户端兼容性强",
      "客服响应积极"
    ],
    "cons": [
      "高峰期偶有抖动"
    ],
    "bestFor": [
      "上班族日常办公",
      "网页浏览与高清视频"
    ],
    "notFor": [
      "对延迟要求在 20ms 内的跨国竞技游戏"
    ],
    "riskWarning": "建议优先月付体验。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 8,
    "slug": "wuyou",
    "name": "无忧链接",
    "enName": "WorryFree Link",
    "aliases": [
      "无忧链接",
      "wuyou",
      "worryfree"
    ],
    "color": "#3b82f6",
    "operatedSince": "2024年",
    "entryPriceMonth": 6,
    "entryPriceNote": "月付 6 元轻量套餐",
    "lineType": "隧道中转优化",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "通用订阅免转换"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡"
    ],
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "couponDiscount": "立减优惠",
    "aiUnlock": {
      "status": "partial",
      "note": "部分节点支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "YouTube 4K 流畅，Netflix 视节点"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "无忧轻量版",
        "billing": "月付",
        "price": "¥6",
        "traffic": "50GB/月",
        "period": "每月重置"
      },
      {
        "name": "无忧标准版",
        "billing": "月付",
        "price": "¥15",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "订阅无需额外转换",
      "6元超低门槛",
      "操作简便"
    ],
    "cons": [
      "节点数量较少",
      "无独立测速大图"
    ],
    "bestFor": [
      "预算极低用户",
      "备用翻墙应急"
    ],
    "notFor": [
      "多设备并发或企业级业务"
    ],
    "riskWarning": "低价轻量型产品，请保持月付。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 9,
    "slug": "weitu",
    "name": "唯兔云",
    "enName": "V2Yun Weitu",
    "aliases": [
      "唯兔云",
      "weitu",
      "v2yun"
    ],
    "color": "#10b981",
    "operatedSince": "2023年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，150GB/月",
    "lineType": "三网优化 + 智能负载均衡",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "v2rayN",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "60+ 节点"
    ],
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "couponDiscount": "通用折扣码",
    "aiUnlock": {
      "status": "full",
      "note": "支持 ChatGPT、Claude、Gemini"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "三网优化流媒体支持良好"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "唯兔云-节点测速实测.png",
      "testedAt": "2026-08-11 13:55:08 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "唯兔基础",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB/月",
        "period": "每月重置"
      },
      {
        "name": "唯兔高速",
        "billing": "月付",
        "price": "¥35",
        "traffic": "300GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "60+ 节点规模大",
      "三网智能优化路由",
      "测速表现稳定"
    ],
    "cons": [
      "高峰期偶有个别节点维护"
    ],
    "bestFor": [
      "联通/移动/电信全网用户",
      "流媒体与大流量需求"
    ],
    "notFor": [
      "需要极小流量极低单价的用户"
    ],
    "riskWarning": "节点轮换较为频繁，请开启自动更新订阅。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 10,
    "slug": "firefly",
    "name": "Firefly 萤火虫",
    "enName": "Firefly Cloud",
    "aliases": [
      "Firefly",
      "firefly",
      "萤火虫",
      "yinghuochong"
    ],
    "color": "#eab308",
    "operatedSince": "2023年",
    "entryPriceMonth": 8,
    "entryPriceNote": "年付版 ¥96，折合约 8 元/月，60GB/月；月付版 25 元起（150GB/月）",
    "lineType": "IPLC 纯专线接入",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "专属客户端（免配订阅）",
      "通用订阅"
    ],
    "nodeRegions": [
      "香港",
      "新加坡",
      "日本",
      "美国",
      "原生 IP"
    ],
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "couponDiscount": "新用户8折（年付除外）",
    "aiUnlock": {
      "status": "full",
      "note": "原生 IP 解锁 ChatGPT、Claude、Gemini、Meta AI"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "Netflix、Disney+、YouTube 4K 全解锁"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor",
      "summary": {
        "hkDelay": "27ms",
        "hkSpeed": "547Mbps",
        "sgDelay": "42ms",
        "sgSpeed": "445Mbps",
        "jpDelay": "57ms",
        "jpSpeed": "147Mbps",
        "usDelay": "143ms",
        "usSpeed": "30Mbps"
      }
    },
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "period": "每月重置"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "period": "每月重置"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB/月",
        "period": "每月重置"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB/月",
        "period": "每月重置"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "IPLC 纯专线抗封锁低延迟",
      "原生 IP 解锁能力强",
      "自研客户端登录即用，免配置"
    ],
    "cons": [
      "单月购买成本高于中转机场",
      "清单中萤火虫与 Firefly 属同源实体合并"
    ],
    "bestFor": [
      "严肃学术与跨境生产力",
      "高品质 AI 与 4K 追剧"
    ],
    "notFor": [
      "极度追求几元廉价中转的用户"
    ],
    "riskWarning": "专线成本较高，优惠码对年付版通常有适用限制。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 11,
    "slug": "yuzhou",
    "name": "宇宙云",
    "enName": "Universe Cloud",
    "aliases": [
      "宇宙云",
      "yuzhou"
    ],
    "color": "#6366f1",
    "operatedSince": "2024年",
    "entryPriceMonth": 19,
    "entryPriceNote": "月付 19 元，100GB/月",
    "lineType": "IEPL 专线 + VLESS",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "couponDiscount": "专属优惠码",
    "aiUnlock": {
      "status": "full",
      "note": "实测支持主流 AI"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持 Netflix、Disney+"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "宇宙云-节点测速实测.png",
      "testedAt": "2026-08-11 21:04:24 CST",
      "tool": "喵速 4.7.0 / 珠海联通 9Gbps",
      "protocolDisplayed": "VLESS",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "宇宙基础版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB/月",
        "period": "每月重置"
      },
      {
        "name": "宇宙畅行版",
        "billing": "月付",
        "price": "¥36",
        "traffic": "240GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "IEPL 专线架构",
      "VLESS 现代协议",
      "晚高峰测速表现佳"
    ],
    "cons": [
      "节点覆盖以核心枢纽为主"
    ],
    "bestFor": [
      "追求 VLESS 专线稳定性的用户",
      "办公与视频"
    ],
    "notFor": [
      "需要数十个小众国家落地节点的用户"
    ],
    "riskWarning": "新品牌请优先月付验证网络表现。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 12,
    "slug": "u1s1",
    "name": "U1S1",
    "enName": "U1S1 Cloud",
    "aliases": [
      "U1S1",
      "u1s1"
    ],
    "color": "#0284c7",
    "operatedSince": "2023年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，120GB/月 标准方案",
    "lineType": "多线中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "couponDiscount": "专属折扣",
    "aiUnlock": {
      "status": "partial",
      "note": "支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "流媒体支持良好"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "U1S1-节点测速实测.png",
      "testedAt": "2026-08-11 22:33:29 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "U1S1 标配",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "period": "每月重置"
      },
      {
        "name": "U1S1 高配",
        "billing": "月付",
        "price": "¥38",
        "traffic": "260GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "实测测速截图完整",
      "主流客户端全面兼容",
      "晚高峰延迟良好"
    ],
    "cons": [
      "无自研客户端，需使用第三方软件"
    ],
    "bestFor": [
      "Clash 老玩家",
      "日常影音娱乐"
    ],
    "notFor": [
      "完全不会配置第三方客户端的小白"
    ],
    "riskWarning": "注意导入订阅时勾选自动更新配置。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 13,
    "slug": "lingmao",
    "name": "灵猫网络",
    "enName": "CivetNet",
    "aliases": [
      "灵猫网络",
      "lingmao",
      "civetnet"
    ],
    "color": "#f97316",
    "operatedSince": "2024年",
    "entryPriceMonth": 19,
    "entryPriceNote": "月付 19 元，150GB/月；提供不限时套餐",
    "lineType": "BGP 中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "couponDiscount": "专属折扣码",
    "aiUnlock": {
      "status": "full",
      "note": "实测支持主流 AI"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持 Netflix、YouTube"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "灵猫网络-节点测速实测.png",
      "testedAt": "2026-08-11 18:45:40 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "灵猫轻量版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "150GB/月",
        "period": "每月重置"
      },
      {
        "name": "灵猫不限时",
        "billing": "一次性",
        "price": "¥128",
        "traffic": "200GB",
        "period": "长期不过期"
      }
    ],
    "pros": [
      "流量单价实惠",
      "提供不限时选项",
      "测速数据完备"
    ],
    "cons": [
      "节点数量一般"
    ],
    "bestFor": [
      "经常需要临时外网的用户",
      "中度流量用户"
    ],
    "notFor": [
      "需要海量节点池的爬虫业务"
    ],
    "riskWarning": "不限时流量包不退款，按需选购。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 14,
    "slug": "jilian",
    "name": "极连云",
    "enName": "Jilian Cloud",
    "aliases": [
      "极连云",
      "jilian"
    ],
    "color": "#3b82f6",
    "operatedSince": "2024年",
    "entryPriceMonth": 18,
    "entryPriceNote": "月付 18 元，100GB/月",
    "lineType": "高速中转专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "couponDiscount": "折扣优惠",
    "aiUnlock": {
      "status": "partial",
      "note": "品牌资料显示覆盖 AI"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "流媒体解锁良好"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "极连云-节点测速实测.png",
      "testedAt": "2026-08-11 22:46:50 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "极连微型",
        "billing": "月付",
        "price": "¥18",
        "traffic": "100GB/月",
        "period": "每月重置"
      },
      {
        "name": "极连尊享",
        "billing": "月付",
        "price": "¥32",
        "traffic": "220GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "测速实测晚高峰延迟表现合格",
      "价格适中"
    ],
    "cons": [
      "知名度还在积累阶段"
    ],
    "bestFor": [
      "日常网络冲浪",
      "Clash 客户端用户"
    ],
    "notFor": [
      "小众冷门地区落地访问"
    ],
    "riskWarning": "建议订阅周期不超过季付。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 15,
    "slug": "guangnian",
    "name": "光年梯",
    "enName": "Guangnian Cloud",
    "aliases": [
      "光年梯",
      "guangnian"
    ],
    "color": "#059669",
    "operatedSince": "2024年",
    "entryPriceMonth": 18,
    "entryPriceNote": "月付 18 元，110GB/月",
    "lineType": "高速隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "couponDiscount": "优惠减免",
    "aiUnlock": {
      "status": "partial",
      "note": "部分节点支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "YouTube 4K 流畅"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "光年梯-节点测速实测.png",
      "testedAt": "2026-08-11 14:38:04 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "光年标准",
        "billing": "月付",
        "price": "¥18",
        "traffic": "110GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "延迟表现平稳",
      "客户端规则兼容"
    ],
    "cons": [
      "套餐档位较少"
    ],
    "bestFor": [
      "个人单设备使用"
    ],
    "notFor": [
      "需要海量团队流量的场景"
    ],
    "riskWarning": "请使用月付订阅。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 16,
    "slug": "yifan",
    "name": "一翻云",
    "enName": "1Fly Cloud",
    "aliases": [
      "一翻云",
      "yifan",
      "1flyun"
    ],
    "color": "#2563eb",
    "operatedSince": "2024年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，150GB/月",
    "lineType": "BGP 入口优化专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "couponDiscount": "注册折扣码",
    "aiUnlock": {
      "status": "full",
      "note": "实测支持主流 AI"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持 Netflix、YouTube"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "一翻云-节点测速实测.png",
      "testedAt": "2026-08-11 00:21:30 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "一翻标准",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "流量充足单价合算",
      "节点网络测速稳定"
    ],
    "cons": [
      "高峰期偶尔换点"
    ],
    "bestFor": [
      "视频重度用户"
    ],
    "notFor": [
      "多节点同时大并发采集"
    ],
    "riskWarning": "请核对注册链接是否正常更新。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 17,
    "slug": "sogo",
    "name": "SOGO 云",
    "enName": "SOGO Cloud",
    "aliases": [
      "SOGO 云",
      "sogo",
      "sogoyun"
    ],
    "color": "#8b5cf6",
    "operatedSince": "2026年",
    "entryPriceMonth": 22,
    "entryPriceNote": "月付 22 元，150GB/月",
    "lineType": "全新优化专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "couponDiscount": "新年活动码",
    "aiUnlock": {
      "status": "partial",
      "note": "支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持主流流媒体"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "SOGO云-节点测速实测.png",
      "testedAt": "2026-08-11 18:57:59 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "SOGO 新客套餐",
        "billing": "月付",
        "price": "¥22",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "2026 年新设备投入",
      "负载低速度快"
    ],
    "cons": [
      "运营年限短，稳定性尚待时间检验"
    ],
    "bestFor": [
      "尝鲜新机场性能的用户"
    ],
    "notFor": [
      "长期一次性年付订阅"
    ],
    "riskWarning": "2026 年新品牌，强烈建议仅购买月付。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 18,
    "slug": "kexin",
    "name": "可信云",
    "enName": "Kexin Cloud",
    "aliases": [
      "可信云",
      "kexin",
      "kosing"
    ],
    "color": "#0891b2",
    "operatedSince": "2024年",
    "entryPriceMonth": 19,
    "entryPriceNote": "月付 19 元，120GB/月",
    "lineType": "隧道优化线路",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "couponDiscount": "立减折扣",
    "aiUnlock": {
      "status": "partial",
      "note": "部分节点支持"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "YouTube 体验良好"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "可信云-节点测速实测.png",
      "testedAt": "2026-08-11 15:32:35 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "可信标准版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "官方资料诚实标明数据边界",
      "测速表现平稳"
    ],
    "cons": [
      "AI 解锁需特定节点"
    ],
    "bestFor": [
      "普通网页与查资料需求"
    ],
    "notFor": [
      "苛刻流媒体全区解锁"
    ],
    "riskWarning": "测速图日期完整性在批次中为推断，建议自行月付复测。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 19,
    "slug": "sujie",
    "name": "速界",
    "enName": "SpeedWorld",
    "aliases": [
      "速界",
      "sujie",
      "speedworld"
    ],
    "color": "#dc2626",
    "operatedSince": "2024年",
    "entryPriceMonth": 25,
    "entryPriceNote": "月付 25 元，180GB/月",
    "lineType": "高速专线直连",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "couponDiscount": "专属折扣",
    "aiUnlock": {
      "status": "full",
      "note": "品牌资料特别强调 AI 工具优化支持"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "流媒体解锁全"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "速界-节点测速实测.png",
      "testedAt": "2026-08-11 15:39:36 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "速界畅行",
        "billing": "月付",
        "price": "¥25",
        "traffic": "180GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "针对 AI 优化",
      "单月流量配额足",
      "测速下行优秀"
    ],
    "cons": [
      "起步价格略高"
    ],
    "bestFor": [
      "AI 开发者与跨境研究员"
    ],
    "notFor": [
      "超低预算用户"
    ],
    "riskWarning": "请结合实测晚高峰表现再考虑长期订阅。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 20,
    "slug": "shanyue",
    "name": "闪跃",
    "enName": "FlashLeap",
    "aliases": [
      "闪跃",
      "shanyue",
      "flashleap"
    ],
    "color": "#f59e0b",
    "operatedSince": "2024年",
    "entryPriceMonth": 24,
    "entryPriceNote": "月付 24 元，150GB/月",
    "lineType": "智能加速专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "couponDiscount": "专属码",
    "aiUnlock": {
      "status": "partial",
      "note": "支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "流媒体解锁良好"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "闪跃体验",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "专线延迟较低",
      "规则支持全面"
    ],
    "cons": [
      "缺少公开独立测速截图存档"
    ],
    "bestFor": [
      "日常中度用户"
    ],
    "notFor": [
      "需要实测截图比对才下单的严谨用户"
    ],
    "riskWarning": "数据以官方宣称为主，建议月付。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 21,
    "slug": "quanqiu",
    "name": "全球云",
    "enName": "Global Cloud",
    "aliases": [
      "全球云",
      "quanqiu",
      "gcvip"
    ],
    "color": "#1d4ed8",
    "operatedSince": "2026年",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，120GB/月",
    "lineType": "全球多区域专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国",
      "德国"
    ],
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "couponDiscount": "新客专享",
    "aiUnlock": {
      "status": "partial",
      "note": "主流 AI 支持"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "支持常见流媒体"
    },
    "speedtest": {
      "hasScreenshot": true,
      "imageFile": "全球云-节点测速实测.png",
      "testedAt": "2026-08-11 15:50:43 CST",
      "tool": "MAI-TEST-BOT",
      "protocolDisplayed": "Shadowsocks",
      "dataStatus": "measured"
    },
    "plans": [
      {
        "name": "全球标准",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "2026 新品牌架构",
      "节点地区较丰富",
      "测速表现平稳"
    ],
    "cons": [
      "品牌历史短"
    ],
    "bestFor": [
      "多地区节点需求"
    ],
    "notFor": [
      "只认 5 年以上老品牌的用户"
    ],
    "riskWarning": "2026 年新品牌，切勿盲目长期一次性年付。",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 22,
    "slug": "shandianshu",
    "name": "闪电鼠",
    "enName": "Lightning Mouse",
    "aliases": [
      "闪电鼠",
      "shandianshu"
    ],
    "color": "#eab308",
    "operatedSince": "2024年",
    "entryPriceMonth": 5.6,
    "entryPriceNote": "年付 ¥68，折合约 5.6 元/月，60GB/月",
    "lineType": "低价中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "couponDiscount": "特价折扣",
    "aiUnlock": {
      "status": "partial",
      "note": "部分节点支持"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体支持"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "特惠包",
        "billing": "年付",
        "price": "¥68",
        "traffic": "60GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "月均 5.6 元极低价格",
      "轻度用户无压力"
    ],
    "cons": [
      "晚高峰可能降速",
      "无独立测速图"
    ],
    "bestFor": [
      "学生党",
      "轻度查资料与备用"
    ],
    "notFor": [
      "超高清 4K 原盘直连"
    ],
    "riskWarning": "低价机场容易受高峰冲击，建议保持备用方案。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 23,
    "slug": "yunjiexian",
    "name": "云界线",
    "enName": "Cloud Boundary",
    "aliases": [
      "云界线",
      "yunjiexian"
    ],
    "color": "#64748b",
    "operatedSince": "2024年",
    "entryPriceMonth": 5.6,
    "entryPriceNote": "年付 ¥68，折合约 5.6 元/月，60GB/月",
    "lineType": "中转中继",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "美国"
    ],
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "couponDiscount": "特惠码",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立测试数据"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "支持基础视频"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "平价套餐",
        "billing": "年付",
        "price": "¥68",
        "traffic": "60GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "超低价格门槛"
    ],
    "cons": [
      "推广链接格式曾有历史变动",
      "缺少独立测试数据"
    ],
    "bestFor": [
      "低成本应急备用"
    ],
    "notFor": [
      "企业核心业务"
    ],
    "riskWarning": "推广链接曾有异常，访问前请核对官网域名。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 24,
    "slug": "liulianyun",
    "name": "榴莲云",
    "enName": "Durian Cloud",
    "aliases": [
      "榴莲云",
      "liulianyun"
    ],
    "color": "#84cc16",
    "operatedSince": "2024年",
    "entryPriceMonth": 5.6,
    "entryPriceNote": "年付 ¥68，折合约 5.6 元/月，60GB/月",
    "lineType": "中转加速",
    "protocols": [
      "待核实",
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "美国"
    ],
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "couponDiscount": "特惠码",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础视频可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "榴莲轻量",
        "billing": "年付",
        "price": "¥68",
        "traffic": "60GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "价格便宜"
    ],
    "cons": [
      "协议未完全明确",
      "无独立测试报告"
    ],
    "bestFor": [
      "应急备用梯子"
    ],
    "notFor": [
      "要求明确协议与低延迟的用户"
    ],
    "riskWarning": "资料缺失较多，已如实标注待核实。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 25,
    "slug": "shenxing",
    "name": "神行加速",
    "enName": "Shenxing Speed",
    "aliases": [
      "神行加速",
      "shenxing"
    ],
    "color": "#ef4444",
    "operatedSince": "2024年",
    "entryPriceMonth": 14,
    "entryPriceNote": "月付 14 元，120GB/月",
    "lineType": "中转与专线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "couponDiscount": "专属折扣",
    "aiUnlock": {
      "status": "partial",
      "note": "支持 ChatGPT"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "流媒体支持良好"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "神行日常",
        "billing": "月付",
        "price": "¥14",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "月付仅 14 元门槛低",
      "流量额度合理"
    ],
    "cons": [
      "缺少公开实测截图"
    ],
    "bestFor": [
      "月度灵活续费用户"
    ],
    "notFor": [
      "长期高并发下载"
    ],
    "riskWarning": "请使用月付模式。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 26,
    "slug": "huanqiuti",
    "name": "环球梯",
    "enName": "Global Ladder",
    "aliases": [
      "环球梯",
      "huanqiuti"
    ],
    "color": "#0284c7",
    "operatedSince": "2024年",
    "entryPriceMonth": 5.6,
    "entryPriceNote": "年付 ¥68，折合约 5.6 元/月，60GB/月",
    "lineType": "中转加速",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "美国"
    ],
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "couponDiscount": "特价优惠",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体支持"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "环球轻量",
        "billing": "年付",
        "price": "¥68",
        "traffic": "60GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "低价入门"
    ],
    "cons": [
      "推广链接曾有异常，待复核",
      "无测速截图"
    ],
    "bestFor": [
      "预算极度敏感的备用梯子需求"
    ],
    "notFor": [
      "主要生产力或长期办公"
    ],
    "riskWarning": "链接格式需复核，建议月付尝试。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 27,
    "slug": "yinxingren",
    "name": "隐形人",
    "enName": "Invisible Net",
    "aliases": [
      "隐形人",
      "yinxingren",
      "invisible"
    ],
    "color": "#475569",
    "operatedSince": "2024年",
    "entryPriceMonth": 9,
    "entryPriceNote": "年付小包 ¥109，折合约 9 元/月，80GB/月；月付档从 24 元起（144GB/月）",
    "lineType": "企业级 IPLC 专线直连",
    "protocols": [
      "私有专线协议"
    ],
    "clients": [
      "仅支持专属客户端（不支持 Clash/小火箭等第三方订阅）"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾，60+ 节点"
    ],
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "couponDiscount": "专属8折码 moon80",
    "aiUnlock": {
      "status": "full",
      "note": "官方宣称支持 ChatGPT；Claude/Gemini 视节点而定"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "官方宣称支持 Netflix、Disney+、YouTube、HBO Max、Spotify"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB/月",
        "period": "每月重置"
      },
      {
        "name": "标准月付",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "企业级 IPLC 专线直连",
      "60+ 节点详细公布",
      "宣称 1 小时故障修复承诺"
    ],
    "cons": [
      "不支持任何第三方订阅链接（Clash/小火箭无法使用）",
      "起步月付价格偏高",
      "官方不提供试用"
    ],
    "bestFor": [
      "不想折腾客户端配置、接受专属软件的新手小白"
    ],
    "notFor": [
      "软路由用户、喜欢自定义分流规则的 Clash 进阶玩家"
    ],
    "riskWarning": "官方承诺如'1小时修复'属于品牌官方宣称（vendor），非独立实测保证；不支持第三方客户端。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 28,
    "slug": "tiziyun",
    "name": "梯子云服务",
    "enName": "TiziCloud Service",
    "aliases": [
      "梯子云",
      "tiziyun",
      "ladder"
    ],
    "color": "#2563eb",
    "operatedSince": "2025年",
    "entryPriceMonth": 7.4,
    "entryPriceNote": "年付约 7.4 元/月，60GB/月",
    "lineType": "IEPL 专线 + 独立带宽",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研全平台客户端（一键登录）",
      "支持通用订阅（Clash/小火箭等）"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾等核心枢纽，60+ 节点"
    ],
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "couponDiscount": "专属优惠码",
    "aiUnlock": {
      "status": "full",
      "note": "品牌资料宣称支持 ChatGPT、Claude、TikTok"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "品牌资料宣称支持 Netflix、Disney+ 4K"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "梯子云轻量",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB/月",
        "period": "每月重置"
      },
      {
        "name": "梯子云畅行",
        "billing": "月付",
        "price": "¥22",
        "traffic": "160GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "自研客户端与通用订阅双支持",
      "60+ 节点与 2Gbps+ 独立带宽",
      "小白一键上手零门槛"
    ],
    "cons": [
      "新近上线品牌，长期在线率尚在积累验证"
    ],
    "bestFor": [
      "既想要一键客户端又想在路由器或 Clash 上使用的灵活用户"
    ],
    "notFor": [
      "只看 3 年以上历史老店的用户"
    ],
    "riskWarning": "注：本评测对象为收录之梯子云机场服务商，非本评测媒体站 tizicloud.homes 自身；建议月付体验。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16",
    "isFeatured": true,
    "isPrimaryPush": false
  },
  {
    "id": 29,
    "slug": "wgetcloud",
    "name": "WgetCloud",
    "enName": "WgetCloud",
    "aliases": [
      "WgetCloud",
      "wgetcloud"
    ],
    "color": "#0f766e",
    "operatedSince": "历史记录",
    "entryPriceMonth": 99,
    "entryPriceNote": "季付 297 元起（折合 99 元/月，230GB/月），无直接月付档位记录",
    "lineType": "精品专线服务",
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国",
      "韩国",
      "澳大利亚",
      "加拿大",
      "英国",
      "巴西等 15 个地区"
    ],
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "待核实",
    "couponDiscount": "官网实时核对",
    "aiUnlock": {
      "status": "partial",
      "note": "2026-05-02 历史测试：ChatGPT/Gemini 部分节点可用"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "2026-05-02 历史测试：Netflix/Disney+/YouTube 部分节点可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical",
      "testedAt": "2026-05-02 历史记录",
      "summary": {
        "hkDelay": "25.9ms",
        "hkSpeed": "431Mbps",
        "sgDelay": "55.6ms",
        "sgSpeed": "422Mbps",
        "jpDelay": "69.4ms",
        "jpSpeed": "462Mbps",
        "usDelay": "170.2ms",
        "usSpeed": "440Mbps"
      }
    },
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月重置"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "专线延迟低，历史多节点下行均在 50MB/s 以上",
      "跨国节点丰富"
    ],
    "cons": [
      "门槛高，无单月直接付费",
      "价格昂贵"
    ],
    "bestFor": [
      "高预算企业商务用户",
      "重度跨境办公"
    ],
    "notFor": [
      "普通轻量娱乐用户"
    ],
    "riskWarning": "历史测速数据非实时，购买前必须在官网复核当前套餐与计费周期。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 30,
    "slug": "baiyueguang",
    "name": "白月光",
    "enName": "Moonlight Cloud",
    "aliases": [
      "白月光",
      "baiyueguang"
    ],
    "color": "#6b7280",
    "operatedSince": "历史记录",
    "entryPriceMonth": 22,
    "entryPriceNote": "季付 66 元（折合 22 元/月，100GB/月），无直接单月记录",
    "lineType": "多节点中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "美国",
      "日本",
      "台湾",
      "新加坡等 79 个名目地区"
    ],
    "affLink": "https://sibker.com/register?invite_code=gg6puAId",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "partial",
      "note": "2026-07-17 历史测试：部分可用"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "2026-07-17 历史测试：部分可用，Spotify 失败"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical",
      "testedAt": "2026-07-17 历史记录",
      "summary": {
        "hkDelay": "160.7ms",
        "hkSpeed": "114Mbps",
        "sgDelay": "186.8ms",
        "sgSpeed": "85Mbps",
        "jpDelay": "202.4ms",
        "jpSpeed": "77Mbps",
        "usDelay": "302.6ms",
        "usSpeed": "70Mbps"
      }
    },
    "plans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "100GB/月",
        "period": "每月重置"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "250GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "名义节点涉及地区多",
      "季付 66 元总额不高"
    ],
    "cons": [
      "延迟偏高，台湾节点历史测速异常",
      "无直接月付"
    ],
    "bestFor": [
      "需要冷门小众落地节点测速"
    ],
    "notFor": [
      "低延迟游戏或高频即时办公"
    ],
    "riskWarning": "历史测试结果不等于实时速度，节点质量参差不齐。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 31,
    "slug": "flyingbird",
    "name": "FlyingBird 飞鸟",
    "enName": "FlyingBird",
    "aliases": [
      "FlyingBird",
      "飞鸟",
      "flyingbird"
    ],
    "color": "#0284c7",
    "operatedSince": "历史记录",
    "entryPriceMonth": 15,
    "entryPriceNote": "月付 15 元，100GB/月",
    "lineType": "全专线 IPLC / 无倍率不限速",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.flyingbird.run",
    "coupon": "theo / year85",
    "couponDiscount": "9折 / 年付85折",
    "aiUnlock": {
      "status": "untested",
      "note": "历史资料未提供独立逐项解锁实测"
    },
    "streamingUnlock": {
      "status": "untested",
      "note": "暂无独立逐项测试"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "vendor"
    },
    "plans": [
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "period": "每月重置"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "全 IPLC 专线架构",
      "无倍率不限速定位",
      "支持支付宝与 USDT"
    ],
    "cons": [
      "历史站群同源，独立入口曾有变动"
    ],
    "bestFor": [
      "专线爱好者"
    ],
    "notFor": [
      "需要完全公开透明测速证据的用户"
    ],
    "riskWarning": "未提供逐地区实测图，仅供参考。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 32,
    "slug": "cyberguard",
    "name": "CyberGuard",
    "enName": "CyberGuard",
    "aliases": [
      "CyberGuard",
      "cyberguard"
    ],
    "color": "#0284c7",
    "operatedSince": "历史记录",
    "entryPriceMonth": 32,
    "entryPriceNote": "月付 32 元，350GB/月；半年付轻量 95 元（约 15.8 元/月）",
    "lineType": "多协议专线",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "日本",
      "美国",
      "澳大利亚",
      "德国",
      "法国",
      "阿联酋",
      "英国",
      "香港",
      "新加坡等 12 地区"
    ],
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "待核实",
    "couponDiscount": "官方活动",
    "aiUnlock": {
      "status": "full",
      "note": "2025-06-21 历史测试：ChatGPT/Claude/Gemini 可用"
    },
    "streamingUnlock": {
      "status": "full",
      "note": "2025-06-21 历史测试：Netflix/Disney+/Max/TikTok 可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical",
      "testedAt": "2025-06-21 历史记录",
      "summary": {
        "jpDelay": "123.8ms",
        "jpSpeed": "488Mbps",
        "usDelay": "614ms",
        "usSpeed": "245Mbps"
      }
    },
    "plans": [
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "period": "每月重置"
      },
      {
        "name": "220G 流量包｜不限时",
        "billing": "一次性",
        "price": "¥79",
        "traffic": "220GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "流量包大，不限时套餐可选",
      "历史解锁测试较全面"
    ],
    "cons": [
      "测速数据为 2025 年旧测速，不可作实时依据",
      "韩国等节点曾有异常延迟"
    ],
    "bestFor": [
      "大流量欧洲/中东节点需求"
    ],
    "notFor": [
      "追求当下 2026 实时验证的用户"
    ],
    "riskWarning": "历史测试数据已超 1 年，仅作档案参考。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-23",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 33,
    "slug": "longmaoyun",
    "name": "龙猫云",
    "enName": "Totoro Cloud",
    "aliases": [
      "龙猫云",
      "longmaoyun",
      "totoro"
    ],
    "color": "#6b7280",
    "operatedSince": "历史记录",
    "entryPriceMonth": 15,
    "entryPriceNote": "季付 45 元（约 15 元/月，100GB/月）",
    "lineType": "中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.totoroaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "支持常见流媒体"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "龙猫基础",
        "billing": "季付",
        "price": "¥45",
        "traffic": "100GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "价格平稳"
    ],
    "cons": [
      "缺乏近 30 日测速报告"
    ],
    "bestFor": [
      "轻度日常使用"
    ],
    "notFor": [
      "要求万兆极速带宽的用户"
    ],
    "riskWarning": "资料为历史存档，购买前请在官网二次核对。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 34,
    "slug": "fatcat",
    "name": "FATCAT 肥猫",
    "enName": "FATCAT Cloud",
    "aliases": [
      "FATCAT",
      "肥猫",
      "fatcat"
    ],
    "color": "#f59e0b",
    "operatedSince": "历史记录",
    "entryPriceMonth": 20,
    "entryPriceNote": "月付 20 元，120GB/月；年付加强版 96 元（约 8 元/月，60GB/月）",
    "lineType": "企业级 IEPL / IPLC 内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.fatcataff.com",
    "coupon": "无",
    "couponDiscount": "年付8折 / 3年6折",
    "aiUnlock": {
      "status": "untested",
      "note": "历史资料未逐项测试"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "品牌资料宣称支持"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "period": "每月重置"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "IEPL/IPLC 内网专线定位",
      "支持微信/支付宝/USDT"
    ],
    "cons": [
      "历史记录未提供独立品牌专属入口",
      "与飞猫云属不同独立条目"
    ],
    "bestFor": [
      "多周期折扣选择"
    ],
    "notFor": [
      "需要免费试用的用户"
    ],
    "riskWarning": "独立品牌入口未持续维护，购买请注意域名安全性。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 35,
    "slug": "tntcloud",
    "name": "TNTCloud",
    "enName": "TNTCloud",
    "aliases": [
      "TNTCloud",
      "tntcloud"
    ],
    "color": "#dc2626",
    "operatedSince": "历史记录",
    "entryPriceMonth": 20,
    "entryPriceNote": "季付 60 元（约 20 元/月，150GB/月）",
    "lineType": "专线与高防中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.tntcloudaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "支持常见流媒体"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "TNT 基础",
        "billing": "季付",
        "price": "¥60",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "专线抗封锁定位"
    ],
    "cons": [
      "无实时测速截图"
    ],
    "bestFor": [
      "海外轻度冲浪"
    ],
    "notFor": [
      "要求极速专线的专业开发"
    ],
    "riskWarning": "历史资料记录，请以官网最新条款为准。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 36,
    "slug": "qingyunti",
    "name": "青云梯",
    "enName": "Qingyun Ladder",
    "aliases": [
      "青云梯",
      "qingyunti"
    ],
    "color": "#059669",
    "operatedSince": "历史记录",
    "entryPriceMonth": 18,
    "entryPriceNote": "月付 18 元，120GB/月",
    "lineType": "BGP 中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.qingyuntiaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "青云月享",
        "billing": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "资费亲民"
    ],
    "cons": [
      "缺乏最新独立测试"
    ],
    "bestFor": [
      "预算 20 元以内的用户"
    ],
    "notFor": [
      "多节点全球分布测试"
    ],
    "riskWarning": "历史记录，谨慎购买长期套餐。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 37,
    "slug": "shanshuiyun",
    "name": "山水云",
    "enName": "Shanshui Cloud",
    "aliases": [
      "山水云",
      "shanshuiyun"
    ],
    "color": "#0d9488",
    "operatedSince": "历史记录",
    "entryPriceMonth": 16,
    "entryPriceNote": "季付 48 元（约 16 元/月，100GB/月）",
    "lineType": "隧道优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.shanshuiyunaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "山水基础",
        "billing": "季付",
        "price": "¥48",
        "traffic": "100GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "单月折算价格低"
    ],
    "cons": [
      "无直接单月付款"
    ],
    "bestFor": [
      "轻度网页浏览"
    ],
    "notFor": [
      "高频大带宽下载"
    ],
    "riskWarning": "历史资料，请复核官网实际计费。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 38,
    "slug": "lingdongyun",
    "name": "灵动云",
    "enName": "Lingdong Cloud",
    "aliases": [
      "灵动云",
      "lingdongyun"
    ],
    "color": "#7c3aed",
    "operatedSince": "历史记录",
    "entryPriceMonth": 22,
    "entryPriceNote": "月付 22 元，160GB/月",
    "lineType": "高速中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.lingdongyunaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体支持"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "灵动畅行",
        "billing": "月付",
        "price": "¥22",
        "traffic": "160GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "流量充足"
    ],
    "cons": [
      "测速数据未在本次批次中独立提供"
    ],
    "bestFor": [
      "日常视频浏览"
    ],
    "notFor": [
      "专线极速低延迟要求"
    ],
    "riskWarning": "历史记录，以官网为准。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 39,
    "slug": "langwang",
    "name": "浪网",
    "enName": "Langwang",
    "aliases": [
      "浪网",
      "langwang"
    ],
    "color": "#2563eb",
    "operatedSince": "历史记录",
    "entryPriceMonth": 18,
    "entryPriceNote": "季付 54 元（约 18 元/月，130GB/月）",
    "lineType": "中转专线混合",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.langwangaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础视频可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "浪网标配",
        "billing": "季付",
        "price": "¥54",
        "traffic": "130GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "价格平稳"
    ],
    "cons": [
      "无月付选项"
    ],
    "bestFor": [
      "作为二级备用线路"
    ],
    "notFor": [
      "追求顶级专线保障的用户"
    ],
    "riskWarning": "历史资料，请复核官网实际计费。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 40,
    "slug": "edgenova",
    "name": "EdgeNova",
    "enName": "EdgeNova",
    "aliases": [
      "EdgeNova",
      "edgenova"
    ],
    "color": "#4f46e5",
    "operatedSince": "历史记录",
    "entryPriceMonth": 28,
    "entryPriceNote": "月付 28 元，200GB/月",
    "lineType": "边缘计算加速专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clients": [
      "Clash",
      "Shadowrocket",
      "Surge"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲多国"
    ],
    "affLink": "https://guangs.edgenovaaff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "支持常见流媒体"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "Edge 基础",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "节点覆盖广泛",
      "流量相对充足"
    ],
    "cons": [
      "月费门槛较高",
      "无本次独立测速图"
    ],
    "bestFor": [
      "需要多个海外边缘节点"
    ],
    "notFor": [
      "追求极低价格的小白"
    ],
    "riskWarning": "历史记录，以官网为准。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  },
  {
    "id": 41,
    "slug": "sslar",
    "name": "sslar",
    "enName": "sslar",
    "aliases": [
      "sslar"
    ],
    "color": "#0284c7",
    "operatedSince": "历史记录",
    "entryPriceMonth": 22,
    "entryPriceNote": "季付 66 元（约 22 元/月，150GB/月）",
    "lineType": "Shadowsocks 专线优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash",
      "Shadowrocket"
    ],
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "affLink": "https://guangs.sslaraff.com",
    "coupon": "待核实",
    "couponDiscount": "官网活动",
    "aiUnlock": {
      "status": "untested",
      "note": "暂无独立实测"
    },
    "streamingUnlock": {
      "status": "partial",
      "note": "基础流媒体可用"
    },
    "speedtest": {
      "hasScreenshot": false,
      "dataStatus": "historical"
    },
    "plans": [
      {
        "name": "sslar 体验",
        "billing": "季付",
        "price": "¥66",
        "traffic": "150GB/月",
        "period": "每月重置"
      }
    ],
    "pros": [
      "老牌 SS 协议支持"
    ],
    "cons": [
      "协议相对传统",
      "无月付"
    ],
    "bestFor": [
      "轻量浏览"
    ],
    "notFor": [
      "对现代抗封锁协议有高要求的用户"
    ],
    "riskWarning": "历史资料，请核对官网运营状态。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16",
    "isFeatured": false,
    "isPrimaryPush": false
  }
];
export default brands;
