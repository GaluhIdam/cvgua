<template>
    <div>
        <navbar></navbar>
        <div>
            <div class="px-4 py-5 my-5 text-center mt-15">
                <img class="d-block mx-auto mb-4"
                    src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72"
                    height="57" />
                <h1 class="display-5 fw-bold mb-1">BuatSimpel.com | Underconstruction</h1>
                <p class="fw-bold">Developer Website Aplikasi</p>
                <div class="col-lg-9 mx-auto">
                    <p class="lead mb-8">
                        Quickly design and customize responsive mobile-first sites
                        with Bootstrap, the world’s most popular front-end open
                        source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and
                        powerful JavaScript plugins.
                    </p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                            Secondary
                        </button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
            <div class="container px-4 py-5 mt-10">
                <h4 class="pb-2 border-bottom text-center">- Berita Terbaru -
                </h4>

                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark shadow-sm" style="
                            border-radius: 25px;
                            background-image: url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg');
                        ">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Short title, long jacket
                                </h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                            class="rounded-circle border border-white" />
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill"></use>
                                        </svg>
                                        <small>Earth</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3"></use>
                                        </svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark shadow-sm" style="
                            border-radius: 25px;
                            background-image: url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg');
                        ">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Much longer title that wraps to multiple lines
                                </h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                            class="rounded-circle border border-white" />
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill"></use>
                                        </svg>
                                        <small>Pakistan</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3"></use>
                                        </svg>
                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark shadow-sm" style="
                            border-radius: 25px;
                            background-image: url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg');
                        ">
                            <div class="d-flex flex-column h-100 p-5 pb-3">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Another longer title belongs here
                                </h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                            class="rounded-circle border border-white" />
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill"></use>
                                        </svg>
                                        <small>California</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3"></use>
                                        </svg>
                                        <small>5d</small>
                                    </li>
                                </ul>
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
