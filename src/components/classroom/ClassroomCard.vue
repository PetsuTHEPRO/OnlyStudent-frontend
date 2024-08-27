<script setup>
import StatusModal from "@/components/modal/StatusTurmaModal.vue";
import ConfirmarEntradaModal from "@/components/modal/ConfirmarEntradaModal.vue";
</script>
<template>
  <div class="card" :class="theme">
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title mb-0 text-ellipsis">{{ classroom.name }}</h5>
      <span class="badge" :class="statusColor">{{ classroom.status }}</span>
    </div>
    <div class="card-body">
      <p class="card-text">
        Código da Turma: {{ classroom.codigo }}
      </p>
      <p class="card-text">
        Quantidade Materiais: {{ classroom.totalMateriais }}
      </p>
      <p class="card-text">Alunos: {{ classroom.totalAlunos }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <!-- Botão de Visualizar (disponível para ambos Educator e Student) -->
      <button
        @click="viewClassroom(classroom.codigo)"
        :class="['btn rounded-circle', ((!hasJoined && userRole === 'student') || userRole !== 'educator')? 'btn-secondary' : 'btn-outline-light']"
        :disabled="(!hasJoined && userRole === 'student') || userRole !== 'educator'"
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
          @click="showModalConfirm = true"
          :disabled="hasJoined"
        >
          <i class="bi bi-door-open" style="font-size: 1.2rem"></i>
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

    <ConfirmarEntradaModal
      :visible="showModalConfirm"
      :turmaNome="classroom.name"
      :turmaCodigo="classroom.codigo"
      :idAluno="idUser"
      @close="showModalConfirm = false"
    />
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
      idUser: Cookies.getId(),
      userRole: Cookies.getRole(),
      hasJoined: false,
      showModalConfirm: false,
      classrooms: [],
      theme: Cookies.getTheme(),
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

.dark-theme .card {
  border: 1px solid #7d1479;
}

.dark-theme .card-footer {
  border-top: 1px solid #7d1479;
}

.dark-theme .card-body {
  border-top: 1px solid #7d1479;
}

.text-ellipsis {
  overflow: hidden; /* Esconde o texto que não cabe */
  white-space: nowrap; /* Impede que o texto quebre para uma nova linha */
  text-overflow: ellipsis; /* Adiciona "..." no final do texto cortado */
}

.light-theme .card{
  color: #1a1a1e !important;
}
</style>