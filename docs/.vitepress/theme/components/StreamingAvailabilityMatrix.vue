<template>
  <div class="tz-observatory-panel">
    <div class="tz-observatory-header">
      <div class="tz-observatory-title">
        <span class="tz-pulse-dot" style="background: #34d399;"></span>
        <span>SERVICE AVAILABILITY MATRIX // AI 与流媒体解锁矩阵</span>
      </div>
      <div class="tz-status-badge tz-status-measured">
        <span>● REGION-RESTRICTION AUDIT</span>
      </div>
    </div>

    <!-- AI Services Group -->
    <div style="margin-bottom: 1.25rem;">
      <div style="font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🤖 AI 生产力服务解锁能力</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
        <div v-for="item in aiList" :key="item.name" style="background: #111827; border: 1px solid #1f2937; border-radius: 6px; padding: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <strong style="color: #f3f4f6; font-size: 0.9rem;">{{ item.name }}</strong>
            <span :style="{ color: getStatusColor(item.status), fontSize: '0.75rem', fontWeight: 'bold' }">
              {{ getStatusText(item.status) }}
            </span>
          </div>
          <div style="font-size: 0.75rem; color: #9ca3af;">{{ item.note }}</div>
        </div>
      </div>
    </div>

    <!-- Streaming Services Group -->
    <div style="margin-bottom: 1.25rem;">
      <div style="font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🎬 海外主流流媒体平台解锁能力</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
        <div v-for="item in streamList" :key="item.name" style="background: #111827; border: 1px solid #1f2937; border-radius: 6px; padding: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <strong style="color: #f3f4f6; font-size: 0.9rem;">{{ item.name }}</strong>
            <span :style="{ color: getStatusColor(item.status), fontSize: '0.75rem', fontWeight: 'bold' }">
              {{ getStatusText(item.status) }}
            </span>
          </div>
          <div style="font-size: 0.75rem; color: #9ca3af;">{{ item.note }}</div>
        </div>
      </div>
    </div>

    <!-- Unlock test photo evidence if passed -->
    <div v-if="photoEvidence" style="border-top: 1px dashed #1e293b; padding-top: 1rem; margin-top: 1rem;">
      <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
        <span>📷 解锁测试日志证据照 ({{ photoEvidence }})</span>
        <a :href="'/images/unlock/' + photoEvidence" target="_blank" style="color: #38bdf8; text-decoration: underline;">查看原始证据大图 ↗</a>
      </div>
      <div style="max-height: 220px; overflow: hidden; border-radius: 6px; border: 1px solid #1e293b;">
        <img :src="'/images/unlock/' + photoEvidence" alt="流媒体与AI解锁实测证据" style="width: 100%; object-fit: cover;" />
      </div>
    </div>

    <!-- Note -->
    <div style="font-size: 0.75rem; color: #64748b; line-height: 1.4; border-top: 1px solid #1e293b; padding-top: 0.75rem; margin-top: 1rem;">
      * 说明：流媒体及 AI 服务商对 IP 地址段的风控规则动态调整，若遇访问受限，请在客户端切换到标有【专线】或【原生IP】的落地节点。
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  photoEvidence: { type: String, default: '' },
  aiList: {
    type: Array,
    default: () => [
      { name: 'ChatGPT / OpenAI', status: 'partial', note: '香港/新加坡/美国节点支持良好，需避免敏感机房IP' },
      { name: 'Claude (Anthropic)', status: 'full', note: '专线原生节点解锁，无需复杂二次降级' },
      { name: 'Google Gemini', status: 'partial', note: '视特定地区节点路由而定，建议连接美区/日区' }
    ]
  },
  streamList: {
    type: Array,
    default: () => [
      { name: 'Netflix (网飞)', status: 'full', note: '全区非自制剧完整解锁，4K 高清播放' },
      { name: 'Disney+ (迪士尼)', status: 'full', note: '支持港/日/美区完整内容库' },
      { name: 'YouTube Premium', status: 'full', note: '支持 4K 60fps / 8K HDR 免缓冲' },
      { name: 'HBO Max', status: 'full', note: '美区原创内容完整解锁' },
      { name: 'TikTok (国际版抖音)', status: 'full', note: '原生住宅/机房 IP 解锁，支持账号登录' },
      { name: 'Spotify', status: 'full', note: '跨区账号登录与音频全开' }
    ]
  }
});

function getStatusColor(status) {
  if (status === 'full') return '#34d399'; // green
  if (status === 'partial') return '#fbbf24'; // yellow
  if (status === 'vendor') return '#60a5fa'; // blue
  return '#94a3b8'; // grey
}

function getStatusText(status) {
  if (status === 'full') return '● 独立实测支持';
  if (status === 'partial') return '▲ 视节点而定';
  if (status === 'vendor') return '◆ 品牌官方宣称';
  return '○ 暂无实测';
}
</script>
