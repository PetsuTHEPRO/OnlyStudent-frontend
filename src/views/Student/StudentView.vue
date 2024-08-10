<script setup>
import Card from "../../components/Card.vue";
import SideBar from "../../components/SideBar.vue";
import MenuBar from "../../components/MenuBar.vue";
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
            <button class="btn btn-success">Indique e ganhe</button>
          </header>
          <section class="m-4">
            <h2 class="h4 fw-semibold mb-3">Recomendado para você</h2>
            <Card />
          </section>
          <section class="m-4">
            <h2 class="h4 fw-semibold mb-3">Destaques</h2>
            <div class="row g-3">
              <div
                class="col-md-6 col-lg-4"
                v-for="course in highlightedCourses"
                :key="course.id"
              >
                <div class="card bg-secondary text-white">
                  <div class="card-header d-flex justify-content-between">
                    <h5 class="card-title mb-0">{{ course.title }}</h5>
                    <span class="badge bg-secondary">{{ course.price }}</span>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-muted">
                      Curso - {{ course.duration }}
                    </p>
                    <p class="card-text text-muted">
                      Turma: {{ course.level }}
                    </p>
                    <p class="card-text text-muted">
                      Professor: {{ course.teacher }}
                    </p>
                    <div class="d-flex flex-wrap gap-2 mt-2">
                      <span
                        class="badge bg-light text-dark"
                        v-for="tag in course.tags"
                        :key="tag"
                        >{{ tag }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import cookiesService from "../../api/CookiesService";

export default {
  data() {
    return {
      student: cookiesService.getName(),
      recommendedCourses: [
        {
          id: 1,
          title: "Discover",
          price: "GRÁTIS",
          duration: "nullh",
          level: "Iniciante",
          teacher: "João Silva",
          tags: ["INICIANTE", "JAVASCRIPT", "FRONTEND"],
        },
        {
          id: 2,
          title: "Full-Stack",
          price: "PAGO",
          duration: "nullh",
          level: "Iniciante",
          teacher: "Maria Oliveira",
          tags: ["INICIANTE", "JAVASCRIPT", "REACT"],
        },
        {
          id: 3,
          title: "Node.js",
          price: "PAGO",
          duration: "50h",
          level: "Intermediário",
          teacher: "Pedro Souza",
          tags: ["INTERMEDIÁRIO", "NODEJS", "JAVASCRIPT"],
        },
      ],
      highlightedCourses: [
        {
          id: 4,
          title: "Curso de Python",
          price: "PAGO",
          duration: "30h",
          level: "Iniciante",
          teacher: "Ana Pereira",
          tags: ["INICIANTE", "PYTHON", "BACKEND"],
        },
        {
          id: 5,
          title: "Curso de Data Science",
          price: "PAGO",
          duration: "40h",
          level: "Intermediário",
          teacher: "Lucas Fernandes",
          tags: ["INTERMEDIÁRIO", "DATA SCIENCE", "PYTHON"],
        },
        {
          id: 6,
          title: "Curso de DevOps",
          price: "PAGO",
          duration: "45h",
          level: "Avançado",
          teacher: "Mariana Costa",
          tags: ["AVANÇADO", "DEVOPS", "CLOUD"],
        },
      ],
    };
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
</style>
