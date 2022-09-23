import { createApp } from "vue";
import STable from "@surely-vue/table";
import "./style.css";
import "./styles/index.css";
import "@surely-vue/table/dist/index.less";
import App from "./App.vue";
import store from "./store";
import router from "@/router";
import installIcon from "@/icon";

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(store).use(router).use(installIcon).use(STable);

// 挂载实例
app.mount("#app");
