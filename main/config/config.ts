import { defineConfig } from 'umi';
import routes from '../router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  qiankun: {},
  routes,
});
