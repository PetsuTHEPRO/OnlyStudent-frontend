<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://via.placeholder.com/1040x460" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="http://via.placeholder.com/1040x460" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="http://via.placeholder.com/1040x460" class="d-block" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script></script>

<style scoped>

#carouselExample {
  width: 1040px;
  height: auto;
}

</style>
