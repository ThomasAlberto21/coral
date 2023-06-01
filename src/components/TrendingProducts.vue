<template>
  <section class="trending_products card border-0 shadow-lg">
    <router-link
      :to="'/trending_products_detail/' + trending_product.id"
      style="text-decoration: none; color: inherit"
    >
      <img :src="trending_product.image" alt="trending_product_img" class="img-fluid" />

      <div class="card-body mt-3">
        <figcaption class="blockquote-footer">
          <cite title="Source Title">{{ trending_product.categories }}</cite>
        </figcaption>
        <h5 class="card-title fw-bold">
          {{ trending_product.title }}
        </h5>
        <p class="card-price fw-normal">${{ trending_product.price }}</p>
        <p class="card-rating fw-semibold text-warning">
          <i class="bi bi-star-fill"></i> {{ trending_product.rating }} / 5
        </p>
      </div>
    </router-link>
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
