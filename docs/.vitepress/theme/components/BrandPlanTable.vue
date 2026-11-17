<template>
  <div class="tz-table-wrap">
    <table class="tz-data-table">
      <thead>
        <tr>
          <th>套餐名称</th>
          <th>计费周期</th>
          <th>价格</th>
          <th>流量额度</th>
          <th>重置方式</th>
          <th>技术规格与特别说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, idx) in plans" :key="idx">
          <td><strong style="color: #0f172a;">{{ p.name }}</strong></td>
          <td><span style="background: #f1f5f9; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">{{ p.billing }}</span></td>
          <td><strong style="color: #16a34a; font-size: 1rem;">{{ p.price }}</strong></td>
          <td><span style="font-weight: 600; color: #2563eb;">{{ p.traffic }}</span></td>
          <td><span style="color: #64748b; font-size: 0.85rem;">{{ p.period }}</span></td>
          <td style="font-size: 0.85rem; color: #475569;">{{ p.note || '标配专线与高可用架构' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  plans: {
    type: Array,
    required: true
  }
});
</script>
