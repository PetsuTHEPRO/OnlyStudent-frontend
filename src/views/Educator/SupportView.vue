<script setup>
import MenuBar from "../../components/MenuBar.vue";
import SideBar from "../../components/SideBar.vue";
import CardSuport from "../../components/CardSuport.vue";
</script>

<template>
      <div class="d-flex flex-column bg-educator text-white">
    <div class="row  min-vh-100">
      <div class="col-md-2 bg-purple">
        <SideBar />
      </div>
      <div class="col-md-10 ps-0 d-flex flex-column">
        <MenuBar role="Educador" />
        <CardSuport />
        <footer class="footer bg-black text-center py-2 text-white">
          <p class="mb-0">&copy; 2024 Institucional. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

body {
  margin: 0;
}
h1,
h2,
h5 {
  color: white;
}

.bg-educator{
  background-color: #121214 !important;
}

</style>