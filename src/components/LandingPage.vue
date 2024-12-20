<template>
  <div class="bg-dark py-5 vh-100 w-100 d-flex align-item-center">
    <div class="row">
        <div class="col-12 col-md-6 pt-5 ps-5 pe-5 d-flex align-items-center">
            <figure class="figure">
                <img src="/src/assets/Landing-page.jpeg" class="img-fluid">
            </figure>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center p-5">
            <div class="text-center text-white">
                <h1 class="name display-1 text-start fw-bold">Vatsal <br> Kataria</h1>
                <p class="lead text-opacity-75 text-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vel quia nostrum mollitia debitis iure, laborum dolores odio non dolor repudiandae adipisci cumque minima ducimus qui quod soluta neque explicabo delectus doloremque corrupti, sunt autem.
                </p>
                <div class="d-flex align-content-start">
                    <a href="#aboutme" class="btn btn-light border-light" data-bs-toggle="tab" role="tab">
                        <span class="p-3 fw-bold">About Me</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LandingPage'
}
</script>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

.name{
  font-family: 'Playball';
  letter-spacing: 10px;
}
/* 
.lead{
  font-family: 'Playball';
} */
</style>

