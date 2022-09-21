import { createApp } from "vue";
import "./style.css";
import "./styles/index.css";
import App from "./App.vue";
import store from "./store";
import router from "@/router";
import installIcon from "@/icon";

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(store).use(router).use(installIcon);

// 挂载实例
app.mount("#app");
