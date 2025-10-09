import Vue from 'vue';
import VueResource from 'vue-resource';
import VueGtm from 'vue-gtm';
import VueHighlightJS from 'vue-highlight.js';

import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

import 'highlight.js/styles/github.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueResource);
// Vue.use(VueHighlightJS, {
//   // Register only languages that you want
//   languages: {
//     javascript,
//     vue,
//   },
// });

Vue.filter('capitalize', value => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

router.afterEach(() => {
  setTimeout(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { dataLayer } = window;
    if (Array.isArray(dataLayer)) {
      dataLayer.push({ event: 'NavigationComplete' });
    }
  }, 1000);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
