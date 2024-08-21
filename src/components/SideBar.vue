<template>
  <div :class="['d-flex sidebar', { sidebarOpen: isMenuOpen }]">
    <!-- Sidebar -->
    <div class="text-white p-4 d-flex flex-column justify-content-between">
      <nav>
        <h3 class="fw-bold mb-4">Only Study</h3>
        <hr class="text-white" />
        <ul class="list-unstyled">
          <li>
            <router-link
              :to="`/${role}`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
              active-class="router-link-active"
            >
              <i class="bi bi-house-door-fill me-2"></i>
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/${role}/profile`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
              active-class="router-link-active"
            >
              <i class="bi bi-person-fill me-2"></i>
              Profile
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/${role}/classes/`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
              active-class="router-link-active"
            >
              <i class="bi bi-book-fill me-2"></i>
              My Classes
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/${role}/support/`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
              active-class="router-link-active"
            >
              <i class="bi bi-question-circle-fill me-2"></i>
              Support
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
        <hr class="text-white" />

        <a
          @click="sair()"
          class="d-flex align-items-center text-white text-decoration-none ms-1"
        >
          <i class="bi bi-box-arrow-right me-2"></i>
          Logout
        </a>
      </div>
    </div>
  </div>

  <!-- Overlay for mobile view -->
  <div
    class="overlay d-lg-none"
    :class="{ 'overlay-visible': isMenuOpen }"
    @click="toggleMenu"
  ></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Cookie from "@/api/CookiesService.js";

export default {
  data() {
    return {
      role: Cookie.getRole(),
    };
  },
  computed: {
    ...mapGetters(["isMenuOpen"]),
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    ...mapActions(["logout"]),
    sair() {
      this.logout();
      this.$router.go({ name: "home" });
    },
  },
};
</script>

<style>
.bg-pu {
  background-color: #131212 !important;
  border-right: 2px solid #424141 !important;
}
/*
.sidebar {
  position: fixed;
  height: 100vh;
 }
*/
.sidebar {
  position: fixed;
  height: 100vh;
  width: 250px; /* Largura do menu */
  transition: transform 0.3s ease;
  transform: translateX(-250px); /* Menu oculto */
  z-index: 999;
}

.sidebarOpen {
  transform: translateX(0); /* Menu visível */
}

.router-link-active {
  background-color: #7f5af0; /* Cor de fundo para o link ativo */
  border-radius: 0.25rem; /* Bordas arredondadas */
  padding: 0.3rem 0.5rem; /* Espacamento interno do link */
  color: white; /* Cor do texto do link */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-visible {
  opacity: 1;
}

.btn-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-close span {
  font-size: 1.5rem;
}


@media (width < 500px) {
  .bg-purple {
    background-color: #131212 !important;
    border-right: 2px solid #424141 !important;
  }

  .sidebar h3 {
    font-size: 1.5rem !important;
  }
}

@media (min-width: 992px) {
  .sidebar {
    transform: none;
    width: 250px;
  }

  .sidebar h3 {
    font-size: 1.5rem !important;
  }

  .overlay {
    display: none;
  }
}
</style>
