<template>
  <div>
    <topbar></topbar>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-5">
          <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"
            class="mb-2">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Logo Depan</label>
            <input type="file" class="form-control" placeholder="logo depan">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Judul</label>
            <input type="text" class="form-control" placeholder="ketikan judul">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tag Line</label>
            <input type="text" class="form-control" placeholder="ketikan tag line">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
            <textarea class="form-control" rows="3" placeholder="ketikan deskripsi..."></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-arrows-rotate"></i> Update</button>
          </div>
        </div>
        <div class="col">
          <div class="px-3 my-4 text-center py-5">
              <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt="" width="72" height="57" />
              <h2 class="fw-bold mb-1">BuatSimpel.com | Underconstruction</h2>
              <p class="fw-bold">Developer Website Aplikasi</p>
              <div class="col-lg-9 mx-auto">
                <p class="lead mb-8" style="font-size:small;">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open
                  source toolkit, featuring Sass variables and mixins,
                  responsive grid system, extensive prebuilt components, and
                  powerful JavaScript plugins.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-sm btn-primary btn-lg px-4 gap-3">
                    Secondary
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary btn-lg px-4">
                    Secondary
                  </button>
                </div>
              </div>
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