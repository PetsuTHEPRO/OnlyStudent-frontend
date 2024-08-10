<template>
    <div>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle">Profile</h5>
              <button type="button" class="btn-close" @click="showModal = false" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="d-flex align-items-center gap-4">
                <div class="bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center" style="width: 64px; height: 64px; font-size: 24px; font-weight: bold;">
                  JD
                </div>
                <div>
                  <div class="h5">John Doe</div>
                  <div class="text-warning">@johndoe</div>
                </div>
              </div>
              <hr class="my-4" />
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-outline-light text-start" @click="settings">Settings</button>
                <button type="button" class="btn btn-outline-light text-start" @click="logout">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="modal-backdrop fade show" @click="showModal = false"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Modal",
    props: {
      showModal: Boolean,
    },
  };
  </script>
  
  <style scoped>
  .modal-content {
    background-color: #1a001a;
  }
  </style>
  