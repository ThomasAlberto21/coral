import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AllProductsView from '../views/AllProductsView.vue';
import ManProductsView from '../views/ManProductsView.vue';
import WomanProductsView from '../views/WomanProductsView.vue';
import CartView from '../views/CartView.vue';

// Detail views
import AllProductsDetailView from '../views/AllProductsDetailView.vue';
import ManProductsDetailView from '../views/ManProductsDetailView.vue';
import WomanProductsDetailView from '../views/WomanProductsDetailView.vue';
import TrendingProductsDetailView from '../views/TrendingProductsDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/trending_products_detail/:id',
      name: 'TrendingProductsDetailView',
      component: TrendingProductsDetailView
    },
    {
      path: '/all_products',
      name: 'AllProductsView',
      component: AllProductsView
    },
    {
      path: '/all_products_detail/:id',
      name: 'AllProductsDetailView',
      component: AllProductsDetailView
    },
    {
      path: '/man_products',
      name: 'ManProductsView',
      component: ManProductsView
    },
    {
      path: '/man_products_detail/:id',
      name: 'ManProductsDetailView',
      component: ManProductsDetailView
    },
    {
      path: '/woman_products',
      name: 'WomanProductsView',
      component: WomanProductsView
    },
    {
      path: '/woman_products_detail/:id',
      name: 'WomanProductsDetailView',
      component: WomanProductsDetailView
    },
    {
      path: '/cart',
      name: 'CartView',
      component: CartView
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    }
  ]
});

export default router;
