<template>
  <section class="man_products">
    <div class="container">
      <div class="row my-5">
        <div class="col-6">
          <h3 class="fw-bold">Man Products</h3>
        </div>

        <div class="col-6">
          <form class="d-flex" role="search" @submit.prevent="searchProducts">
            <input
              v-model="search"
              class="form-control me-2"
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
          v-for="man_product in man_products"
          :key="man_product.id"
        >
          <ManProducts :man_product="man_product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ManProducts from '../components/ManProducts.vue';

export default {
  name: 'ManProductsView',
  components: {
    ManProducts
  },

  data() {
    return {
      man_products: [],
      search: ''
    };
  },

  methods: {
    setManProducts(data) {
      this.man_products = data;
    },

    searchProducts() {
      axios
        .get('http://localhost:3000/man_products?q=' + this.search)
        .then((response) => this.setManProducts(response.data))
        .catch((error) => console.log(error));
    },

    fetchDataManProducts() {
      axios
        .get('http://localhost:3000/man_products')
        .then((response) => this.setManProducts(response.data))
        .catch((error) => console.log(error));
    }
  },

  mounted() {
    this.fetchDataManProducts();
  }
};
</script>
