import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    city: {},
    shop: {},
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    },
    setShop(state, shop) {
      state.shop = shop;
    },
  },
  plugins: [vuexLocal.plugin],
});
