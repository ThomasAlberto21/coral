<template>
  <main>
    <Hero />
    <Categories />

    <div class="container">
      <div class="row"></div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Hero from '../components/Hero.vue';
import Categories from '../components/Categories.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Categories
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
