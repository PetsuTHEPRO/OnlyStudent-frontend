<template>
  <header
    class="d-flex align-items-center justify-content-between bg-black px-4 py-2 mb-5 mt-2 border-bottom border-top border-2 border-purple"
  >
  <!-- Botão para abrir o menu -->
  <button 
        class="d-lg-none btn btn-light me-2" 
        @click="openMenu" 
        v-if="!isMenuOpen">
        <i class="bi bi-list"></i>
      </button>
      <!-- Botão para fechar o menu -->
      <button 
        class="d-lg-none btn btn-light me-2" 
        @click="closeMenu" 
        v-if="isMenuOpen">
        <i class="bi bi-x-lg"></i>
      </button>
    <div class="d-flex align-items-center">
      <span class="h4 fw-bold mb-0 text-white">Institucional</span>
      <div
        class="ms-3 px-3 py-1 rounded-pill bg-success text-white text-xs fw-medium"
      >
        {{ role }}
      </div>
    </div>

    <div class="d-flex align-items-center">
      <div
        v-if="role !== 'Professor'"
        class="border border-2 p-1 me-3 d-none d-lg-block"
        style="border-radius: 16px"
      >
        <input
          type="text"
          class="bg-preto border border-0 text-white no-focus"
          placeholder="Pesquisar cursos..."
          aria-label="Pesquisar cursos..."
          aria-describedby="button-addon2"
        />
        <button
          class="bi bi-search text-white bg-preto border-0 me-2"
          type="button"
          id="button-addon2"
          @click="search"
        ></button>
      </div>

      <span class="bg-warning text-black px-2 py-1 rounded-pill">
        R$ {{ saldo }}
      </span>
      <button class="bi bi-bell-fill rounded-circle mx-4 text-white notificati"></button>
      <button class="btn btn-outline-light rounded-circle p-0">
        <img
          width="40"
          height="40"
          style="background-color: white; border-radius: 50%"
          :src="`https://robohash.org/${name}`"
        />
        <span class="visually-hidden">Profile</span>
      </button>
    </div>
  </header>
</template>

<script>
import CookiesService from '@/service/CookiesService';
import notificationService from '@/service/notificationService';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "MenuBar",
  props: {
    role: String,
  },
  data() {
    return {
      saldo: 0,
      name: CookiesService.getName(),
    };
  },
  computed: {
    ...mapGetters(['isMenuOpen']),
  },
  methods: {
    ...mapActions(['openMenu', 'closeMenu']),
    search() {
      notificationService.info('Em desenvolvimento.');
    },
  },
};
</script>

<style>
.menu-bar {
  max-width: 100vw;
}

.border-purple {
  border-color: #7d1479 !important;
}

.bg-preto {
  background-color: #000 !important;
}

.bg-preto::placeholder {
  color: white;
}

.no-focus:focus {
  box-shadow: none !important;
  outline: none !important;
}

.text-white {
  color: white !important;
}

input[text] {
  border-radius: 25px !important;
}

.notificati{
  padding: 6px 9px;
  border: none;
  background-color: #7d1479;
}

</style>
