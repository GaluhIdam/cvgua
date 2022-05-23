<template>
    <div>
        <topbar></topbar>
        <div class="container mt-5">
            <h1 class="fw-bold mb-1">Judul Proyeksi</h1>
            <p class="text-muted fs-6">Dipublikasi pada Senin, 21 Oktober 2022</p>
            <div class="row mt-4">
                <div class="col-md-6 mb-4">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://dewailmu.id/wp-content/uploads/2017/07/situs-belajar-coding.jpg"
                                    class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="https://dewailmu.id/wp-content/uploads/2017/07/situs-belajar-coding.jpg"
                                    class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="https://dewailmu.id/wp-content/uploads/2017/07/situs-belajar-coding.jpg"
                                    class="d-block w-100" alt="">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="row text-center">
                        <div class="col">
                            <p class="mb-1 mt-4">Dibangun dengan :</p>
                            <img class="ms-3 me-3 mt-2 mb-1" src="https://mochikit.com/wp-content/uploads/2019/01/vue-js-logo.png"
                                width="110" alt="vue-js">
                            <img class="ms-3 me-3 mt-2 mb-1"
                                src="https://seeklogo.com/images/B/bootstrap-logo-69A1CCC10B-seeklogo.com.png"
                                width="110" alt="vue-js">
                            <img class="ms-3 me-3 mt-2 mb-1"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png"
                                width="110" alt="vue-js">
                            <img class="ms-3 me-3 mt-2 mb-1"
                                src="https://www.kindpng.com/picc/m/287-2873694_mysql-logo-png-transparent-png-download.png"
                                width="110" alt="vue-js">
                        </div>
                    </div>
                </div>
                <div class="col text-center">
                    <p class="text-justify lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur dolorum numquam, exercitationem
                        ducimus mollitia laborum placeat!</p>
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