<template>
  <div class="flex-1 px-6 bg-profile">
    <div class="mb-4">
      <div class="d-flex align-items-center justify-content-between">
        <h1 class="h2 fw-bold">Profile</h1>
        <button class="btn btn-secondary" @click="toggleEdit">Edit Profile</button>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center gap-3">
            <div class="avatar">
              <img
                alt="@shadcn"
                class="rounded-circle"
                width="50"
                height="50"
                style="
                  background-color: white;
                  border-radius: 50%;
                  border: 1px solid black;
                "
                src="https://robohash.org/profile"
              />
            </div>
            <div>
              <h3 class="h5 fw-semibold">{{ user.name }}</h3>
              <p class="text-muted">{{ user.login }}</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="user.name"
              :disabled="!isEditing"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="user.login"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              disabled
              class="form-control"
              id="password"
              value="*********"
            />
          </div>
          <div class="mb-3" v-if="role === 'educator'">
            <label for="specialty" class="form-label">Especialidade</label>
            <input
              type="text"
              class="form-control"
              id="specialty"
              v-model="user.especialidade"
              :disabled="!isEditing"
            />
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-primary" @click="saveChanges" :disabled="!isEditing">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CookiesService from "@/api/CookiesService.js";
import axios from "@/api/axios.js";

export default {
  data() {
    return {
      isEditing: false,
      user: {},
      role: CookiesService.getRole(),
    };
  },
  created() {
    axios
      .getUser(CookiesService.getId(), CookiesService.getRole())
      .then((response) => {
        this.user = response.data;
      });
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) {
        // Salvar as mudanças quando sair do modo de edição
        this.saveChanges();
      }
    },
    saveChanges() {
      // Aqui você pode adicionar a lógica para salvar as alterações, como uma chamada de API
      console.log("Profile saved", this.profile);
    },
  },
};
</script>

<style></style>
