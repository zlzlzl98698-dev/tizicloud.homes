<template>
  <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); border: 1px solid #bfdbfe; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.08);">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="background: #2563eb; color: #ffffff; font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px;">
            官方授权通道
          </span>
          <span v-if="brand.coupon" style="background: #fef3c7; color: #92400e; font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid #fde68a;">
            专属优惠码：<code style="color: #b45309; font-weight: bold;">{{ brand.coupon }}</code>
          </span>
        </div>
        <h4 style="margin: 0 0 0.5rem; font-size: 1.35rem; color: #0f172a;">{{ brand.name }} 官方直达与注册通道</h4>
        <p style="margin: 0; font-size: 0.9rem; color: #475569; max-width: 650px; line-height: 1.5;">
          {{ brand.pros ? brand.pros[0] : '全专线高速保障，支持多平台一键连接与流媒体解锁。' }}
        </p>
      </div>

      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
        <a
          :href="brand.affLink"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="tz-btn-primary"
          style="font-size: 1rem; padding: 0.85rem 2rem; white-space: nowrap;"
        >
          前往 {{ brand.name }} 官网注册 ↗
        </a>
        <span style="font-size: 0.75rem; color: #64748b;">支持支付宝 / 微信 / USDT 结算</span>
      </div>
    </div>

    <!-- Disclosure note -->
    <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid rgba(191, 219, 254, 0.6); font-size: 0.75rem; color: #64748b; line-height: 1.4;">
      ℹ️ <strong>商业推广与合作披露</strong>：通过本站链接注册可能为梯子云带来服务器维护佣金支持，但绝不影响您的最终支付价格。本站实测数据与评测优缺点始终保持独立客观，建议您优先按需月付，测试满意后再行长期续订。
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
