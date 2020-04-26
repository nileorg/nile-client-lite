import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import ipfs from './plugins/vue-ipfs';

Vue.use(VueCarousel);
Vue.use(ipfs);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
