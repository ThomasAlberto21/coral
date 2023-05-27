<template>
 <nav class="navbar navbar-expand-lg bg-white">
  <div class="container">
   <nav class="navbar navbar-light bg-white">
    <a class="navbar-brand" href="#">
     <img src="../assets/images/logo.png" width="160" height="30" alt="" />
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
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3 gap-2">
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
       <li><a class="dropdown-item">All Clothing</a></li>
       <li><a class="dropdown-item">Man's Clothing</a></li>
       <li><a class="dropdown-item" href="#">Woman's Clothing</a></li>
      </ul>
     </li>
     <li class="nav-item">
      <a class="nav-link">Contact</a>
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
