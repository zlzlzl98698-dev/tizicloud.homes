<template>
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <h3 style="margin: 0; font-size: 1.15rem; color: #0f172a; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
        <span :style="{ background: brand.color || '#2563eb', width: '12px', height: '12px', borderRadius: '3px', display: 'inline-block' }"></span>
        {{ brand.name }} 基础设施参数快照
      </h3>
      <span style="font-size: 0.8rem; background: #eff6ff; color: #1d4ed8; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 600;">
        运营年限：{{ brand.operatedSince }}
      </span>
    </div>

    <!-- 2-column key specifications -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; font-size: 0.9rem;">
      <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.25rem;">线路架构</div>
        <strong style="color: #0f172a;">{{ brand.lineType }}</strong>
      </div>

      <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.25rem;">支持传输协议</div>
        <strong style="color: #0f172a;">{{ brand.protocols ? brand.protocols.join(', ') : 'VLESS / Shadowsocks' }}</strong>
      </div>

      <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.25rem;">入门门槛价格</div>
        <strong style="color: #16a34a;">约 ¥{{ brand.entryPriceMonth }} / 月</strong>
        <span style="color: #64748b; font-size: 0.75rem; display: block; margin-top: 0.2rem;">{{ brand.entryPriceNote }}</span>
      </div>

      <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.25rem;">客户端生态兼容</div>
        <div style="color: #0f172a; font-size: 0.85rem;">{{ brand.clients ? brand.clients.join(' / ') : '全平台通用' }}</div>
      </div>
    </div>

    <!-- Node coverage badges -->
    <div v-if="brand.nodeRegions && brand.nodeRegions.length" style="margin-top: 1rem;">
      <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.4rem;">节点覆盖枢纽：</div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        <span v-for="r in brand.nodeRegions" :key="r" style="background: #f1f5f9; color: #334155; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid #e2e8f0;">
          {{ r }}
        </span>
      </div>
    </div>

    <!-- Verification footer -->
    <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed #e2e8f0; display: flex; justify-content: space-between; font-size: 0.75rem; color: #94a3b8; flex-wrap: wrap;">
      <span>数据状态：{{ brand.dataStatus === 'measured' ? '独立实测验证' : '品牌资料核验' }}</span>
      <span>最后核验更新：{{ brand.updatedAt || '2026-11-16' }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brand: {
    type: Object,
    required: true
  }
});
</script>
