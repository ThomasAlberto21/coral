<template>
  <section class="hero">
    <div class="container">
      <div class="row d-flex align-items-center vh-100">
        <div class="col-lg-12 text-lg-start text-center">
          <h5 class="fw-bold text-light">SUMMER 2023</h5>
          <h1 class="fw-bolder text-light display-4 my-4">NEW COLLECTION</h1>
          <h4 class="fw-normal text-light">
            We know how large objects will act, <br class="d-lg-block d-none" />
            but things on a small scale.
          </h4>

          <button
            class="btn mt-4 px-5 py-3 fw-bolder text-light shadow"
            style="background-color: #2dc071"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent'
};
</script>

<style>
.hero {
  background-image: url('../assets/images/hero_image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.btn:hover {
  opacity: 0.7;
}
</style>
