const articles = require('../assets/Atricles/articles.json');

const gtm = articles.map(child => ({
  path: `/articles/${child.path}`,
  name: child.path,
  component: () => import(`@/assets/Atricles/${child.path}.md`),
}));

module.exports = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/gtmversionchecker',
    redirect: { name: 'GtmVersionChecker' },
  },
  {
    path: '/addingarecordsonnetlify',
    redirect: { name: 'AddingARecordsOnNetlify' },
  },
  {
    path: '/julegaver',
    name: 'julegaver',
    component: () => import('@/views/Julegaver.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue'),
  },
  {
    path: '/dagerigjentiljul',
    name: 'dagerigjentiljul',
    component: () => import('@/views/DagerIgjenTilJul.vue'),
  },
  {
    path: '/ukerigjentiljul',
    name: 'ukerigjentiljul',
    component: () => import('@/views/UkerIgjenTilJul.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/Articles.vue'),
  },
  ...gtm,
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];
