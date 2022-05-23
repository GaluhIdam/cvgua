<template>
  <div>
    <topbar></topbar>
    <div class="container mt-4">
      <div class="row">
        <div class="col d-flex align-items-start">
          <h1 class="fw-bold text-primary mb-0">Daftar Proyek</h1>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <router-link :to="{ name: 'addproyek' }" class="btn btn-primary fw-bold"><i
              class="fa-solid fa-circle-plus"></i> Tambah</router-link>
        </div>
      </div>
      <hr class="my-4 mt-0 mb-0" />
      <div class="row mb-2 mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cari proyek" autofocus
              aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3 mb-5">
        <div class="col">
          <div class="card shadow-sm">
            <img src="https://dewailmu.id/wp-content/uploads/2017/07/situs-belajar-coding.jpg" alt="" />

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link :to="{ name: 'viewproyek' }" class="btn btn-sm btn-outline-primary"><i
                      class="fa-solid fa-eye"></i> Lihat</router-link>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    <i class="fa-solid fa-pen-to-square"></i>
                    Ubah
                  </button>
                </div>
                <small class="text-muted">Dipublikasi pada 9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <fotbar></fotbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
