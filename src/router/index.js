import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Contact from '../views/ContactView.vue';
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
      path: '/all_products',
      name: 'AllProductsView',
      component: AllProductsView
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: Contact
    }
  ]
});

export default router;
