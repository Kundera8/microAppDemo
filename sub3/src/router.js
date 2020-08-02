import Vue from 'vue';
import Router from 'vue-router';
const packageName = require('../package.json').name;

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/home'),
  },
  {
    path: '/system',
    component: () => import('@/pages/system'),
  },
];

const router = new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? `/${packageName}` : '/',
  routes
});

export default router;