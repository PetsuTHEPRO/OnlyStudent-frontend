<template>
  <main
    class="d-flex align-items-center justify-content-center p-4 text-center card-login"
  >
    <div class="mw-md w-100 mb-4">
      <h2 class="fs-5 font-bold">
        Faça login para continuar sua jornada de aprendizado
      </h2>
      <form @submit.prevent="entrar">
        <div class="mt-4">
          <div>
            <label for="login" class="d-block text-muted fw-medium fs-sm"
              >Insira seu e-mail</label
            >
            <div class="mt-1">
              <input
                id="login"
                v-model="login"
                placeholder="E-mail"
                type="text"
                required
                class="d-block w-100 px-3 py-2 border border-2 rounded shadow-sm focus:shadow-md focus:border-purple-500 sm:text-sm text-white"
              />
            </div>
          </div>
          <div>
            <label for="password" class="d-block text-muted fw-medium fs-sm"
              >Insira sua senha</label
            >
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="Senha"
                autocomplete="current-password"
                required
                class="d-block w-100 px-3 py-2 border border-2 rounded shadow-sm focus:shadow-md focus:border-purple-500 sm:text-sm text-white"
              />
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <div class="d-flex align-items-center border border-1 rounded p-2">
            <label for="remember-me" class="d-block ml-2 text-sm"
              >Salvar senha</label
            >
            <input id="remember-me" v-model="rememberMe" type="checkbox" />
          </div>
          <div class="text-sm">
            <router-link
              to="#"
              class="font-medium text-purple-500 hover:text-purple-400"
              >Forgot your password?</router-link
            >
          </div>
        </div>
        <span style="color: red">Mensagem: {{ message }}</span>
        <button
          type="submit"
          @click="entrar()"
          class="d-flex justify-content-center px-4 py-2 mt-6 text-sm font-medium text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          CONFIRMAR
        </button>
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

export default {
  data() {
    return {
      login: "admin",
      password: "1234",
      rememberMe: false,
      message: "",
    };
  },
  methods: {
    entrar() {
      // Make a request to the backend API to verify the login credentials
      axios
        .post("/auth/login", {
          login: this.login,
          password: this.password,
        })
        .then((response) => {
          // Handle successful login response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle login error response
          this.message = error.message;
          console.error(error);
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
