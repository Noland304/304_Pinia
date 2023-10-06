import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainpage.vue'

import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import Cart from '../components/Cart.vue'


import SHK1 from '../components/ShopK1.vue';
import SHK2 from '../components/ShopK2.vue';
import SHK3 from '../components/ShopK3.vue';
import SHK4 from '../components/ShopK4.vue';
import SHK5 from '../components/ShopK5.vue';
import SHK6 from '../components/ShopK6.vue';
import SHK7 from '../components/ShopK3.vue';
import SHK8 from '../components/ShopK4.vue';
import SHK9 from '../components/ShopK5.vue';
import SHK10 from '../components/ShopK6.vue';


const shopRoutes = [
  { name: 'news_1', component: SHK1, shop: '' },
  { name: 'news_2', component: SHK2, shop: '' },
  { name: 'news_3', component: SHK3, shop: ''},
  { name: 'news_4', component: SHK4, shop: ''},
  { name: 'news_5', component: SHK5, shop: ''},
  { name: 'news_6', component: SHK6, shop: ''},
  { name: 'news_7', component: SHK7, shop: ''},
  { name: 'news_8', component: SHK8, shop: ''},
  { name: 'news_9', component: SHK9, shop: ''},
  { name: 'news_10', component:SHK10, shop: ''}
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }

];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
