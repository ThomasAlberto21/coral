<template>
  <main>
    <Hero />
    <Categories />

    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">Trending Now</h1>
        <p class="fst-italic">Find the best fashion and what's currently trending</p>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 mb-5"
          v-for="trending_product in trending_products"
          :key="trending_product.id"
        >
          <TrendingProducts :trending_product="trending_product" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Hero from '../components/Hero.vue';
import Categories from '../components/Categories.vue';
import TrendingProducts from '../components/TrendingProducts.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Categories,
    TrendingProducts
  },

  data() {
    return {
      trending_products: []
    };
  },

  methods: {
    setTrendingProducts(data) {
      this.trending_products = data;
    },

    getTrendingProducts() {
      axios
        .get('  http://localhost:3000/trending_products')
        .then((response) => {
          this.setTrendingProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.getTrendingProducts();
  }
};
</script>
