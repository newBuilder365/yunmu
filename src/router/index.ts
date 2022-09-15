import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Index",
        meta: {
          title: "首页",
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import("@/pages/home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
