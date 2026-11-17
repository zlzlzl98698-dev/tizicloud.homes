<template>
  <div class="tz-observatory-panel">
    <div class="tz-observatory-header">
      <div class="tz-observatory-title">
        <span class="tz-pulse-dot"></span>
        <span>NETWORK PERFORMANCE REPORT // 节点性能测速报告</span>
      </div>
      <div :class="['tz-status-badge', statusClass]">
        <span>● {{ statusLabel }}</span>
      </div>
    </div>

    <!-- Metadata Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; background: rgba(30, 41, 59, 0.4); padding: 0.85rem; border-radius: 6px; margin-bottom: 1.25rem; font-size: 0.8rem; border: 1px solid #1e293b;">
      <div><span style="color: #64748b;">测试对象：</span><strong style="color: #f8fafc;">{{ brandName }}</strong></div>
      <div><span style="color: #64748b;">测试时间：</span><strong style="color: #38bdf8;">{{ testedAt || '2026-08-11 CST' }}</strong></div>
      <div><span style="color: #64748b;">测试环境：</span><span style="color: #cbd5e1;">{{ tool || 'MAI-TEST-BOT 2.0.0-dev / 5Gbps' }}</span></div>
      <div><span style="color: #64748b;">协议类型：</span><span style="color: #34d399;">{{ protocol || 'VLESS / Shadowsocks' }}</span></div>
    </div>

    <!-- Latency & Throughput Rows -->
    <div v-if="metrics && metrics.length" style="margin-bottom: 1.25rem;">
      <div v-for="(m, idx) in metrics" :key="idx" class="tz-metric-row">
        <span style="width: 100px; color: #94a3b8; font-weight: 600;">{{ m.region }}</span>
        <span style="width: 75px; color: #38bdf8;">{{ m.delay }}</span>
        <div class="tz-metric-bar-bg">
          <div class="tz-metric-bar-fill" :style="{ width: m.barPercent || '75%' }"></div>
        </div>
        <span style="width: 90px; text-align: right; color: #34d399; font-weight: 700;">{{ m.speed }}</span>
      </div>
    </div>

    <!-- Speedtest Screenshot preview if available -->
    <div v-if="imageFile" style="margin-top: 1rem; border-top: 1px dashed #1e293b; padding-top: 1rem;">
      <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
        <span>📷 保留测速截图凭证 ({{ imageFile }})</span>
        <a :href="'/images/speedtest/' + imageFile" target="_blank" style="color: #38bdf8; text-decoration: underline;">查看原始高清大图 ↗</a>
      </div>
      <div style="max-height: 260px; overflow: hidden; border-radius: 6px; border: 1px solid #1e293b; position: relative;">
        <img :src="'/images/speedtest/' + imageFile" :alt="brandName + ' 节点测速实测截图'" style="width: 100%; object-fit: cover; object-position: top;" />
      </div>
    </div>

    <!-- Limitations statement -->
    <div style="margin-top: 1rem; font-size: 0.75rem; color: #64748b; line-height: 1.4; border-top: 1px solid #1e293b; padding-top: 0.75rem;">
      ⚠️ 数据声明：本图表基于特定时间节点实测记录，仅反映当次网络环境与测试线路表现，受本地宽带、运营商路由及晚高峰波动影响，不代表长期固定表现或全时段极速保证。
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  brandName: { type: String, default: '测试机场' },
  testedAt: { type: String, default: '2026-08-11 14:32:56 CST' },
  tool: { type: String, default: 'MAI-TEST-BOT 2.0.0-dev' },
  protocol: { type: String, default: 'Shadowsocks / VLESS' },
  dataStatus: { type: String, default: 'measured' }, // measured, vendor, historical
  imageFile: { type: String, default: '' },
  metrics: {
    type: Array,
    default: () => [
      { region: '香港专线', delay: '22ms', speed: '529 Mbps', barPercent: '95%' },
      { region: '新加坡专线', delay: '46ms', speed: '387 Mbps', barPercent: '78%' },
      { region: '日本东京', delay: '57ms', speed: '135 Mbps', barPercent: '60%' },
      { region: '美国洛杉矶', delay: '143ms', speed: '18 Mbps', barPercent: '25%' }
    ]
  }
});

const statusLabel = computed(() => {
  if (props.dataStatus === 'measured') return 'MEASURED // 独立实测证据归档';
  if (props.dataStatus === 'vendor') return 'VENDOR CLAIM // 官方声明与技术参数';
  return 'HISTORICAL // 历史存档数据复核';
});

const statusClass = computed(() => {
  if (props.dataStatus === 'measured') return 'tz-status-measured';
  if (props.dataStatus === 'vendor') return 'tz-status-vendor';
  return 'tz-status-historical';
});
</script>
