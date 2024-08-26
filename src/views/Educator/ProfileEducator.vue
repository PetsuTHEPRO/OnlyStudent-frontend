<script setup>
import ProfileForm from "@/components/forms/ProfileForm.vue";
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="ontainer-fluid d-flex educator-profile-view p-0">
    <SideBar />
    <div class="container-fluid margin-mobile p-0">
    <MenuBar role="Professor" />
    <header class="d-flex align-items-center justify-content-between"></header>
    <ProfileForm />
  </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

.educator-profile-view {
  background-color: #1a001a;
  color: white;
  min-height: 100vh;
}

/* Media query para dispositivos móveis */
@media (max-width: 768px) {

.max-vw-100{
  width: calc(100vw - 80px);
}
}
</style>
