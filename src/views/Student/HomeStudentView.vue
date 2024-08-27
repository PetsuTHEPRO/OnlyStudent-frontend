<script setup>
import CardClass from "@/components/classroom/ClassroomCard.vue";
import SideBar from "@/components/SideBar.vue";
import MenuBar from "@/components/MenuBar.vue";
</script>

<template>
  <div class="container-fluid d-flex student-home-view p-0" :class="theme">
    <SideBar />
    <div class="container-fluid margin-mobile p-0">
      <MenuBar role="Estudante" />
      <main class="p-4 min-vh-100 max-vw-100">
        <header class="d-flex align-items-center justify-content-between m-4">
          <h1 class="h3 fw-bold">Olá, {{ student }}</h1>
        </header>
        <section class="m-4">
          <h2 class="h4 fw-semibold mb-3">Suas turmas</h2>
          <div class="row g-3">
            <span v-if="classrooms.length === 0"
              >Você não está em nenhuma turma.</span
            >
            <div
              v-else
              class="col-md-6 col-lg-4"
              v-for="classroom in classrooms"
              :key="classroom.codigo"
            >
              <CardClass
                :classroom="classroom"
                :statusColor="getStatusClass(classroom.status)"
              />
            </div>
          </div>
        </section>
        <section class="m-4">
          <h2 class="h4 fw-semibold mb-3">Destaques</h2>
          <div class="row g-3">
            <span v-if="classroomsDestaque.length === 0"
              >Não há turma em destaque.</span
            >
            <div
              v-else
              class="col-md-6 col-lg-4"
              v-for="classroomsDestaque in classroomsDestaque"
              :key="classroomsDestaque.codigo"
            >
              <CardClass
                :classroom="classroomsDestaque"
                :statusColor="getStatusClass(classroomsDestaque.status)"
              />
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-black text-white text-center py-2 text-muted mt-5">
        <p class="mb-0">&copy; 2024 Institucional. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import axiosService from "@/api/axios.js";
import cookiesService from "@/service/CookiesService.js";

export default {
  data() {
    return {
      theme: cookiesService.getTheme(),
      student: cookiesService.getName(),
      classrooms: [],
      classroomsDestaque: [],
      theme: cookiesService.getTheme(),
    };
  },
  mounted() {
    axiosService
      .getClassroomsHomeByCode(cookiesService.getId())
      .then((response) => {
        this.classrooms = response.data;
        console.log(this.classrooms);
      })
      .catch((error) => {
        console.log(error);
      });
    this.getClassroomDestaque();
  },
  methods: {
    getStatusClass(status) {
      return `bg-${status.toLowerCase()}`;
    },
    getClassroomDestaque() {
      axiosService
        .getClassroomsDestaque()
        .then((response) => {
          console.log("Destaque" + response.data);
          this.classroomsDestaque = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.student-home-view {
  min-height: 100vh;
}

.light-theme {
  background-color: #FFF;
  color: #121214;
}

/* Tema dark */
.dark-theme {
  background-color: #121214;
  color: #F5F5F7;
}
</style>
