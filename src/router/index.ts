import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cases/:case",
    name: "Cases",
    component: () => import('../views/CaseView.vue'),
  },
  {
    path: "/resume",
    name: "resume",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/resume.pdf";
    },
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
