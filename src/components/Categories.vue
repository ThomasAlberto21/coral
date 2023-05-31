<template>
  <section class="categories">
    <div class="container">
      <div class="row justify-content-center align-items-center mt-4 mb-5">
        <div class="man_model col-6"></div>
        <div class="girl_model col-6"></div>
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
  height: 50vh;
}

.girl_model {
  background: url('../assets/images/girl_model.jpg');
  background-size: cover;
  height: 50vh;
}
</style>
