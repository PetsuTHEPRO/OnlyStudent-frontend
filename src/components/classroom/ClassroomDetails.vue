<script setup>
import Modal from "@/components/modal/MaterialModal.vue";
import MaterialIcon from "@/components/MaterialIcon.vue";
</script>

<template>
  <div class="p-4">
    <!-- Verifica se ocorreu um erro -->
    <div v-if="error" class="alert alert-danger" role="alert">
      Turma não encontrada. Error 404
    </div>
    <!-- Verifica se os dados da turma estão disponíveis -->
    <div v-else>
      <h2 class="h4 fw-bold text-white">{{ classroom.name }}</h2>
      <p class="small text-white">Instructor: {{ classroom.educator }}</p>
      <div class="my-4 border-top separator"></div>

      <ul class="nav nav-tabs separator">
        <li class="nav-item">
          <button
            class="nav-link text-white"
            :class="{ active: activeTab === 'students' }"
            @click="setActiveTab('students')"
          >
            Students
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link text-white"
            :class="{ active: activeTab === 'about' }"
            @click="setActiveTab('about')"
          >
            About
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link text-white"
            :class="{ active: activeTab === 'materials' }"
            @click="setActiveTab('materials')"
          >
            Materials
          </button>
        </li>
      </ul>

      <div class="tab-content mt-3">
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'students' }"
        >
          <h3 class="h6 fw-semibold text-white">Students</h3>
          <ul class="list-unstyled">
            <!-- Verifica se a lista de alunos está vazia -->
            <template v-if="classroom.nomeAlunos">
              <li class="text-muted text-white">No students available</li>
            </template>
            <template v-else>
              <li
                v-for="aluno in classroom.nomeAlunos"
                :key="aluno.id"
                class="d-flex align-items-center mb-2 text-white"
              >
                <i class="bi bi-person me-2 text-white" style="font-size: 1.5rem"></i>
                <span class="text-white">{{ aluno }}</span>
              </li>
            </template>
            
          </ul>
        </div>

        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'about' }"
        >
          <h3 class="h6 fw-semibold text-white">About</h3>
          <p class="text-muted small text-white">{{ classroom.description }}</p>
        </div>

        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'materials' }"
        >
          <div class="d-flex justify-content-between">
            <h3 class="h6 fw-semibold text-white">Materials</h3>
            <button class="btn btn-primary btn-sm" @click="showModal = true" v-if="userRole === 'educator'">
              Add Material
            </button>
          </div>
          <ul class="list-unstyled">
            <!-- Verifica se a lista de materiais está vazia -->
            <template v-if="classroom.materiais === null || classroom.materiais === undefined">
              <li class="text-muted text-white">No materials available</li>
            </template>
            <!-- Lista os materiais se existirem -->
            <template v-else>
              <li
                v-for="material in classroom.materiais"
                :key="material.id"
                class="d-flex align-items-center mb-2"
              >
                <!-- Utiliza o componente MaterialIcon -->
                <MaterialIcon :tipo="material.tipo" />
                <a class="ms-2 text-decoration-none" target="_blank" :href="material.url.startsWith('http://') || material.url.startsWith('https://') ? material.url : 'https://' + material.url">{{ material.name }}</a>
              </li>
            </template>
          </ul>
          <!-- Modal Component -->
          <Modal
            :visible="showModal"
            :codigoTurma="classroom.codigo"
            @close="showModal = false"
            @submit="addMaterial"
          >
            <template #title>Adicionar Material</template>
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import notificationService from "@/service/notificationService.js";
import CookiesService from "@/service/CookiesService";

export default {
  data() {
    return {
      classroom: [],
      userRole: CookiesService.getRole(),
      showModal: false, // Controla a visibilidade do modal
      activeTab: "students",
      error: false,
    };
  },
  created() {
    this.getTurma(this.$route.params.id)
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getTurma(codigo) {
        axios
        .getClassroomById(codigo)
        .then((response) => {
          this.classroom = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addMaterial(material) {
      material.turmaCodigo = this.classroom.codigo;
      console.log(this.classroom.codigo);
      console.log("Material recebido:", material);
      axios
        .setMaterialsByClassroomCode(material)
        .then((response) => {
          notificationService.success("Material adicionado com sucesso!");
          console.log(response.data);
          this.atualizarMaterial();
        })
        .catch((error) => {
          console.log(error);
        });
      // Aqui você pode enviar o material para o servidor
    },

  },
};
</script>

<style scoped>
.separator{
  border-color: #7D1479 !important;
}

.nav-tabs .nav-link.active {
  background-color: #7D1479 !important;
  border-color: #7D1479 !important;
}

.nav-tabs .nav-link:hover {
  background-color: #9747ff !important;
  border-color: #9747ff !important;
}

.active{
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>