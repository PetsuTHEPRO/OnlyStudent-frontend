<script setup>
import CardProfile from "../../components/CardProfile.vue";
import MenuBar from "../../components/MenuBar.vue";
import SideBar from "../../components/SideBar.vue";
</script>

<template>
  <div class="d-flex flex-column bg-educator text-white">
    <div class="row min-vh-100">
      <div class="col-md-2 bg-purple">
        <SideBar />
      </div>
      <div class="col-md-10 p-0 m-0">
        <MenuBar role="Educador" /> 
          <header
            class="d-flex align-items-center justify-content-between"
          ></header>
          <CardProfile />
      </div>
    </div>
  </div>
</template>

<style>
.bg-educator {
  background-color: #121214;
}
</style>