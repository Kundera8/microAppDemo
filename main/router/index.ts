const routes = [
  {
    path: '/',
    name: '首页',
    icon: 'dashboard',
    component: '@/pages/home/index'
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
