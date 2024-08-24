<script setup>
import MenuBar from "@/components/MenuBar.vue";
import SideBar from "@/components/SideBar.vue";
import Classes from "@/components/classroom/ClassroomList.vue";
</script>

<template>
  <div class="row bg-classroom min-vh-100 bg-educator">
    <div class="col-md-2 bg-purple">
      <SideBar />
    </div>
    <div class="col-md-10 ps-0">
      <MenuBar :role="getRole()" />
      <Classes />
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
