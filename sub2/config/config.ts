import { defineConfig } from 'umi';
import routes from '../src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {}
  },
  routes,
});
