const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    icon: 'dashboard',
    component: '@/pages/home/index'
  },
  {
    path: '/sub1',
    name: 'SUB-APP1',
    icon: 'dashboard',
    microApp: 'sub1',
  },
  {
    path: '/sub2',
    name: 'SUB-APP2',
    icon: 'dashboard',
    routes: [
      {
        path: 'basics',
        name: '基础数据',
        icon: 'dashboard',
        microApp: 'sub2',
      },
      {
        path: 'drive',
        name: '行驶数据',
        icon: 'dashboard',
        microApp: 'sub2',
      },
      {
        path: 'analyze',
        name: '驾驶分析',
        icon: 'dashboard',
        routes: [
          {
            path: 'charts',
            name: '图表展示',
            icon: 'dashboard',
            microApp: 'sub2',
          },
          {
            path: 'data',
            name: '数据展示',
            icon: 'dashboard',
            microApp: 'sub2',
          },
        ]
      },
    ],
  },
  {
    path: '/sub3',
    name: 'SUB-APP3',
    icon: 'dashboard',
    routes: [
      {
        path: 'home',
        name: 'vue home',
        icon: 'dashboard',
        microApp: 'sub3',
      },
      {
        path: 'system',
        name: 'vue system',
        icon: 'dashboard',
        microApp: 'sub3',
      },
    ],
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'dashboard',
    routes: [
      {
        path: 'user',
        name: '用户管理',
        icon: 'dashboard',
        component: '@/pages/system/user/index',
      },
      {
        path: 'role',
        name: '角色管理',
        icon: 'dashboard',
        component: '@/pages/system/role/index',
      },
      {
        path: 'setting',
        name: '系统设置',
        icon: 'dashboard',
        component: '@/pages/system/setting/index',
      },
    ],
  },
];

export default routes;
