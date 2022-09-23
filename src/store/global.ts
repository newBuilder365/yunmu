import { GlobalState } from "@/types/global";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global", // id必填，且需要唯一
  state: (): GlobalState => {
    return {
      menu: [
        {
          title: "首页",
          code: "home",
          icon: "HomeFilled",
          url: "/home",
        },
        {
          title: "系统管理",
          code: "systemSetting",
          icon: "Setting",
          children: [
            {
              title: "权限管理",
              code: "Authority",
              icon: "User",
              children: [
                {
                  title: "功能管理",
                  code: "FuncManage",
                  icon: "Tickets",
                  url: "/systemSetting/Authority/FuncManage",
                },
              ],
            },
          ],
        },
      ],
      isCollapse: false,
      size: "small",
    };
  },
  actions: {
    updateCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
  },
});
