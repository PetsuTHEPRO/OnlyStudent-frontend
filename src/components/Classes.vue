<script setup>
import CardClass from "@/components/CardClass.vue";
</script>

<template>
  <!-- Main content -->
  <div class="flex-grow-1 p-4">
    <div class="mb-4 d-flex align-items-center justify-content-between">
      <h1 class="h3">Classes</h1>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <!-- Example card item -->
      <div
          class="col-md-6 col-lg-4"
          v-for="classroom in classrooms"
          :key="classroom.codigo"
        >
        <CardClass :classroom="classroom" :statusColor="getStatusClass(classroom.status)"/>
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
import cookieService from "@/api/CookiesService.js";

export default {
  data() {
    return {
      educator: cookieService.getName(),
      showModal: false,
      statusColor: "",
      classrooms: [],
      id_educator: cookieService.getId(),
      currentPage: 0,
      totalPages: 1,
      pageSize: 12,
    };
  },
  created() {},
  mounted() {
    this.getClassroomsById(this.id_educator, this.currentPage, this.pageSize);
  },
  methods: {
    getStatusClass(status) {
      return `bg-${status.toLowerCase()}`;
    },
    handlePageChange(page) {
      this.getClassroomsById(this.id_educator, page - 1, this.pageSize); // Spring Boot pagination is 0-based
    },

    getClassroomsById(codigo, page, size) {
      axios
      .getClassroomsById(codigo, page, size)
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

body {
  margin: 0;
}
h1,
h2,
h5 {
  color: white;
}

.bg-card {
  background-color: #1a1a1e;
}

.card-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
}

.card {
  border: 1px solid #7d1479;
}

.card-footer {
  border-top: 1px solid #7d1479;
}

.card-body {
  border-top: 1px solid #7d1479;
}

.bg-educator {
  background-color: #121214 !important;
}
</style>
