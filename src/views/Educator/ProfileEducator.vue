<script setup>
import ProfileForm from "@/components/forms/ProfileForm.vue";
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="ontainer-fluid d-flex educator-profile-view p-0" :class="theme">
    <SideBar />
    <div class="container-fluid margin-mobile p-0">
    <MenuBar role="Professor" />
    <header class="d-flex align-items-center justify-content-between"></header>
    <ProfileForm />
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

.educator-profile-view {
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


/* Media query para dispositivos móveis */
@media (max-width: 768px) {

.max-vw-100{
  width: calc(100vw - 80px);
}
}
</style>
