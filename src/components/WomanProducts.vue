<template>
  <section class="woman_products card border-0 shadow-lg rounded-2">
    <router-link
      :to="'/woman_products_detail/' + woman_product.id"
      style="text-decoration: none; color: inherit"
    >
      <img :src="woman_product.image" alt="all_product_img" class="img-fluid mt-5 h-25" />

      <!-- Card Description -->
      <div class="card-body mt-5">
        <figcaption class="blockquote-footer">
          <cite title="Source Title">{{ woman_product.categories }}</cite>
        </figcaption>
        <h5 class="card-title fw-bold">
          {{ woman_product.title }}
        </h5>
        <p class="card-price fw-normal">${{ woman_product.price }}</p>
        <p class="card-rating fw-semibold text-warning">
          <i class="bi bi-star-fill"></i> {{ woman_product.rating }} / 5
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'WomanProductsComponent',
  props: ['woman_product']
};
</script>
