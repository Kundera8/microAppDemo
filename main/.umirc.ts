import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  qiankun: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
