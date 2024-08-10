<template>
  <div class="d-flex sidebar">
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
            >
              <i class="bi bi-house-door-fill me-2"></i>
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/${role}/profile`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
            >
              <i class="bi bi-person-fill me-2"></i>
              Profile
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/${role}/classes/`"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
            >
              <i class="bi bi-book-fill me-2"></i>
              My Classes
            </router-link>
          </li>
          <li>
            <router-link
              to="/support"
              class="d-flex align-items-center text-white text-decoration-none mb-3"
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
</template>

<script>
import { mapActions } from "vuex";
import Cookie from "@/api/CookiesService.js";

export default {
  data() {
    return {
      role: Cookie.getRole(),
    };
  },
  methods: {
    ...mapActions(["logout"]),
    sair() {
      this.logout();
      this.$router.go(0);
    },
  },
};
</script>

<style>
.bg-purple {
  background-color: #1a001a;
}

.sidebar {
  position: fixed;
  height: 100vh;
}
</style>
