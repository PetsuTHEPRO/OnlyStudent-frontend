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
      <router-link
        :to="{ name: 'classroom', params: { id: classroom.codigo } }"
        class="btn btn-outline-light rounded-circle"
      >
        <i class="bi bi-eye" style="font-size: 1.2rem"></i>
        <span class="visually-hidden">Visualizar</span>
      </router-link>

      <!-- Botões específicos para Educator -->
      <template v-if="userRole === 'educator'">
        <button class="btn btn-outline-light rounded-circle">
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
            hasJoined ? 'btn-secondary' : 'btn-outline-light',
          ]"
          :disabled="hasJoined"
        >
          <i class="bi bi-person-plus" style="font-size: 1.2rem"></i>
          <span class="visually-hidden">Entrar</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import Axios from "@/api/axios.js";
import Cookies from "@/api/CookiesService.js";
import NotificationService from "@/api/notificationService.js";

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
      alunosIds: [],
    };
  },
  mounted() {

    if(Cookies.getRole() == 'student'){
      this.hasJoined = Axios.getIdsAlunos(this.classroom.codigo)
      .then((response) => {
          this.alunosIds = response.data; // Armazena os IDs dos alunos
          console.log(this.alunosIds);
          this.checkIfStudentHasJoined();
        }).catch((error) => {
          console.log(error);
        })
    }
  },
  methods: {
    checkIfStudentHasJoined() {
      this.alunosIds.forEach((id) => {
        if (id === Cookies.getId()) {
          console.log(id + " - " + Cookies.getId());
          this.hasJoined = true;
        }
      });
    },
    deleteClass() {
      Axios.deleteClassroom(this.classroom.codigo).then((response) => {
        if (response.status === 204) {
          NotificationService.success("Turma deletada com sucesso!");
          this.$router.push({ name: "educatorClasses" });
          // Atualize a lista de turmas ou redirecione o usuário
        }
      }).catch((error) => {
        console.log(error);
        NotificationService.error("Erro ao deletar turma!");
      })
    }
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