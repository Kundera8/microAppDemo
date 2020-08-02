const routes = [
  {
    path: '/',
    redirect: '/basics'
  },
  {
    path: '/basics',
    name: '基础数据',
    icon: 'dashboard',
    component: '@/pages/monitor/basics/index',
  },
  {
    path: '/drive',
    name: '行驶数据',
    icon: 'dashboard',
    component: '@/pages/monitor/drive/index',
  },
  {
    path: '/analyze',
    name: '驾驶分析',
    icon: 'dashboard',
    routes: [
      {
        path: 'charts',
        name: '图表展示',
        icon: 'dashboard',
        component: '@/pages/monitor/analyze/charts/index',
      },
      {
        path: 'data',
        name: '数据展示',
        icon: 'dashboard',
        component: '@/pages/monitor/analyze/data/index',
      },
    ]
  },
];

export default routes;
