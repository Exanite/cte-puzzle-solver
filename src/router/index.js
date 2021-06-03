import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Scramble from "@/views/Scramble";
import Riddle from "@/views/Riddle";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/scramble",
    name: "Scramble",
    component: Scramble,
  },
  {
    path: "/riddle",
    name: "Riddle",
    component: Riddle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
