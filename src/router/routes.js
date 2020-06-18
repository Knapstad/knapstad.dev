module.exports = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/gtmversionchecker',
    name: 'GtmVersionChecker',
    component: () => import(/* webpackChunkName: "GtmVersionChecker" */ '../views/Gtmversionchecker.vue'),
  },
];