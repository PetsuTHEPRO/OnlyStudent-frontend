<!-- src/components/NotFound.vue ou src/views/NotFound.vue -->
<template>
    <div class="not-found bg-purple">
      <h1>Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <router-link to="/">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound"
  };
  </script>
  
  <style scoped>

.bg-purple{
  background-color: #1A001A;
}

  .not-found {
    text-align: center;
    color: white;
    margin-top: 50px;
  }
  
  .not-found h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .not-found p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .not-found a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  