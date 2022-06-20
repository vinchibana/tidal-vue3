import { createRouter, createWebHashHistory } from "vue-router";
import Recommend from "@/views/recommend";
import Singer from "@/views/singer";
import Search from "@/views/search";
import TopList from "@/views/top-list";

const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    component: Recommend,
  },
  {
    path: "/singer",
    component: Singer,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/top-list",
    component: TopList,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
