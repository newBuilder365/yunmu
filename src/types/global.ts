// 全局状态
export interface GlobalState {
  menu: MenuItem[];
  isCollapse: boolean; //菜单栏展开收缩
  size: string; //整体样式尺寸
}
// 菜单项字段
export interface MenuItem {
  title: string;
  code: string;
  icon?: string;
  url?: string;
  listOrder: number;
  children?: MenuItem[];
}
