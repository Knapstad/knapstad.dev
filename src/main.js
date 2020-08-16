import Vue from 'vue';
import VueResource from 'vue-resource';
import VueGtm from 'vue-gtm';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.use(VueGtm, {
  id: 'GTM-MB4G868',
  queryParams: {
    // Add url query string when load gtm.js with GTM ID (optional)
  },
  enabled: true,
  debug: true,
  loadScript: true,
  vueRouter: router,
  ignoredViews: [],
});

Vue.filter('capitalize', value => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
