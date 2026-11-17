<template>
  <div style="margin: 2rem 0;">
    <!-- Search & Filter Controls -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; margin-bottom: 2rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
        <!-- Search Box -->
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #475569; margin-bottom: 0.35rem;">品牌搜索</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索品牌名称、线路或特征..."
            style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; background: #ffffff; color: #0f172a;"
          />
        </div>

        <!-- Line Type Filter -->
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #475569; margin-bottom: 0.35rem;">线路类型</label>
          <select
            v-model="selectedLine"
            style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; background: #ffffff; color: #0f172a;"
          >
            <option value="all">全部线路类型</option>
            <option value="IEPL">IEPL 内网专线</option>
            <option value="IPLC">IPLC 国际专线</option>
            <option value="BGP">BGP / 隧道优化</option>
          </select>
        </div>

        <!-- Price Range Filter -->
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #475569; margin-bottom: 0.35rem;">起步价格范围</label>
          <select
            v-model="selectedPrice"
            style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; background: #ffffff; color: #0f172a;"
          >
            <option value="all">全部价格区间</option>
            <option value="under10">10 元以下 / 月（平价首选）</option>
            <option value="10to20">10 - 20 元 / 月（主流性价比）</option>
            <option value="above20">20 元以上 / 月（高品质专线）</option>
          </select>
        </div>

        <!-- Data Status Filter -->
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #475569; margin-bottom: 0.35rem;">数据核验状态</label>
          <select
            v-model="selectedStatus"
            style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; background: #ffffff; color: #0f172a;"
          >
            <option value="all">全部核验状态</option>
            <option value="measured">具备独立测速证据 (Measured)</option>
            <option value="vendor">品牌资料核实 (Vendor)</option>
          </select>
        </div>
      </div>

      <!-- Result Counter -->
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 0.75rem;">
        <span>共检索到 <strong style="color: #1d4ed8;">{{ filteredBrands.length }}</strong> 家独立机场服务商</span>
        <button
          @click="resetFilters"
          style="background: transparent; border: none; color: #3b82f6; font-size: 0.85rem; cursor: pointer; text-decoration: underline;"
        >
          重置筛选条件
        </button>
      </div>
    </div>

    <!-- Brand Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
      <div
        v-for="b in filteredBrands"
        :key="b.id"
        style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s; position: relative;"
      >
        <!-- Featured Badge -->
        <div v-if="b.isPrimaryPush" style="position: absolute; top: -10px; right: 12px; background: #2563eb; color: #ffffff; font-size: 0.7rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; box-shadow: 0 2px 6px rgba(37,99,235,0.3);">
          第一主推推荐
        </div>
        <div v-else-if="b.isFeatured" style="position: absolute; top: -10px; right: 12px; background: #059669; color: #ffffff; font-size: 0.7rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">
          重点推荐
        </div>

        <div>
          <!-- Header -->
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div
              :style="{ background: b.color || '#2563eb', color: '#ffffff', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }"
            >
              {{ b.name.slice(0, 1) }}
            </div>
            <div>
              <h4 style="margin: 0; font-size: 1.1rem; color: #0f172a;">{{ b.name }}</h4>
              <span style="font-size: 0.75rem; color: #64748b;">{{ b.enName }} · 运营自 {{ b.operatedSince }}</span>
            </div>
          </div>

          <!-- Specs row -->
          <div style="background: #f8fafc; padding: 0.65rem 0.85rem; border-radius: 6px; font-size: 0.85rem; margin-bottom: 0.85rem; border: 1px solid #f1f5f9;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
              <span style="color: #64748b;">入门价格：</span>
              <strong style="color: #16a34a;">约 ¥{{ b.entryPriceMonth }} / 月</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
              <span style="color: #64748b;">线路类型：</span>
              <span style="color: #1e293b; font-weight: 600;">{{ b.lineType }}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #64748b;">实测证据：</span>
              <span :style="{ color: b.speedtest.hasScreenshot ? '#059669' : '#d97706', fontWeight: '600', fontSize: '0.75rem' }">
                {{ b.speedtest.hasScreenshot ? '✓ 具备测速大图' : '○ 品牌资料核验' }}
              </span>
            </div>
          </div>

          <!-- Highlights -->
          <div style="font-size: 0.8rem; color: #475569; margin-bottom: 1rem; line-height: 1.5;">
            {{ b.pros ? b.pros[0] : '稳定专线接入，全平台客户端支持。' }}
          </div>
        </div>

        <!-- Actions -->
        <div style="border-top: 1px solid #f1f5f9; padding-top: 0.85rem; display: flex; gap: 0.5rem;">
          <a
            :href="'/brands/' + b.slug + '/'"
            style="flex: 1; text-align: center; background: #f1f5f9; color: #0f172a; padding: 0.45rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; text-decoration: none; border: 1px solid #e2e8f0;"
          >
            深度评测
          </a>
          <a
            :href="b.affLink"
            target="_blank"
            rel="nofollow sponsored noopener"
            style="flex: 1; text-align: center; background: #2563eb; color: #ffffff; padding: 0.45rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; text-decoration: none;"
          >
            官网直达 ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import brandsData from '../../../../data/brands.json';

const searchQuery = ref('');
const selectedLine = ref('all');
const selectedPrice = ref('all');
const selectedStatus = ref('all');

const filteredBrands = computed(() => {
  return brandsData.filter(b => {
    // Search keyword
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      const matchName = b.name.toLowerCase().includes(q);
      const matchEn = b.enName.toLowerCase().includes(q);
      const matchLine = b.lineType.toLowerCase().includes(q);
      if (!matchName && !matchEn && !matchLine) return false;
    }

    // Line filter
    if (selectedLine.value !== 'all') {
      if (!b.lineType.includes(selectedLine.value)) return false;
    }

    // Price filter
    if (selectedPrice.value === 'under10' && b.entryPriceMonth >= 10) return false;
    if (selectedPrice.value === '10to20' && (b.entryPriceMonth < 10 || b.entryPriceMonth > 20)) return false;
    if (selectedPrice.value === 'above20' && b.entryPriceMonth <= 20) return false;

    // Status filter
    if (selectedStatus.value === 'measured' && !b.speedtest.hasScreenshot) return false;
    if (selectedStatus.value === 'vendor' && b.dataStatus !== 'vendor') return false;

    return true;
  });
});

function resetFilters() {
  searchQuery.value = '';
  selectedLine.value = 'all';
  selectedPrice.value = 'all';
  selectedStatus.value = 'all';
}
</script>
