<script setup>
import CardLogin from "../components/CardLogin.vue";
</script>

<template>
  <header class="d-flex justify-content-between bg-purple mb-0">
    <router-link class="fw-bolder py-4 ms-3" style="color: white; text-decoration: none;" to="/">Only Study</router-link>
  </header>
  <div class="d-flex align-items-center justify-content-center bg-purple text-white">
      <div class="row align-items-center">
        <div class="d-none d-lg-block col-md-6 col-sm-12">
          <img src="../components/icons/Login.png" alt="Imagem de Login" style="width: 80%;">
        </div>

        <div class="col-md-6 col-sm-12">
          <CardLogin/>
        </div>
      </div>
  </div>
</template>

<style>

</style>
