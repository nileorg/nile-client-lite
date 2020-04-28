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
    cart: {
      shop: '',
      orders: {},
      notes: '',
    },
  },
  mutations: {
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
  },
  plugins: [vuexLocal.plugin],
});
