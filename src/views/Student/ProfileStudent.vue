<script setup>
import CardProfile from "@/components/forms/ProfileForm.vue";
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="container-fluid d-flex student-profile-view p-0">
        <SideBar />
        <div class="container-fluid margin-mobile p-0">

        <MenuBar role="Estudante" />
          <header
            class="d-flex align-items-center justify-content-between"
          ></header>
          <CardProfile />
          </div>
      </div>
</template>

<style>
.student-profile-view {
  background-color: #1a001a;
  color: white;
  min-height: 100vh;
}
</style>