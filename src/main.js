import Vue from 'vue';
import VueGlide from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.use(VueGlide);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
