const articles = require('../assets/articles/articles.json');
const projects = require('../assets/projects/projects.json');
/* eslint-disable */
const posts = articles.map(child => ({
  path: child.path,
  name: child.name,
  component: () => import(`@/views/Blogg.vue`),
  props: { data: child },
}));
const projec = projects.map(child => ({
  path: child.path,
  name: child.name,
  component: () => import(`@/views/Blogg.vue`),
  props: { data: child },
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
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/Projects.vue'),
  },
  ...posts,
  ...projec,
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];
