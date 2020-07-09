module.exports = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/gtmversionchecker',
    name: 'GtmVersionChecker',
    component: () =>
      import(/* webpackChunkName: "GtmVersionChecker" */ '../views/Gtmversionchecker.vue'),
  },
  {
    path: '/gtmversionchecker2',
    name: 'GtmVersionChecker2',
    component: () =>
      import(/* webpackChunkName: "GtmVersionChecker2" */ '../views/Gtmversionchecker copy.vue'),
  },
  {
    path: '/markdown',
    name: 'markdownv',
    component: () =>
      import(/* webpackChunkName: "markdown" */ '@/assets/Atricles/GtmVersionChecker.md'),
  },
  {
    path: '/julegaver',
    name: 'julegaver',
    component: () => import(/* webpackChunkName: "julegaver" */ '@/views/Julegaver.vue'),
  },
];
