import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AllProductsView from '../views/AllProductsView.vue';
import ManProductsView from '../views/ManProductsView.vue';

// Detail views
import AllProductsDetailView from '../views/AllProductsDetailView.vue';
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
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    }
  ]
});

export default router;
