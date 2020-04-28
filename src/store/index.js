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
      orders: {},
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
      Vue.set(state.cart.orders, order.name, {
        price: order.price,
        quantity: order.quantity,
      });
    },
    emptyCart(state) {
      state.cart = {
        shop: '',
        orders: {},
        notes: '',
      };
    },
    saveAccount() {
      //
    },
    saveOrder() {
      //
    },
  },
  plugins: [vuexLocal.plugin],
});
