<template>
  <div class="card bg-card text-white">
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title mb-0 text-ellipsis">{{ classroom.name }}</h5>
      <span class="badge" :class="statusColor">{{
        classroom.status
      }}</span>
    </div>
    <div class="card-body">
      <p class="card-text text-white">
        Código da Turma: {{ classroom.codigo }}
      </p>
      <p class="card-text text-white">
        Quantidade Materiais: {{ classroom.quantity }}
      </p>
      <p class="card-text text-white">Alunos: {{ classroom.alunos.length }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <router-link :to="{ name: 'classroom', params: { id: classroom.codigo } }" class="btn btn-outline-light rounded-circle">
        <i class="bi bi-pencil" style="font-size: 1.2rem"></i>
      </router-link>
      <button class="btn btn-outline-light rounded-circle">
        <i class="bi bi-gear" style="font-size: 1.2rem"></i>
        <span class="visually-hidden">Configurações</span>
      </button>
      <button class="btn btn-outline-light rounded-circle">
        <i class="bi bi-plus" style="font-size: 1.2rem"></i>
        <span class="visually-hidden">Adicionar material</span>
      </button>
    </div>
  </div>
</template>

<script>
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

.card{
  border: 1px solid #7d1479;

}

.card-footer {
  border-top: 1px solid #7d1479;
}


.card-body {
  border-top: 1px solid #7d1479;
}

.text-ellipsis {
  overflow: hidden;          /* Esconde o texto que não cabe */
  white-space: nowrap;       /* Impede que o texto quebre para uma nova linha */
  text-overflow: ellipsis;   /* Adiciona "..." no final do texto cortado */
}

</style>