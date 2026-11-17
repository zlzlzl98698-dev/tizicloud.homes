import DefaultTheme from 'vitepress/theme';
import './custom.css';

import NetworkPerformanceReport from './components/NetworkPerformanceReport.vue';
import StreamingAvailabilityMatrix from './components/StreamingAvailabilityMatrix.vue';
import NetworkTopology from './components/NetworkTopology.vue';
import BrandInfrastructureSnapshot from './components/BrandInfrastructureSnapshot.vue';
import BrandDatabase from './components/BrandDatabase.vue';
import BrandAffiliateCard from './components/BrandAffiliateCard.vue';
import BrandPlanTable from './components/BrandPlanTable.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NetworkPerformanceReport', NetworkPerformanceReport);
    app.component('StreamingAvailabilityMatrix', StreamingAvailabilityMatrix);
    app.component('NetworkTopology', NetworkTopology);
    app.component('BrandInfrastructureSnapshot', BrandInfrastructureSnapshot);
    app.component('BrandDatabase', BrandDatabase);
    app.component('BrandAffiliateCard', BrandAffiliateCard);
    app.component('BrandPlanTable', BrandPlanTable);
  }
};
