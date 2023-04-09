import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userInfo: {
      username: "",
      avatar: "",
      email: "",
    },
    IsLogin: false,
  }),
  actions: {
    loginOut() {
      this.IsLogin = false;
      this.userInfo = {
        username: "",
        avatar: "",
        email: "",
      };
    },
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  },
});
