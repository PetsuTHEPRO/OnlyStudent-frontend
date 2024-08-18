<template>
  <div class="d-flex flex-column mx-5 mb-5">
    <div class="mb-4 d-flex align-items-center justify-content-between">
      <h1 class="h3 fw-bold">Suporte</h1>
    </div>
    <div class="card w-100 max-w-xl bg-card">
      <div class="card-header d-flex flex-column">
        <h5 class="card-title text-white">Formulário de Suporte</h5>
        <p class="card-text text-white">
          Preencha o formulário abaixo para nos ajudar.
        </p>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitSupportRequest" class="row g-3">
          <div class="col-12">
            <label for="email" class="form-label text-white">Email</label>
            <input
              v-model="support.email"
              type="email"
              class="form-control input-text"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="col-12">
            <label for="phone" class="form-label text-white">Phone</label>
            <input
              v-model="support.phone"
              type="tel"
              class="form-control input-text"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div class="col-12">
            <label for="reason" class="form-label text-white">Reason for Support</label>
            <select v-model="support.razao" id="reason" class="form-select text-white input-text">
              <option value="" disabled selected>Select reason</option>
              <option value="bugs">Bugs e Glitchs</option>
              <option value="payment">Falhas no Pagamento</option>
              <option value="suggestions">Sugestões</option>
              <option value="access">Problemas de Acesso</option>
              <option value="functionality">Dúvidas sobre Funcionalidades</option>
              <option value="security">Questões de Segurança</option>
              <option value="performance">Problemas de Desempenho</option>
            </select>
          </div>

          <div class="col-12">
            <label for="description" class="form-label text-white">Description</label>
            <textarea
              v-model="support.descricao"
              id="description"
              class="form-control input-text"
              rows="4"
              placeholder="Provide more details about your issue or request"
            ></textarea>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button 
              type="submit" 
              class="btn btn-solicitar" 
              :disabled="isDisabled"
            >
              <span v-if="isLoading">
                <i class="spinner-border spinner-border-sm" role="status"></i>
                Enviando...
              </span>
              <span v-else>
                Mandar solicitação
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import CookiesService from "@/api/CookiesService";
import notificationService from '@/api/notificationService.js'

export default {
  data() {
    return {
      support: {
        name: CookiesService.getName(),
        email: "",
        phone: "",
        razao: "",
        descricao: ""
      },
      isLoading: false,
      isDisabled: false,
    };
  },
  methods: {
    validateForm() {
      if (!this.support.email) {
        notificationService.error('Preencha o campo email.');
        return false;
      }
      if (!this.support.phone) {
        notificationService.error('Preencha o campo telefone.');
        return false;
      }
      if (!this.support.razao) {
        notificationService.error('Selecione a razão do suporte.');
        return false;
      }
      if (!this.support.descricao) {
        notificationService.error('Preencha a descrição.');
        return false;
      }
      return true;
    },

    submitSupportRequest() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true;
      this.isDisabled = true;
      
      axios.sendEmail(this.support)
        .then(() => {
          notificationService.success("Suporte solicitado com sucesso!");
          this.isLoading = false;
          this.isDisabled = false;
        })
        .catch((error) => {
          if (error.response) {
            notificationService.error(error.response.data);
          } else {
            notificationService.error("Servidor Offline, entre em contato com a equipe técnica!");
          }
          this.isLoading = false;
          this.isDisabled = false;
        });
    },
  },
};
</script>

<style scoped>

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

.input-text {
  background-color: #323232 !important;
  color: #fff !important;
}

.input-text::placeholder {
  color: #5e5e5e !important;
}

</style>