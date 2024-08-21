import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/student",
      name: "student",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Student/StudentView.vue"),
      meta: {
        requiresAuth: true,
        role: "student",
      },
    },
    {
      path: "/educator",
      name: "educator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Educator/EducatorView.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },
    {
      path: "/educator/createClassroom",
      name: "createClassroom",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Educator/CreateClassroom.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },
    {
      path: "/educator/profile",
      name: "profileEducator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Educator/ProfileEducator.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },
    {
      path: "/student/profile",
      name: "profileStudent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Student/ProfileStudent.vue"),
      meta: {
        requiresAuth: true,
        role: "student",
      },
    },
    {
      path: "/educator/classes",
      name: "educatorClasses",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Educator/ClassesView.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },
    {
      path: "/student/classes",
      name: "studentClasses",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Student/ClassesStudentView.vue"),
      meta: {
        requiresAuth: true,
        role: "student",
      },
    },
    {
      path: "/educator/support",
      name: "support",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Educator/SupportView.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },
    {
      path: "/student/support",
      name: "supportStudent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Student/SupportStudentView.vue"),
      meta: {
        requiresAuth: true,
        role: "student",
      },
    },
    {
      path: "/educator/classroom/:id",
      name: "classroom",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Classes/ClasseView.vue"),
      meta: {
        requiresAuth: true,
        role: "educator",
      },
    },

    {
      path: "/student/classroom/:id",
      name: "classroomStudent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Classes/ClasseView.vue"),
      meta: {
        requiresAuth: true,
        role: "student",
      },
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ name: "login" });
    } else if (to.meta.role && to.meta.role !== store.getters.userRole) {
      switch (userRole) {

        case "student":
          next({ name: "student" });
          break;

        case "educator":
          next({ name: "educator" });
          break;

        case "admin":
          next({ name: "admin" });
          break;

        default:
          next({ name: "home" });
          break;
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

// Adicione uma rota de redirecionamento padrão para usuários autenticados
router.beforeEach((to, from, next) => {
  if (to.name === 'login' && store.getters.isAuthenticated) {
    const userRole = store.getters.userRole;
    if (userRole === 'admin') {
      next({ name: 'admin' });
    } else if (userRole === 'student') {
      next({ name: 'student' });
    } else if (userRole === 'educator') {
      next({ name: 'educator' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
