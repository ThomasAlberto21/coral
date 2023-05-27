<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <nav class="navbar navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.png" width="155" height="30" alt="" />
        </a>
      </nav>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
          <li class="nav-item">
            <router-link to="/" class="nav-link fw-normal">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link fw-normal">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/all_clothing" class="dropdown-item">All Clothing</router-link>
              </li>
              <li>
                <router-link to="/man's_clothing" class="dropdown-item">Man's Clothing</router-link>
              </li>
              <li>
                <router-link to="/woman's clothing" class="dropdown-item"
                  >Woman's Clothing</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link fw-normal">Contact Us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto gap-2">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link"><i class="bi bi-cart h5"></i></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
};
</script>
