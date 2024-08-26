<script setup>
import CardProfile from "@/components/forms/ProfileForm.vue";
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="container-fluid d-flex student-profile-view p-0" :class="theme">
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

<script>
import cookieService from "@/service/CookiesService.js";
export default {
  data() {
    return {
      theme: cookieService.getTheme(),
    };
  },
};
</script>

<style>
.student-profile-view {
  min-height: 100vh;
}

.light-theme {
  background-color: #F5F5F7;
  color: #121214;
}

/* Tema dark */
.dark-theme {
  background-color: #121214;
  color: #F5F5F7;
}
</style>