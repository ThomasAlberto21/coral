<template>
  <section class="cart">
    <div class="container my-5">
      <h1 class="fw-bold">Cart</h1>
      <div class="row">
        <div class="col">
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <th>{{ index + 1 }}</th>
                <td class="w-25">
                  <img :src="cart.products.image" class="w-75 rounded-4" />
                </td>
                <td>
                  {{ cart.products.title }}
                </td>
                <td>{{ cart.quantity }}</td>
                <td>${{ cart.products.price }}</td>
                <td>
                  <button class="btn btn-danger text-white" @click="deleteCart(cart.id)">
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="4" class="text-end">Total Price :</td>
                <td>
                  <strong>${{ totalPrice }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <Modal :totalPrice="totalPrice" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Modal from '../components/Modal.vue';
import { deleteCart } from '@/utils/toast';

export default {
  name: 'CartView',
  components: {
    Modal
  },

  data() {
    return {
      carts: []
    };
  },

  methods: {
    setCarts(data) {
      this.carts = data;
    },

    deleteCart(id) {
      axios
        .delete('http://localhost:3000/carts/' + id)
        .then(() => {
          deleteCart();
          axios
            .get('http://localhost:3000/carts')
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  },

  mounted() {
    axios
      .get('http://localhost:3000/carts')
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },

  computed: {
    totalPrice() {
      let total = 0;
      this.carts.forEach((cart) => {
        total += cart.products.price * cart.quantity;
      });
      return total;
    }
  }
};
</script>
