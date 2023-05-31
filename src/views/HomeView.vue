<template>
  <main>
    <Hero />
    <Categories />

    <div class="container">
      <div class="row">
        
      </div>
    </div>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';
import Categories from '../components/Categories.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Categories
  }
};
</script>
