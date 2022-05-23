<template>
  <div>
    <topbar></topbar>
    <div class="container mt-5">
      <h1 class="fw-bold">Ketikan Proyek</h1>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nama Proyek</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col">
          <label for="exampleInputEmail1" class="form-label">Pilih Framework</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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