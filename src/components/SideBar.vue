<template>
  <nav :class="['sidebar', { 'sidebar-closed': !isOpen }]">
    <div class="d-flex flex-column align-items-start p-3">
      <button @click="toggleSidebar" class="btn btn-secondary mb-4">
        <i :class="isOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'"></i>
      </button>
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.text">
          <a class="nav-link d-flex align-items-center" href="#">
            <i :class="item.icon"></i>
            <span v-if="isOpen" class="ms-2">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from "@/store/index.js";

export default {
  data() {
    return {
      isOpen: store.state.isSidebarOpen,
      menuItems: [
        { text: 'Dashboard', icon: 'bi bi-house' },
        { text: 'Profile', icon: 'bi bi-person' },
        { text: 'Settings', icon: 'bi bi-gear' },
        { text: 'Logout', icon: 'bi bi-box-arrow-right' },
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
  width: 250px;
  background-color: #343a40;
  color: white;
  height: 100vh;
  transition: width 0.3s ease-in-out;
  z-index: 1000;
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
  .sidebar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1050;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  }

  .sidebar.sidebar-closed {
    transform: translateX(-100%);
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-closed {
    width: 80px;
  }

  .sidebar .bi {
    font-size: 1.2rem;
  }
}
</style>
