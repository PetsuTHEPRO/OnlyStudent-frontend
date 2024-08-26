<script setup>
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
import Classes from "@/components/ClassesResult.vue";
</script>

<template>
  <div class="container-fluid d-flex classes-view p-0">
      <SideBar />
      <div class="container-fluid margin-mobile p-0">
      <MenuBar :role="getRole()" />
      <Classes />
    </div>
  </div>
</template>

<script>
import CookiesService from "@/service/CookiesService.js";

export default {
  data() {
    return {
      role: CookiesService.getRole(),
    };
  },
  methods: {
    getRole() {
      return this.role === "educator" ? "Professor" : "Estudante";
    }
  }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

.classes-view{
  background-color: #1A001A;
  min-height: 100vh;
}

/* Media query para dispositivos móveis */
@media (max-width: 768px) {
.margin-mobile{
  margin-left: 70px;
}
}

</style>
