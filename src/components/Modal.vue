<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-dark float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Checkout <i class="bi bi-cart-check"></i>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Billing Summary</h1>
        </div>
        <div class="modal-body text-start">
          <form>
            <!-- Name -->
            <div class="mb-3">
              <label class="form-label fw-bold">Name</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Input Your Name..."
                required
                v-model="orders.name"
              />
            </div>

            <!-- Address -->
            <div class="mb-3">
              <label class="form-label fw-bold">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Input Your Adress.."
                required
                v-model="orders.address"
              />
            </div>

            <!-- Other Comments -->
            <div class="mb-3">
              <label class="form-label fw-bold">Other Comments</label>
              <textarea
                rows="5"
                class="form-control"
                placeholder="Enter Your Other Commets..."
                v-model="orders.comments"
              ></textarea>
            </div>
            <p class="fw-bold">Total Price : ${{ totalPrice }}</p>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                v-model="isChecked"
              />
              <label class="form-check-label" for="exampleCheck1">Your data in correct? </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="inputClicked"
          >
            Close
          </button>
          <button type="button" class="btn btn-dark" :disabled="!isChecked" @click="checkoutOrders">
            Checkout <i class="bi bi-cart-check"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { successOrder, failedOrder } from '@/utils/toast';

export default {
  name: 'ModalComponent',
  props: ['totalPrice', 'carts'],

  data() {
    return {
      orders: {},
      isChecked: false
    };
  },

  methods: {
    inputClicked() {
      this.isChecked = !this.isChecked;
    },

    checkoutOrders() {
      if (this.orders.name && this.orders.address && this.orders.comments) {
        this.orders.carts = this.carts;
        axios.post('http://localhost:3000/orders', this.orders).then(() => {
          this.carts.map(async (item) => {
            try {
              return await axios.delete('http://localhost:3000/carts/' + item.id);
            } catch (error) {
              console.log(error);
            }
          });

          this.$router.push({ path: '/success_orders' });
          successOrder();
        });
      } else {
        failedOrder();
      }
    }
  }
};
</script>
