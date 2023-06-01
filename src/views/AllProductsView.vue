<template>
  <section class="all_products">
    <div class="container">
      <div class="row mt-5">
        <div class="col-6">
          <h3 class="fw-semibold">All Products</h3>
        </div>

        <div class="col-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search Products..."
              aria-label="Search Plants..."
              aria-describedby="basic-addon2"
            />
            <div class="input-group-text bg-success opacity-75" id="search">
              <i class="bi bi-search text-light"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Products -->
      <div class="row justify-content-center align-items-center">
        <section
          class="all_products card border-0 shadow-lg col-lg-3 col-md-2 mt-5 mx-3"
          v-for="all_product in all_products"
          :key="all_product.id"
        >
          <div style="text-decoration: none; color: inherit">
            <img :src="all_product.image" alt="all_product_img" class="img-fluid mt-3 w-100" />

            <div class="card-body mt-3">
              <figcaption class="blockquote-footer">
                <cite title="Source Title">{{ all_product.categories }}</cite>
              </figcaption>
              <h5 class="card-title fw-bold">
                {{ all_product.title }}
              </h5>
              <p class="card-price fw-normal">${{ all_product.price }}</p>
              <p class="card-rating fw-semibold text-warning">
                <i class="bi bi-star-fill"></i> {{ all_product.rating }} / 5
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllProductsView',

  data() {
    return {
      all_products: []
    };
  },

  methods: {
    setAllProducts(data) {
      this.all_products = data;
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
