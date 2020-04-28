import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VModal from 'vue-js-modal';
import Clipboard from 'v-clipboard';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import ipfs from './plugins/vue-ipfs';

Vue.use(VueCarousel);
Vue.use(ipfs);
Vue.use(VModal, { dialog: true });
Vue.use(Clipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
