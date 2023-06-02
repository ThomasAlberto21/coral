<template>
  <section class="all_products">
    <div class="container">
      <div class="row mt-5">
        <div class="col-6">
          <h3 class="fw-semibold">All Products</h3>
        </div>

        <div class="col-6">
          <form class="d-flex" role="search" @submit.prevent="searchProducts">
            <input
              v-model="search"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit" @click="searchProducts">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>

      <AllProducts :all_products="all_products" />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import AllProducts from '../components/AllProducts.vue';

export default {
  name: 'AllProductsView',
  components: {
    AllProducts
  },

  data() {
    return {
      all_products: [],
      search: ''
    };
  },

  methods: {
    setAllProducts(data) {
      this.all_products = data;
    },

    searchProducts() {
      axios
        .get('http://localhost:3000/all_products?q=' + this.search)
        .then((response) => this.setAllProducts(response.data))
        .catch((error) => console.log(error));
    },

    fetchDataAllProducts() {
      axios
        .get('http://localhost:3000/all_products')
        .then((response) => this.setAllProducts(response.data))
        .catch((error) => console.log(error));
    }
  },

  mounted() {
    this.fetchDataAllProducts();
  }
};
</script>
