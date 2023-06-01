<template>
  <section class="all_products">
    <div class="container">
      <div class="row mt-5">
        <div class="col-6">
          <h3 class="fw-semibold">All Products</h3>
        </div>

        <div class="col-6">
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search Products..."
              aria-label="Search Plants..."
              aria-describedby="basic-addon2"
            />
            <div class="input-group-text bg-success opacity-75" id="search">
              <i class="bi bi-search text-light"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllProductsView'
};
</script>
