import Vue from 'vue';
import vueHeadful from 'vue-headful';
import VueResource from 'vue-resource';
import VueShowdown from 'vue-showdown';


import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
Vue.component('vue-headful', vueHeadful);
Vue.use(VueResource);

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
