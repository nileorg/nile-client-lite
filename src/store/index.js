import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    hash: null,
    lang: 'en',
    city: {},
    shop: {},
    cart: {
      shop: '',
      orders: [],
      notes: '',
    },
    account: {
      firstname: '',
      lastname: '',
      address: '',
      doorbell: '',
      notes: '',
      phone: '',
    },
    changes: 0,
  },
  mutations: {
    setHash(state, hash) {
      state.hash = hash;
    },
    setLang(state, lang) {
      state.lang = lang;
    },
    setCity(state, city) {
      state.city = city;
    },
    setShop(state, shop) {
      state.shop = shop;
    },
    addToCart(state, order) {
      Vue.set(state.cart, 'shop', order.shop);
      state.cart.orders.push(order.product);
    },
    emptyCart(state) {
      state.cart = {
        shop: '',
        orders: [],
        notes: '',
      };
    },
    saveAccount(state) {
      state.changes += 1;
    },
    saveOrder(state) {
      state.changes += 1;
    },
    deleteOrder(state, { product }) {
      state.cart.orders = state.cart.orders.filter((p) => p.name !== product);
    },
  },
  plugins: [vuexLocal.plugin],
});
