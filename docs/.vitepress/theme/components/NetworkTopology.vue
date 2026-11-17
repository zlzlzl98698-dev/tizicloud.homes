<template>
  <div class="tz-observatory-panel">
    <div class="tz-observatory-header">
      <div class="tz-observatory-title">
        <span class="tz-pulse-dot" style="background: #38bdf8;"></span>
        <span>NETWORK PATH OBSERVATORY // 跨境专线传输拓扑</span>
      </div>
      <div class="tz-status-badge tz-status-vendor">
        <span>● INFRASTRUCTURE TOPOLOGY</span>
      </div>
    </div>

    <!-- Interactive Topology Nodes -->
    <div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 1.5rem 0;">
      <!-- Step 1: Client -->
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <div style="width: 140px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 0.5rem 0.75rem; text-align: center;">
          <div style="font-size: 0.75rem; color: #94a3b8;">本地终端</div>
          <strong style="color: #f8fafc; font-size: 0.85rem;">{{ clientInfo || 'PC / 手机 / 软路由' }}</strong>
        </div>
        <div style="flex: 1; min-width: 120px; display: flex; align-items: center; justify-content: center; position: relative;">
          <div style="height: 2px; width: 100%; background: #334155;"></div>
          <span style="position: absolute; background: #090e1a; padding: 0 0.5rem; font-size: 0.7rem; color: #38bdf8; border: 1px solid #1e293b; border-radius: 4px;">
            {{ protocol || 'VLESS-XTLS / Shadowsocks' }} (加密)
          </span>
        </div>
        <div style="width: 150px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 0.5rem 0.75rem; text-align: center;">
          <div style="font-size: 0.75rem; color: #94a3b8;">境内入口</div>
          <strong style="color: #38bdf8; font-size: 0.85rem;">{{ transitEntry || '上海/广州多线 BGP' }}</strong>
        </div>
      </div>

      <!-- Step 2: Dedicated Cross-border Transit -->
      <div style="padding-left: 140px; padding-right: 150px; margin: 0.25rem 0;">
        <div style="background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 6px; padding: 0.65rem 1rem; text-align: center;">
          <div style="color: #60a5fa; font-size: 0.85rem; font-weight: 700; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            <span>⚡ {{ dedicatedLine || '企业级 IEPL / 全球 IPLC 专线直连' }}</span>
          </div>
          <div style="font-size: 0.7rem; color: #94a3b8; margin-top: 0.25rem;">
            内网专线穿透跨境海缆，全程物理/二层隔离，不走公网 GFW 审查节点，无特征重置风险
          </div>
        </div>
      </div>

      <!-- Step 3: Landing & Target Services -->
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <div style="width: 150px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 0.5rem 0.75rem; text-align: center;">
          <div style="font-size: 0.75rem; color: #94a3b8;">海外落地机房</div>
          <strong style="color: #34d399; font-size: 0.85rem;">{{ landingRegion || '香港/东京/新加坡/美西' }}</strong>
        </div>
        <div style="flex: 1; min-width: 120px; display: flex; align-items: center; justify-content: center; position: relative;">
          <div style="height: 2px; width: 100%; background: #334155;"></div>
          <span style="position: absolute; background: #090e1a; padding: 0 0.5rem; font-size: 0.7rem; color: #34d399; border: 1px solid #1e293b; border-radius: 4px;">
            原生广播 / 住宅 IP 直连
          </span>
        </div>
        <div style="width: 160px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 0.5rem 0.75rem; text-align: center;">
          <div style="font-size: 0.75rem; color: #94a3b8;">目标服务平台</div>
          <strong style="color: #f8fafc; font-size: 0.85rem;">OpenAI / Netflix / Google</strong>
        </div>
      </div>
    </div>

    <!-- Notice -->
    <div style="font-size: 0.75rem; color: #64748b; line-height: 1.4; border-top: 1px solid #1e293b; padding-top: 0.75rem;">
      * 架构提示：本拓扑基于品牌官方技术资料与业界通用专线架构绘制，用于说明流量走向逻辑（概念示意图，非逐个网络跳步物理探测）。
    </div>
  </div>
</template>

<script setup>
defineProps({
  clientInfo: { type: String, default: 'PC / 手机 / 软路由' },
  protocol: { type: String, default: 'VLESS (XTLS) / Shadowsocks' },
  transitEntry: { type: String, default: '上海/广州多线 BGP' },
  dedicatedLine: { type: String, default: '企业级 IEPL / 全球 IPLC 专线直连' },
  landingRegion: { type: String, default: '香港/东京/新加坡/美西' }
});
</script>
