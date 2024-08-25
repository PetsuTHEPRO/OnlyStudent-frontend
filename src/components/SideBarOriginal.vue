<template>
  
  <div :class="['d-flex sidebar', { sidebarOpen: isMenuOpen }]">
    <!-- Sidebar -->
    <div class="text-white d-flex flex-column justify-content-between">
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
import Cookie from "@/service/CookiesService.js";

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

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li>
      <a class="dropdown-item {{ isActive('home') }}" href="/home">
        <i class="bi bi-house-door"></i> Home
      </a>
    </li>
    <li>
      <a class="dropdown-item {{ isActive('profile') }}" href="/profile">
        <i class="bi bi-person"></i> Profile
      </a>
    </li>
    <li>
      <a class="dropdown-item {{ isActive('minhas-turmas') }}" href="/minhas-turmas">
        <i class="bi bi-book"></i> Minhas Turmas
      </a>
    </li>
    <li>
      <a class="dropdown-item {{ isActive('suporte') }}" href="/suporte">
        <i class="bi bi-question-circle"></i> Suporte
      </a>
    </li>
    <li>
      <hr class="dropdown-divider">
    </li>
    <li>
      <a class="dropdown-item" href="/logout">
        <i class="bi bi-box-arrow-right"></i> Logout
      </a>
    </li>
  </ul>
</div>


<style>

.sidebar {
  background-color: #7d1479;
  position: fixed;
  height: 100vh;
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

/* Extra Small Devices (phones, 0px to 575px) */
@media (max-width: 575.98px) {
  .bg-purple {
    background-color: #131212 !important;
    border-right: 2px solid #424141 !important;
  }

  .sidebar h3 {
    font-size: 1.25rem !important;
  }

  .sidebar {
  }

  .overlay {
    display: block;
  }
}

/* Small Devices (phones in landscape, 576px to 767px) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .bg-purple {
    background-color: #1e1e1e !important;
    border-right: 2px solid #555555 !important;
  }

  .sidebar h3 {
    font-size: 1.35rem !important;
  }

  .sidebar {
  }

  .overlay {
    display: block;
  }
}

/* Medium Devices (tablets, 768px to 991px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .bg-purple {
    background-color: #2c2c2c !important;
    border-right: 2px solid #666666 !important;
  }

  .sidebar h3 {
    font-size: 1.4rem !important;
  }

  .sidebar {
  }

  .overlay {
    display: block;
  }
}

/* Large Devices (desktops, 992px to 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .sidebar {
    transform: none;
  }

  .sidebar h3 {
    font-size: 1.5rem !important;
  }

  .overlay {
    display: none;
  }
}

/* Extra Large Devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .sidebar {
    width: 219px;
    padding-left: 30px;
    transform: none;
  }

  .sidebar h3 {
    font-size: 1.6rem !important;
  }

  .overlay {
    display: none;
  }
}

</style>
