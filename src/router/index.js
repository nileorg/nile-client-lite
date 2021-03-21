import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import City from '@/views/City.vue';
import Shop from '@/views/Shop.vue';
import Landing from '@/views/Landing.vue';
import Order from '@/views/Order.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/order/:orderHash',
    name: 'Order',
    component: Order,
    props: true,
  },
  {
    path: '/:cityUid',
    name: 'City',
    component: City,
    props: true,
  },
  {
    path: '/:cityUid/:shopUid',
    name: 'Shop',
    component: Shop,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
