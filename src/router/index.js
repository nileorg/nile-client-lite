import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import City from '@/views/City.vue';
import Shop from '@/views/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:cityLink',
    name: 'City',
    component: City,
    props: true,
  },
  {
    path: '/:cityLink/:shopLink',
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
