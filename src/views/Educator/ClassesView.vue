<script setup>
import MenuBar from "../../components/MenuBar.vue";
import SideBar from "../../components/SideBar.vue";
import Classes from "../../components/Classes.vue";
</script>

<template>
  <div class="row bg-classroom min-vh-100">
    <div class="col-md-2 bg-purple">
      <SideBar />
    </div>
    <div class="col-md-10 ps-0">
      <MenuBar role="Educador" />
      <Classes />
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import notificationService from "@/api/notificationService.js";
import Cookies from "@/api/CookiesService.js";

export default {
  data() {
    return {
      
    };
  },
  mounted() {
   
  },
  methods: {
    
  },
};
</script>

<style>

</style>
