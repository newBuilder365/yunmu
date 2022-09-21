import { App } from "vue";
import * as Icons from "@element-plus/icons-vue";

const installIcon = (app: App<Element>) => {
  // 使用全部图标
  app.config.globalProperties.$icon = Icons;
};

export default installIcon;
