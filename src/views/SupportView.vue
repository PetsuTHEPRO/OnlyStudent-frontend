<script setup>
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
import CardSuport from "@/components/SupportRequest.vue";
</script>

<template>
      <div class="d-flex flex-column text-white">
    <div class="row  min-vh-100">
      <div class="col-md-2 bg-purple">
        <SideBar />
      </div>
      <div class="col-md-10 ps-0 d-flex flex-column">
        <MenuBar :role="getRole()" />
        <CardSuport />
        <footer class="footer bg-black text-center py-2 text-white">
          <p class="mb-0">&copy; 2024 Institucional. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import CookiesService from "@/service/CookiesService.js";

export default {
  name: "SupportView",
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

</style>