<script setup>
import CardClass from "@/components/classroom/ClassroomCard.vue";
import SideBar from "@/components/SideBar.vue";
import MenuBar from "@/components/MenuBar.vue";
</script>

<template>
  <div class="d-flex flex-column bg-dark text-white">
    <div class="row">
      <div class="col-md-2 bg-purple">
        <SideBar />
      </div>
      <div class="col-md-10 ps-0">
        <main>
          <MenuBar role="Estudante"/>
          <header
            class="d-flex align-items-center justify-content-between m-4"
          >
            <h1 class="h3 fw-bold">Olá, {{ student }}</h1>
          </header>
          <section class="m-4">
            <h2 class="h4 fw-semibold mb-3">Suas turmas</h2>
            <div class="row g-3">
              <span v-if="classrooms.length === 0">Você não está em nenhuma turma.</span>
              <div
                v-else
                class="col-md-6 col-lg-4"
                v-for="classroom in classrooms"
                :key="classroom.codigo"
              >
                <CardClass :classroom="classroom" :statusColor="getStatusClass(classroom.status)"/>
              </div>
            </div>
          </section>
          <section class="m-4">
            <h2 class="h4 fw-semibold mb-3">Destaques</h2>
            <span>Em breve</span>
          </section>
          <footer class="bg-black text-white text-center py-2 text-muted mt-5">
            <p class="mb-0">&copy; 2024 Institucional. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import cookiesService from "@/service/CookiesService.js";

export default {
  data() {
    return {
      student: cookiesService.getName(),
      classrooms: [],
    };
  },
  mounted() {
    axios.getClassroomsHomeByCode(cookiesService.getId())
    .then((response) => {
      this.classrooms = response.data;
      console.log(this.classrooms);
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    getStatusClass(status) {
      return `bg-${status.toLowerCase()}`;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

h1,
h2,
h5 {
  color: white;
}

.bg-purple {
  background-color: #131212 !important;
  border-right: 2px solid #424141 !important;
}

</style>
