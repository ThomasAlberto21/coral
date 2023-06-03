<template>
  <section class="woman_products_detail">
    <div class="container my-5 px-3">
      <router-link to="/woman_products" class="btn btn-dark mb-5 fw-bold"
        ><i class="bi bi-arrow-left"></i> Back</router-link
      >
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main_image">
            <img :src="products.image" class="img-fluid w-100 card" alt="Main Image" />
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="thumbnails_image d-flex gap-2 mb-5 mt-lg-0 mt-3">
            <img
              v-for="(image, index) in products.thumbnails"
              :key="index"
              :src="image"
              class="img-fluid card-img card"
              alt="Thumbnail Image"
              @click="changeImage(index)"
            />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h3 class="fw-bold">{{ products.title }}</h3>
        <figcaption class="blockquote-footer mt-3">
          <cite title="Source Title">{{ products.categories }}</cite>
        </figcaption>
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="fw-semibold mb-3">${{ products.price }}</h4>
          <p class="fw-semibold text-warning">
            <i class="bi bi-star-fill"></i> {{ products.rating }} / 5
          </p>
        </div>

        <p class="fw-normal">{{ products.description }}</p>

        <form class="mt-5" v-on:submit.prevent>
          <div class="d-flex">
            <p class="me-3 my-auto">Quantity</p>
            <button class="btn btn-dark rounded-0 px-3">-</button>
            <input
              type="number"
              class="rounded-0 mx-2 text-center border border-dark"
              style="width: 5rem"
              v-model="quantity"
            />
            <button class="btn btn-dark rounded-0 px-3">+</button>
          </div>

          <button class="btn btn-dark rounded-3 w-100 mt-4 py-3 fw-bold">
            Add To Cart <i class="bi bi-cart h5"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WomanProductsDetailView',

  data() {
    return {
      products: {},
      quantity: 1
    };
  },

  methods: {
    setProducts(data) {
      this.products = data;
    },

    changeImage(index) {
      this.products.image = this.products.thumbnails[index];
    },

    fetchDataWomanProducts() {
      axios
        .get('http://localhost:3000/woman_products/' + this.$route.params.id)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    }
  },

  mounted() {
    this.fetchDataWomanProducts();
  }
};
</script>

<style>
.thumbnails_image {
  cursor: pointer;
}

.thumbnails_image img:hover {
  opacity: 0.6;
  transition: all 0.2s;
}
</style>
