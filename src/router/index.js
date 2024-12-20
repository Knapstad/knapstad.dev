import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import routes from '@/router/routes';
/* eslint-disable */

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
