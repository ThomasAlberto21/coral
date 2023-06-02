<template>
  <section class="all_products mt-5 card border-0 shadow-lg rounded-2">
    <router-link
      :to="'/all_products_detail/' + all_product.id"
      
      style="text-decoration: none; color: inherit"
    >
      <!-- Description -->
      <div class="description">
        <img :src="all_product.image" alt="all_product_img" class="img-fluid mt-5" />

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
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'AllProductsComponent',
  props: ['all_products']
};
</script>

<style>
.card:hover {
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
