import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import routes from '@/router/routes';
import { usePostHog } from '@/composables/usePostHog';
/* eslint-disable */

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const { posthog } = usePostHog();

if (posthog) {
  router.afterEach((to) => {
    if (typeof window === 'undefined') {
      return;
    }

    posthog.capture('$pageview', {
      $current_url: window.location.href,
      $pathname: to.fullPath,
      $title: document.title,
    });
  });
}

export default router;
