<template>
  <div class="App">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  props: ['carts'],
  components: {
    RouterView,
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  }
};
</script>
