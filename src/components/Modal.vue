<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            <div class="mb-3">
              <label class="form-label fw-bold">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Input Your Name..."
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Address</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Input Your Adress.."
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Other Comments</label>
              <textarea
                rows="5"
                class="form-control"
                placeholder="Enter Your Other Commets..."
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
              <label class="form-check-label" for="exampleCheck1"
                >Please check to acknowledge our Privacy & Terms Policy</label
              >
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
          <button type="button" class="btn btn-dark" :disabled="!isChecked">
            Checkout <i class="bi bi-cart-check"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: ['totalPrice'],

  data() {
    return {
      isChecked: false
    };
  },

  methods: {
    inputClicked() {
      this.isChecked = !this.isChecked;
    }
  }
};
</script>
