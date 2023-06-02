<template>
  <section class="trending_products_detail">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main_image">
            <img :src="products.image" class="rounded-4 img-fluid w-100" />
          </div>

          <div class="thumbnails_image d-flex w-100 h-25 gap-2 mt-5">
            <img
              v-for="(image, index) in products.thumbnails"
              :key="index"
              class="img-fluid w-50 h-75 card"
              :src="image"
              @click="changeImage(index)"
            />
          </div>
        </div>

        <div class="col-lg-6 px-4">
          <h3 class="fw-bold">{{ products.title }}</h3>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="fw-semibold mb-3">${{ products.price }}</h4>
            <p class="fw-semibold text-warning">
              <i class="bi bi-star-fill"></i> {{ products.rating }} / 5
            </p>
          </div>

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
      products: {},
      currentImage: ''
    };
  },

  methods: {
    setProducts(data) {
      this.products = data;
    },

    changeImage(index) {
      this.products.image = this.products.thumbnails[index];
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



<style></style>