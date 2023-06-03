<template>
  <section class="woman_products_view">
    <div class="container">
      <div class="row my-5">
        <div class="col-6">
          <h3 class="fw-bold">Woman's Products</h3>
        </div>

        <div class="col-6">
          <form class="d-flex" role="search" @submit.prevent="searchProducts">
            <input
              v-model="search"
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              @keyup="searchProducts"
            />
          </form>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 mb-5"
          v-for="woman_product in woman_products"
          :key="woman_product.id"
        >
          <WomanProducts :woman_product="woman_product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import WomanProducts from '../components/WomanProducts.vue';

export default {
  name: 'WomanProductsView',
  components: {
    WomanProducts
  },

  data() {
    return {
      woman_products: [],
      search: ''
    };
  },

  methods: {
    setWomanProducts(data) {
      this.woman_products = data;
    },

    searchProducts() {
      axios
        .get('http://localhost:3000/woman_products?q=' + this.search)
        .then((response) => this.setWomanProducts(response.data))
        .catch((error) => console.log(error));
    },

    fetchDataWomanProducts() {
      axios
        .get('http://localhost:3000/woman_products')
        .then((response) => this.setWomanProducts(response.data))
        .catch((error) => console.log(error));
    }
  },

  mounted() {
    this.fetchDataWomanProducts();
  }
};
</script>
