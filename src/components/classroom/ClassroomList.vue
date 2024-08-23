<script setup>
import CardClass from "@/components/classroom/ClassroomCard.vue";
</script>

<template>
  <!-- Main content -->
  <div class="flex-grow-1 p-4">
    <div class="mb-4 d-flex align-items-center justify-content-between">
      <h1 class="h3">Classes</h1>
      
      <button v-if="role === 'educator'" @click="createClassroom" class="btn btn-solicitar text-white">Cadastrar turma</button>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <!-- Example card item -->
      <div
          class="col-md-6 col-lg-4"
          v-for="classroom in classrooms"
          :key="classroom.codigo"
        >
        <CardClass :classroom="classroom" :student="studentAtual" :statusColor="getStatusClass(classroom.status)"/>
        </div>
      <!-- Repeat above block for each item -->
    </div>

    <!-- Pagination -->
    <nav aria-label="Page navigation" class="mt-4">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page - 1 === currentPage }"
        >
          <button
            class="page-link"
            @click="handlePageChange(page)"
            :disabled="page - 1 === currentPage"
          >
            {{ page }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import cookieService from "@/service/CookiesService.js";

export default {
  data() {
    return {
      idUser: cookieService.getId(),
      role: cookieService.getRole(),
      showModal: false,
      statusColor: "",
      classrooms: [],
      studentAtual: [],
      currentPage: 0,
      totalPages: 1,
      pageSize: 12,
      
    };
  },
  mounted() {
    this.getClassroomsById(this.idUser, this.currentPage, this.pageSize);
  },
  methods: {
    getStatusClass(status) {
      return `bg-${status.toLowerCase()}`;
    },
    handlePageChange(page) {
      this.getClassroomsById(this.idUser, page - 1, this.pageSize); // Spring Boot pagination is 0-based
    },

    createClassroom() {
      this.$router.push({ name: "createClassroom" });
    },

    getClassroomsById(codigo, page, size) {
      axios
      .getClassroomByIdOfUser(codigo, page, size, this.role)
      .then((response) => {
        this.classrooms = response.data.content;
        this.currentPage = response.data.number;
        this.totalPages = response.data.totalPages;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap");

.btn-solicitar {
  background-color: #28a745;  
}

.btn-solicitar:hover {
  background-color: #218838;
}

body {
  margin: 0;
}
h1,
h2,
h5 {
  color: white;
}

.bg-educator {
  background-color: #121214 !important;
}
</style>
