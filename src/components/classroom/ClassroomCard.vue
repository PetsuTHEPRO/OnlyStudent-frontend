<script setup>
import StatusModal from "@/components/StatusTurmaModal.vue";
</script>
<template>
  <div class="card bg-card text-white">
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title mb-0 text-ellipsis">{{ classroom.name }}</h5>
      <span class="badge" :class="statusColor">{{ classroom.status }}</span>
    </div>
    <div class="card-body">
      <p class="card-text text-white">
        Código da Turma: {{ classroom.codigo }}
      </p>
      <p class="card-text text-white">
        Quantidade Materiais: {{ classroom.totalMateriais }}
      </p>
      <p class="card-text text-white">Alunos: {{ classroom.totalAlunos }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <!-- Botão de Visualizar (disponível para ambos Educator e Student) -->
      <button
        @click="viewClassroom(classroom.codigo)"
        :class="['btn rounded-circle', (!hasJoined || userRole === 'educator')? 'btn-secondary' : 'btn-outline-light']"
        :disabled="!hasJoined || userRole === 'educator'"
      >
        <i class="bi bi-eye" style="font-size: 1.2rem"></i>
        <span class="visually-hidden">Visualizar</span>
    </button>

      <!-- Botões específicos para Educator -->
      <template v-if="userRole === 'educator'">
        <button class="btn btn-outline-light rounded-circle" @click="showModal = true">
          <i class="bi bi-gear" style="font-size: 1.2rem"></i>
          <span class="visually-hidden">Configurações</span>
        </button>
        <button class="btn btn-outline-light rounded-circle" @click="deleteClass">
          <i class="bi bi-trash" style="font-size: 1.2rem"></i>
          <span class="visually-hidden">Deletar</span>
        </button>
      </template>

      <!-- Botões específicos para Student -->
      <template v-if="userRole === 'student'">
        <button
          :class="[
            'btn',
            'rounded-circle',
            (hasJoined && userRole === 'student')? 'btn-secondary' : 'btn-outline-light',
          ]"
          :disabled="hasJoined"
        >
          <i class="bi bi-person-plus" style="font-size: 1.2rem"></i>
          <span class="visually-hidden">Entrar</span>
        </button>
      </template>
    </div>

    <!-- Modal Component -->
    <StatusModal
        :visible="showModal"
        :idTurma="classroom.codigo"
        @close="showModal = false"
        @submit="addMaterial"
      >
      <template #title>Configuração Turma</template>
    </StatusModal>
  </div>
</template>

<script>
import Axios from "@/api/axios.js";
import Cookies from "@/service/CookiesService.js";
import NotificationService from "@/service/notificationService.js";

export default {
  name: "CardClass",
  props: {
    classroom: {
      type: Object,
      required: true,
    },
    statusColor: {
      type: String,
      required: true,
    },
    student: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      userRole: Cookies.getRole(),
      hasJoined: false,
      classrooms: [],
      alunosIds: [],
      showModal: false, // Controla a visibilidade do modal
    };
  },
  mounted() {

    Axios.getClassroomsHomeByCode(Cookies.getId())
    .then((response) => {
      this.classrooms = response.data;
      for (let i = 0; i < this.classrooms.length; i++) {
        if (this.classrooms[i].codigo === this.classroom.codigo) {
          this.hasJoined = true; // Se encontrar, retorna verdadeiro
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
      deleteClass() {
      Axios.deleteClassroom(this.classroom.codigo).then((response) => {
        if (response.status === 204) {
          this.$router.push({ name: "educatorClasses" });
          NotificationService.success("Turma deletada com sucesso!");
          // Atualize a lista de turmas ou redirecione o usuário
        }
      }).catch((error) => {
        console.log(error);
        NotificationService.error("Erro ao deletar turma!");
      })
    },

    viewClassroom(classroomId) {
      // Retorna o objeto de configuração da rota
      this.$router.push({
        name: `${this.userRole}Classroom`, // Nome da rota baseado no papel do usuário
        params: { id: classroomId }        // Parâmetros da rota, neste caso o ID da turma
      });
    },
  },
};
</script>

<style scoped>
.bg-card {
  background-color: #1a1a1e;
}

.bg-ativa {
  border: 1px solid #29e0a9;
  color: #29e0a9;
}

.bg-bloqueada {
  border: 1px solid #ffcd1e;
  color: #ffcd1e;
}

.bg-desativada {
  border: 1px solid #f44336;
  color: #f44336;
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

.text-ellipsis {
  overflow: hidden; /* Esconde o texto que não cabe */
  white-space: nowrap; /* Impede que o texto quebre para uma nova linha */
  text-overflow: ellipsis; /* Adiciona "..." no final do texto cortado */
}
</style>