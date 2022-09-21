import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const customRoutes: Array<RouteRecordRaw> = [
  {
    path: "/systemSetting/Authority/FuncManage",
    name: "FuncManage",
    meta: {
      title: "功能管理",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("@/pages/systemSetting/authority/funcManage.vue"),
  },
];
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
      ...customRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to", to);
  if (to.path === "/") next({ name: "Login" });
  else {
    next();
  }
});
export default router;
