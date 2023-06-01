import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AllProductsView from '../views/AllProductsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/all_products',
      name: 'AllProductsView',
      component: AllProductsView
    }
  ]
});

export default router;
