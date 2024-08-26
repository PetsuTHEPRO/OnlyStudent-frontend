<script setup>
import ClassroomDetails from "@/components/classroom/ClassroomDetails.vue";
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="container-fluid d-flex classe-list-view p-0">
      <SideBar />
      <div class="container-fluid margin-mobile p-0">
        <MenuBar role="Professor" />
        <ClassroomDetails />
      </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

.classe-list-view {
  background-color: #1a001a;
  color: white;
  min-height: 100vh;
}

@media (max-width: 768px) {

.max-vw-100{
  width: calc(100vw - 80px);
}
}
</style>