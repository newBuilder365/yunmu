import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global", // id必填，且需要唯一
  state: () => {
    return {
      menu: [
        {
          title: "系统设置",
          code: "systemSetting",
          icon: "Location",
        },
        {
          title: "任务管理",
          code: "taskManage",
          icon: "Menu",
        },
      ],
    };
  },
  actions: {},
});
