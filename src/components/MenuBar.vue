<template>
  <header
    class="d-flex align-items-center justify-content-between bg-black px-4 py-2 mb-5 mt-2 border-bottom border-top border-3 border-purple"
  >
    <div class="d-flex align-items-center">
      <LogInIcon class="me-2" width="32" height="32" />
      <span class="h4 fw-bold mb-0">Institucional</span>
      <div
        class="ms-3 px-3 py-1 rounded-pill bg-success text-white text-xs fw-medium"
      >
        {{ role }}
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div
        v-if="role !== 'Educador'"
        class="border border-2 p-1"
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
        ></button>
      </div>

      <button class="bi bi-bell-fill p-2 text-white mx-4"></button>
      <button class="btn btn-outline-light rounded-circle p-0">
        <img
          width="40"
          height="40"
          style="background-color: white; border-radius: 50%"
          src="https://robohash.org/profile"
        />
        <span class="visually-hidden">Profile</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    role: String,
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
</style>
