<template>
  <div>
    <topbar></topbar>
    <div class="container mt-4">
      <div class="row">
        <div class="col d-flex align-items-start">
          <h1 class="fw-bold text-primary mb-0">Daftar Pesan</h1>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <div class="btn btn-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Pilih Semua
                </label>
              </div>
            </div>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Hapus Semua</button>
            <button type="button" class="btn btn-success"><i class="fa-solid fa-arrows-rotate"></i> Refresh
              Pesan</button>
          </div>
        </div>
      </div>
      <hr class="my-4 mt-0 mb-0">
      <div class="row mb-2 mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input type="text" class="form-control" autofocus placeholder="Cari pesan" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check">
            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              <h6 class="fw-bold"><span class="badge bg-danger">Baru</span> Example heading</h6>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check">
            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              <h6 class="fw-bold"><span class="badge bg-danger">Baru</span> Example heading</h6>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>