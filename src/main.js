import Vue from 'vue';
import vueHeadful from 'vue-headful';
import VueResource from 'vue-resource';
import VueShowdown from 'vue-showdown';
import VueGtm from 'vue-gtm';

import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
Vue.component('vue-headful', vueHeadful);
Vue.use(VueResource);

Vue.use(VueGtm, {
  id: 'GTM-MB4G868',
  queryParams: { // Add url query string when load gtm.js with GTM ID (optional)

  },
  enabled: true,
  debug: true,
  loadScript: true,
  vueRouter: router,
  ignoredViews: [],
});

Vue.use(VueShowdown, {
  flavor: 'github',
  options: {
    emoji: false,
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
