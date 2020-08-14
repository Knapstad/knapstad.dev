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
    path: '/addingarecordsonnetlify',
    name: 'Adding A and AAA record on netlify',
    component: () =>
      import(
        /* webpackChunkName: "Adding A and AAA record on netlify" */ '../views/AddingARecordsOnNetlify.vue'
      ),
  },
  {
    path: '/julegaver',
    name: 'julegaver',
    component: () => import(/* webpackChunkName: "julegaver" */ '@/views/Julegaver.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue'),
  },
  {
    path: '/dagerigjentiljul',
    name: 'dagerigjentiljul',
    component: () =>
      import(/* webpackChunkName: "dagerigjentiljul" */ '@/views/DagerIgjenTilJul.vue'),
  },
  {
    path: '/ukerigjentiljul',
    name: 'ukerigjentiljul',
    component: () =>
      import(/* webpackChunkName: "ukerigjentiljul" */ '@/views/UkerIgjenTilJul.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/Articles.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  },
];
