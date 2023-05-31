<template>
  <section class="categories">
    <div class="container">
      <div class="row justify-content-center align-items-center mt-4 mb-5 gap-lg-0 gap-md-3 gap-3">
        <div class="man_model col-lg-6 position-relative">
          <div class="label position-absolute bottom-0 ms-2">
            <h3 class="text-light fw-bold">Man's atributes</h3>
            <p class="text-light">20 Items</p>
          </div>
        </div>
        <div class="girl_model col-lg-6 position-relative">
          <div class="label position-absolute bottom-0 ms-2">
            <h3 class="text-light fw-bold">Woman's atributes</h3>
            <p class="text-light">20 Items</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesComponent'
};
</script>

<style>
.man_model {
  background: url('../assets/images/man_model.jpg');
  background-size: cover;
  height: 45vh;
}

.man_model:hover {
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s;
}

.girl_model {
  background: url('../assets/images/girl_model.jpg');
  background-size: cover;
  height: 45vh;
}

.girl_model:hover {
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
