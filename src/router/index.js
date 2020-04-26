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
    path: '/city',
    name: 'City',
    component: City,
    props: true,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
