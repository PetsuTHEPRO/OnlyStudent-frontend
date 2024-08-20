<template>

  <main
    class="d-flex align-items-center justify-content-center p-4 text-center card-login"
  >
    <div class="mw-md w-100">
      <h2 class="fs-5 font-bold">
        Faça login para continuar sua jornada de aprendizado
      </h2>
      <form @submit.prevent="entrar">
        <div class="mt-4">
          <div>
            <label for="login" class="d-block fw-medium fs-sm text-white"
              >Insira seu e-mail</label
            >
            <div class="mt-1">
              <input
                id="email"
                v-model="user.email"
                placeholder="E-mail"
                type="email"
                required
                class="d-block w-100 px-3 py-2 border border-2 rounded shadow-sm focus:shadow-md focus:border-purple-500 sm:text-sm text-white"
              />
            </div>
          </div>
          <div>
            <label for="password" class="d-block text-white fw-medium fs-sm mt-3"
              >Insira sua senha</label
            >
            <div class="mt-1">
              <input
                id="password"
                v-model="user.password"
                type="password"
                placeholder="Senha"
                autocomplete="current-password"
                required
                class="d-block w-100 px-3 py-2 border border-2 rounded shadow-sm focus:shadow-md focus:border-purple-500 sm:text-sm text-white"
              />
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-4">
          <div class="d-flex align-items-center border border-1 rounded p-2">
            <label for="remember-me" class="d-block mx-2 text-sm"
              >Salvar senha</label
            >
            <input id="remember-me" v-model="rememberMe" type="checkbox" />
          </div>
          <div class="text-sm">
            <router-link
              to="#"
              class="font-medium text-purple text-decoration-none fw-bolder"
              >Forgot your password?</router-link
            >
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-4">
          <button
          type="submit"
          class="d-flex justify-content-center px-4 py-2 mt-3 text-sm font-medium text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
          CONFIRMAR
        </button>
      </div>
        <div class="d-flex align-items-center">
          <hr class="flex-grow-1 border border-white" />
          <div class="text-white mx-4">Outras opções de login</div>
          <hr class="flex-grow-1 border border-light" />
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "../api/axios.js";
import notificationService from '../api/notificationService.js'
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      rememberMe: false,
    };
  },
  methods: {
    ...mapActions(['login']),
    entrar() {
      // Make a request to the backend API to verify the login credentials
      axios.loginUser(this.user)
        .then((response) => {
          // Handle successful login response
          const { token, email, role, name, id } = response.data;
          
          this.login({ token: token, email: email, role: role, name: name, id: id });
          notificationService.success("Bem vindo!");
          this.$router.push({ name: role === "student" ? "student" : "educator" });
        })
        .catch((error) => {
          // Handle login error response
          if (error) {
            // O servidor respondeu com um status fora do intervalo 2xx
            notificationService.error(error);
            console.log(error);
          }else{ 
            notificationService.error("Servidor Offline, entre em contato a equipe técnica!");
          }
        });
    },
  },
};
</script>

<style>
button {
  background-color: #4f0f4c;
  border-radius: 12px;
  border: none;
  color: white;
  font-weight: bolder;
}

button:hover {
  background-color: #9747ff;
}

input[type="checkbox"] {
  background-color: #000 !important;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #7d1479;
  border-radius: 50px !important;
}

.rounded {
  border-radius: 10px !important;
}

.min-h-screen {
  min-height: 100vh;
}

.bg-purple {
  background-color: #1a001a;
}

.text-purple{
  color: #9080FC;
}

.text-purple:hover{
  color: #8850F7;
}

.card-login {
  border: 2px solid;
  border-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 165, 0, 1) 20%,
      rgba(255, 255, 0, 1) 40%,
      rgba(0, 128, 0, 1) 60%,
      rgba(0, 0, 255, 1) 80%,
      rgba(75, 0, 130, 1) 100%
    )
    1;
  border-radius: 25px;
  background-color: #000;
}

input {
  background-color: #323232;
}
</style>
