<script setup>
import MenuBar from "../../components/MenuBar.vue";
import SideBar from "../../components/SideBar.vue";
import CardClass from "../../components/CardClass.vue";
</script>

<template>
  <div class="d-flex flex-column bg-educator text-white">
    <div class="row  min-vh-100">
      <div class="col-md-2 bg-purple">
        <SideBar />
      </div>
      <div class="col-md-10 ps-0">
        <MenuBar role="Educador" />
        <main class="flex-grow-1 p-4">
          <header
            class="d-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 fw-bold">Olá, {{ educator }}</h1>
            <button @click="createClassroom" class="btn btn-success">Criar nova turma</button>
          </header>
          <section>
            <h2 class="h4 fw-semibold mb-3">Suas turmas</h2>
            <div class="row g-3">
              <div
                class="col-md-6 col-lg-4"
                v-for="classroom in classrooms"
                :key="classroom.codigo"
              >
                <CardClass :classroom="classroom" :statusColor="getStatusClass(classroom.status)"/>
              </div>
            </div>
          </section>
        </main>

        <footer class="bg-black text-center py-2 text-white">
          <p class="mb-0">&copy; 2024 Institucional. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../api/axios.js";
import cookieService from "../../api/CookiesService.js";

export default {
  data() {
    return {
      educator: cookieService.getName(),
      showModal: false,
      statusColor: "",
      classrooms: [],
      id_educator: cookieService.getId(),
    };
  },
  created() {

  },
  mounted() {
    axios.getClassrooms(this.id_educator)
    .then((response) => {
      this.classrooms = response.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    logout() {
      cookieService.clearAll();
      this.$router.push({ name: "login" });
    },
    getStatusClass(status) {
      return `bg-${status.toLowerCase()}`;
    },
    createClassroom() {
      this.$router.push({ name: "createClassroom" });
    },
  },
};
</script>

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
