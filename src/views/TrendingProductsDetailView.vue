<template>
  <section class="trending_products_detail">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-5 col-12">
          <img
            :src="products.image"
            alt="best_products_image"
            class="rounded-4 img-fluid w-100 h-100"
          />
        </div>

        <div class="col-lg-7">
          <h3 class="fw-bold">{{ products.title }}</h3>
          <hr />
          <h4 class="fw-semibold mb-3">${{ products.price }}</h4>
          <p class="fw-normal">{{ products.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TrendingProductsDetailView',

  data() {
    return {
      products: {}
    };
  },

  methods: {
    setProducts(data) {
      this.products = data;
    },

    fetchDataTrendingProducts() {
      axios
        .get('http://localhost:3000/trending_products/' + this.$route.params.id)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.fetchDataTrendingProducts();
  }
};
</script>
