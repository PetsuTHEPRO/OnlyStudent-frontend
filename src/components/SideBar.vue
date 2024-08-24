<template>
  <nav :class="['sidebar', { 'sidebar-closed': !isOpen }]">
    <div class="d-flex flex-column align-items-center p-0">
      <div class="d-flex w-100 align-items-center justify-content-around py-4">
        <h3 :class="['fw-bold fs-5', { 'd-none': !isOpen }]">Only Study</h3>
        <button @click="toggleSidebar" class="btn-sidebar d-flex align-items-center justify-content-center">
          <i :class="isOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'"></i>
        </button>
      </div>
      <ul class="nav flex-column px-2">
        <li class="nav-item" v-for="item in menuItems" :key="item.text">
          <router-link :to="`/${role}/${item.rota}`" active-class="router-link-active" class="nav-link d-flex align-items-center">
            <i :class="item.icon"></i>
            <span v-if="isOpen" class="ms-2">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from "@/store/index.js";
import Cookie from "@/service/CookiesService.js";

export default {
  data() {
    return {
      role: Cookie.getRole(),
      isOpen: store.state.isSidebarOpen,
      menuItems: [
        { text: 'Home', icon: 'bi bi-house', rota: '' },
        { text: 'Profile', icon: 'bi bi-person', rota: 'profile' },
        { text: 'Classes', icon: 'bi bi-book', rota: 'classes' },
        { text: 'Support', icon: 'bi bi-question-circle', rota: 'support' },
        { text: 'Logout', icon: 'bi bi-box-arrow-right', rota: 'logout' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      store.state.isSidebarOpen = !store.state.isSidebarOpen;
      this.isOpen = store.state.isSidebarOpen;
      console.log(this.isOpen);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #343a40;
  color: white;
  transition: width 0.3s ease-in-out;
  z-index: 1000;
}

.btn-sidebar{
    width: 43px;
    height: 43px;
    border-radius: 25%;
    border: none;
    color: white;
    background-color: #111;
}

.sidebar-closed {
  width: 80px;
}

.sidebar .nav-link {
  color: white;
}

.sidebar .nav-link:hover {
  background-color: #495057;
}

.sidebar .bi {
  font-size: 1.5rem;
}

/* Media query para dispositivos móveis */
@media (max-width: 768px) {
  
  .btn-sidebar{
    width: 30px;
    height: 30px;
    border-radius: 25%;
    border: none;
    color: white;
    background-color: #111;
  }

  .sidebar {
    width: 35%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  }

  .sidebar.sidebar-closed {
    transform: translateX(0%);
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-closed {
    width: 70px;
  }

  .sidebar .bi {
    font-size: 1.2rem;
  }
}
</style>
