<template>
  <section class="all_products_detail">
    <div class="container">
      <div class="row">
        <div class="col-5"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllProductsDetailView',

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

    fetchDataTrendingProducts() {
      axios
        .get('http://localhost:3000/all_products/' + this.$route.params.id)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
