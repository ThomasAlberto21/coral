<template>
  <section class="man_products card border-0 shadow-lg rounded-2">
    <router-link
      :to="'/man_products_detail/' + man_product.id"
      style="text-decoration: none; color: inherit"
    >
      <img :src="man_product.image" alt="all_product_img" class="img-fluid mt-5 h-25" />

      <!-- Card Description -->
      <div class="card-body mt-5">
        <figcaption class="blockquote-footer">
          <cite title="Source Title">{{ man_product.categories }}</cite>
        </figcaption>
        <h5 class="card-title fw-bold">
          {{ man_product.title }}
        </h5>
        <p class="card-price fw-normal">${{ man_product.price }}</p>
        <p class="card-rating fw-semibold text-warning">
          <i class="bi bi-star-fill"></i> {{ man_product.rating }} / 5
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ManProductsComponent',
  props: ['man_product']
};
</script>

<style>
.card:hover {
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
