import Vue from 'vue';
import VueResource from 'vue-resource';
import VueGtm from 'vue-gtm';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/github.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueResource);

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('vue', xml);

const applyHighlighting = el => {
  if (!el) {
    return;
  }

  const blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    block.classList.remove('hljs');
    block.removeAttribute('data-highlighted');
    hljs.highlightElement(block);
  });
};

const scheduleHighlighting = el => {
  Vue.nextTick(() => {
    applyHighlighting(el);
  });
};

Vue.directive('highlightjs', {
  inserted(el) {
    scheduleHighlighting(el);
  },
  componentUpdated(el) {
    scheduleHighlighting(el);
  },
});

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
