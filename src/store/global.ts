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
          listOrder: 1,
        },
        {
          title: "系统管理",
          code: "systemSetting",
          icon: "Setting",
          listOrder: 2,
          children: [
            {
              title: "权限管理",
              code: "Authority",
              icon: "User",
              listOrder: 3,
              children: [
                {
                  title: "功能管理",
                  code: "FuncManage",
                  icon: "Tickets",
                  listOrder: 4,
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
