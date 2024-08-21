<script setup>
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
import ClassesStudent from "@/components/ClassesStudent.vue";
</script>

<template>
  <div class="row bg-classroom min-vh-100 bg-educator">
    <div class="col-md-2 bg-purple">
      <SideBar />
    </div>
    <div class="col-md-10 ps-0">
      <MenuBar role="Estudante" />
      <ClassesStudent />
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

.bg-purple {
  background-color: #131212 !important;
  border-right: 2px solid #424141 !important;
}

</style>
