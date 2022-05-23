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
            <div class="btn btn-secondary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              </div>
            </div>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            <button type="button" class="btn btn-success"><i class="fa-solid fa-arrows-rotate"></i></button>
          </div>
        </div>
      </div>
      <hr class="my-4 mt-0 mb-0">
      <div class="row mb-2 mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input type="text" class="form-control" autofocus placeholder="Cari pesan" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </div>
      <div class="row border-top border-bottom p-2">
        <div class="col-sm-3">
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label d-flex align-items-center" for="flexCheckDefault">
              <h6 class="fw-bold mb-0"><span class="badge bg-danger">Baru</span> Example heading</h6>
            </label>
          </div>
        </div>
        <div class="col">
          <p class="mb-0 ms-4">Diterjemahkan dari bahasa Inggris-Dalam bisnis atau perdagangan, pesanan adalah niat yang dinyatakan....</p>
        </div>
      </div>
      <div class="row border-top border-bottom p-2">
        <div class="col-sm-3">
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label d-flex align-items-center" for="flexCheckDefault">
              <h6 class="fw-bold mb-0"><span class="badge bg-danger">Baru</span> Example heading</h6>
            </label>
          </div>
        </div>
        <div class="col">
          <p class="mb-0 ms-4">Diterjemahkan dari bahasa Inggris-Dalam bisnis atau perdagangan, pesanan adalah niat yang dinyatakan....</p>
        </div>
      </div>
      <div class="row border-top border-bottom p-2">
        <div class="col-sm-3">
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label d-flex align-items-center" for="flexCheckDefault">
              <h6 class="mb-0">Example heading</h6>
            </label>
          </div>
        </div>
        <div class="col">
          <p class="mb-0 ms-4">Diterjemahkan dari bahasa Inggris-Dalam bisnis atau perdagangan, pesanan adalah niat yang dinyatakan....</p>
        </div>
      </div>
    </div>
    <fotbar></fotbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>