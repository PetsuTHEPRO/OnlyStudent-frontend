<template>
  <div class="cardTeacher">
    <div class="row">
      <div class="col-3">
        <b-image
          class="foto"
          src="https://picsum.photos/id/237/800/450.webp"
          webp-fallback=".jpg"
          ratio="16by9"
        ></b-image>
      </div>
      <div class="col-9 d-flex justify-content-between">
        <div>
          <el-avatar
            class="m-2"
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <p class="card-text">Prof. André</p>
          <p>Categoria: Enem</p>
        </div>

        <div class="block mt-3 me-4">
            <b-icon icon="account"></b-icon>
          <span>1.000</span>
          <b-icon icon="home" size="is-small"> </b-icon>
          <span>500</span>
          <b-icon icon="view-dashboard" size="is-small"> </b-icon>
          <span>1.500</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cardTeacher {
  width: 930px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #eff3f4;
}

.col-3 {
  position: relative;
  padding: 0;
}

.col-3 .foto {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>