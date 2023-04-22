import http from "../../axios";
// 一次性获取所有icon
export const getAllIcons = () => {
  return http.get("/main/data/icons");
};
// 获取单个icon
export const getIcon = (name: string) => {
  return http.get("/main/data/icon", { params: { name } });
};
// 获取轮播图
export const getSwiper = () => {
  return http.get("/main/data/slides");
};
