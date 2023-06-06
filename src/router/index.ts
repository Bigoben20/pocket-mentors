import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mentors from "../views/Mentors.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/mentors",
      name: "Mentors",
      component: Mentors,
    },
  ],
});

export default router;
