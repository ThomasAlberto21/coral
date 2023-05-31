<template>
  <section class="trending_products mt-5 card border-0 shadow" >
    <router-link :to="'/trending_products_detail/' + trending_product.id" class="">
      <img
        :src="trending_product.image"
        alt="trending_product_img"
        style="height: 20rem"
        class="img-fluid rounded-4"
      />
    </router-link>
    <div class="card-body mt-3 text-dark">
      <h5 class="card-title fw-bold">
        {{ trending_product.title }}
      </h5>
      <p class="fw-normal">${{ trending_product.price }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrendingProductsComponents',
  props: ['trending_product']
};
</script>
