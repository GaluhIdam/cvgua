<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top p-2">
  <div class="container">
    <router-link :to="{name: 'main'}" class="navbar-brand fs-4 fw-bold me-5 text-primary"><i class="fa-solid fa-code"></i> Developer</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name: 'beranda'}" class="nav-link">Beranda</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'proyek'}" class="nav-link">Proyek</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'desain'}" class="nav-link">Desain</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'tentang'}" class="nav-link">Tentang</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'kontak'}" class="nav-link">Kontak</router-link>
        </li>
      </ul>
      <button class="btn btn-outline-primary rounded-pill"><i class="fa-solid fa-comment-dots"></i> Hubungi</button>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
