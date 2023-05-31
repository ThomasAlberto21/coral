<template>
  <section class="trending_products card border-0 shadow-lg">
    <router-link :to="'/trending_products_detail/' + trending_product.id" class="">
      <img :src="trending_product.image" alt="trending_product_img" class="img-fluid" />
    </router-link>
    <div class="card-body mt-3 text-dark">
      <figcaption class="blockquote-footer">
        <cite title="Source Title">{{ trending_product.categories }}</cite>
      </figcaption>
      <h5 class="card-title fw-bold">
        {{ trending_product.title }}
      </h5>
      <p class="card-price fw-normal">${{ trending_product.price }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrendingProductsComponents',
  props: ['trending_product']
};
</script>

<style>
.trending_products:hover {
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
