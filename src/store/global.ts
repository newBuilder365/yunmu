import { GlobalState } from "@/types/global";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global", // id必填，且需要唯一
  state: (): GlobalState => {
    return {
      menu: [
        {
          title: "系统设置",
          code: "systemSetting",
          icon: "Location",
          children: [
            { title: "角色管理", code: "role", icon: "User" },
            {
              title: "资源管理",
              code: "res",
              icon: "User",
              children: [
                {
                  title: "测试第三级",
                  code: "test2",
                  icon: "User",
                },
                {
                  title: "测试第三级2",
                  code: "test3",
                  icon: "User",
                  children: [
                    { title: "测试第四级", code: "test4", icon: "Location" },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "任务管理",
          code: "taskManage",
          icon: "Menu",
          children: [
            {
              title: "测试1",
              code: "test1",
              icon: "Location",
              children: [
                {
                  title: "测试第三级2",
                  code: "test22",
                  icon: "User",
                },
                {
                  title: "测试第三级22",
                  code: "test32",
                  icon: "User",
                  children: [
                    { title: "测试第四级", code: "test4", icon: "Location" },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "测试",
          code: "ceshi",
          icon: "Menu",
          children: [
            {
              title: "测试1",
              code: "ceshi1",
              icon: "Location",
              children: [
                {
                  title: "测试第三级2",
                  code: "ceshi22",
                  icon: "User",
                },
                {
                  title: "测试第三级22",
                  code: "ceshi32",
                  icon: "User",
                  children: [
                    { title: "测试第四级", code: "ceshi44", icon: "Location" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      isCollapse: false,
    };
  },
  actions: {
    updateCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
  },
});
