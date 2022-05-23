<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white p-0">
  <div class="container">
    <router-link :to="{name: 'cmsutama'}" class="navbar-brand fs-4 fw-bold me-5 text-primary"><i class="fa-solid fa-gear"></i> CMS</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav nav-tabs me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name: 'cmsutama'}" class="nav-link"><i class="fa-solid fa-house-user"></i> Utama</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'cmspesan'}" class="nav-link"><i class="fa-solid fa-comment-dots"></i> Pesan</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'cmsproyek'}" class="nav-link"><i class="fa-solid fa-diagram-project"></i> Proyek</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'cmsdesain'}" class="nav-link"><i class="fa-solid fa-compass-drafting"></i> Desain</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'cmstentang'}" class="nav-link"><i class="fa-solid fa-user-astronaut"></i> Tentang</router-link>
        </li>
      </ul>
            <button class="btn btn-outline-danger btn-sm rounded-pill"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
    }
</script>
