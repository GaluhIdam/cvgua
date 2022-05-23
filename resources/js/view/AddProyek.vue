<template>
  <div>
    <topbar></topbar>
    <div class="container mt-5">
      <div class="row mb-3">
        <div class="col">
          <h1 class="fw-bold">Proyek Baru</h1>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top"
              title="Publikasi"><i class="fa-solid fa-bullhorn"></i></button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
              title="Draft"><i class="fa-solid fa-box-archive"></i></button>
            <router-link :to="{ name: 'cmsproyek' }" type="button" class="btn btn-danger" data-bs-toggle="tooltip"
              data-bs-placement="bottom" title="Kembali"><i class="fa-solid fa-circle-chevron-left"></i></router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Ketikan Nama Proyek"
              aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <select class="form-select" aria-label="Default select example">
            <option selected>Pilih Framework</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-circle-plus"></i></button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Tambah Framework</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama Framework</label>
                    <input type="text" class="form-control"
                      placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Gambar Framework</label>
                    <input type="file" class="form-control"
                      placeholder="name@example.com">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa-solid fa-circle-xmark"></i> Batal</button>
                  <button type="button" class="btn btn-primary"><i class="fa-solid fa-circle-plus"></i> Tambah</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
      <div class="row mt-3">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama Gambar</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <fotbar></fotbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editorData: '',
      editorConfig: {
        // The configuration of the editor.
      }
    };
  }
}
</script>

<style>
</style>