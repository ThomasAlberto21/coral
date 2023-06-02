<template>
  <section class="all_products row justify-content-center gap-5">
    <div
      class="card border-0 shadow-lg col-lg-3 col-md-5 mt-5 rounded-2"
      v-for="all_product in all_products"
      :key="all_product.id"
    >
      <div style="text-decoration: none; color: inherit">
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllProductsComponent',
  props: ['all_products']
};
</script>
