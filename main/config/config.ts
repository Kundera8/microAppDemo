import { defineConfig } from 'umi';
import routes from '../src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '微前端-DEMO',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub1',
          entry: '//localhost:8001',
          props: {
            key: 'xyz111'
          },
        },
        {
          name: 'sub2',
          entry: '//localhost:8002',
          props: {
            key: 'xyz22'
          },
        },
        {
          name: 'sub3',
          entry: '//localhost:8081',
          props: {
            key: 'xyz333'
          },
        },
      ],
      jsSandbox: true
    },
  },
  routes,
});
