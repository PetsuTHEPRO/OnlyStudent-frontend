<template>
    <div class="container mt-4">
      <div class="row g-4">
        <div v-for="(course, index) in courses" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
          <div class="card position-relative overflow-hidden rounded">
            <img :src="course.image" :alt="course.title" class="card-img-top" />
            <div class="card-body text-white bottom-0 start-0 end-0 p-3">
              <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">{{ course.title }}</h5>
                  <span class="badge bg-success">Paid</span>
                </div>
                <p class="card-text">{{ course.instructor }}</p>
              
            </div>
            <div class="card-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark text-white d-none">
              <div class="text-center">
                <h3>{{ course.title }}</h3>
                <p>Materias: {{ course.quantity }}</p>
                <button class="btn btn-light">Join Class</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [
          {
            title: 'Web Development',
            instructor: 'John Doe',
            image: 'https://via.placeholder.com/300x200',
            quantity: '2',
            price: 'Free'
          },
          {
            title: 'UI/UX Design',
            instructor: 'Jane Smith',
            image: 'https://via.placeholder.com/300x200',
            quantity: '5',
            price: 'Free'
          },
          {
            title: 'Data Science',
            instructor: 'Michael Johnson',
            image: 'https://via.placeholder.com/300x200',
            quantity: '50'
          },
          {
            title: 'Digital Marketing',
            instructor: 'Sarah Lee',
            image: 'https://via.placeholder.com/300x200',
            quantity: '120'
          }
        ]
      }
    },
    mounted() {
      this.addHoverEffect();
    },
    methods: {
      addHoverEffect() {
        document.querySelectorAll('.card').forEach(card => {
          card.addEventListener('mouseenter', () => {
            card.querySelector('.card-overlay').classList.remove('d-none');
          });
          card.addEventListener('mouseleave', () => {
            card.querySelector('.card-overlay').classList.add('d-none');
          });
        });
      }
    }
  }
  </script>
  
  <style scoped>

  .card{
    min-height: 260px;
  }

  .card-img-top {
    transition: transform 0.3s ease;
  }
  .card:hover .card-img-top {
    transform: scale(1.05);
  }
  .card-overlay {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .card-body{
    background-color: #3D263C !important;
  }
  </style>
  