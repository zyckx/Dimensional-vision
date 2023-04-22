<template>
  <header :class="{ header_fixed: headerIsFixed }">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/logo.png" alt="logo" />
            <span class="logo-name">次元视觉</span>
          </router-link>
        </div>

        <div class="container">
          <input
            @click="MenuIsOpen = !MenuIsOpen"
            class="label-check"
            id="label-check"
            type="checkbox"
            :checked="MenuIsOpen"
          />
          <label for="label-check" class="hamburger-label">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
            <label></label
          ></label>
        </div>
        <div class="menu_wrapper" :class="{ MenuOpen: MenuIsOpen }">
          <div class="menu_item" v-for="(nav, index) in navList" :key="index">
            <h2 class="menu_item_link">
              <router-link
                :to="nav.link"
                :class="{ active: $route.path === nav.link }"
              >
                <span>{{ nav.title }}</span>
              </router-link>
            </h2>
            <div class="submenu" v-if="nav.son">
              <div
                class="submenu_item"
                v-for="(item, index) in nav.son"
                :key="index"
              >
                <router-link :to="item.link">
                  <span>{{ item.title }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="menu_item">
            <h2 class="menu_item_link login-wrap">
              <template v-if="userStore.IsLogin">
                <router-link to="/personal">
                  <img src="../../assets/logo.png" alt="" />
                </router-link>
                <!-- submenu -->
                <div class="submenu">
                  <div class="submenu_item">
                    <router-link to="/personal">
                      <span>个人中心</span>
                    </router-link>
                  </div>
                  <div class="submenu_item">
                    <span @click="logOut()">退出登录</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <router-link to="/login">
                  <span>登录</span>
                </router-link>
              </template>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useUserStore } from "../../store/UserStore";
import { loginOut } from "../../api/User/login";
import { delCookie } from "../../utils/handleCookie";
import { getNav } from "../../api/text";
const userStore = useUserStore();
const router = useRouter();
const MenuIsOpen = ref(false);
const navList = ref([
  {
    title: "图像处理",
    link: "/",
    son: [
      {
        title: "图像处理",
        link: "/",
      },
    ],
  },
]);

const headerIsFixed = ref(false);

//每次跳转路由后，关闭菜单
router.afterEach(() => {
  MenuIsOpen.value = false;
});
const getNavLists = () => {
  getNav().then((res) => {
    if (res.code === 1000) {
      navList.value = res.data;
    }
  });
};
const logOut = async () => {
  await loginOut().then((res) => {
    if (res.code === 1) {
      ElMessage.success("退出成功");
      router.push("/login");
      userStore.loginOut();
      delCookie("ticket");
    }
  });
};
const handleScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  headerIsFixed.value = scrollTop > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  getNavLists();
});
</script>
<style lang="less" scoped>
@import url("../../assets/font/css.css");
header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0);
  transition: transform 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;

  .header_container {
    max-width: 1200px;
    padding: 0 10px;
    height: 100%;
    margin: 0 auto;

    .header_content {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      .logo {
        width: 100%;
        height: 100%;

        a {
          display: flex;
          align-items: center;
          height: 100%;

          img {
            width: 40px;
            height: 40px;
          }
          .logo-name {
            font-family: Noto Sans SC, Helvetica, sans-serif;
            font-size: 20px;
          }
        }
      }

      .container {
        display: none;
      }

      .menu_wrapper {
        display: flex;
        align-items: center;
        //禁止文字自动换行
        white-space: nowrap;

        .menu_item {
          position: relative;
          line-height: 60px;
          margin: 30px;

          .menu_item_link {
            font-size: 16px;
            color: #333;
            height: 100%;
            font-weight: 500;
            transition: all 0.3s;
            &.login-wrap {
              position: relative;
              img {
                width: 40px;
                height: 40px;
              }

              .submenu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                display: none;
                background-color: #fff;

                .submenu_item {
                  padding: 10px 0;
                  text-align: center;
                  cursor: pointer;
                  a {
                    color: #333;
                  }
                  &:hover {
                    background-color: #dbdbdbc6;
                  }
                }
              }
              &:hover {
                .submenu {
                  display: block;
                }
              }
            }
            a.active {
              color: #1890ff;
            }
            &::after {
              position: absolute;
              content: "";
              width: 0;
              height: 2px;
              bottom: 0;
              background-color: #1890ff;
              transition: all 0.3s ease-in-out;
              left: 50%;
              transform: translate(-50%, 0);
            }
            &:hover {
              a {
                color: #1890ff;
              }
              &::after {
                width: 100%;
              }
            }
          }
          .submenu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            display: none;
            background-color: #fff;
            z-index: 999;

            .submenu_item {
              padding: 10px 0;
              text-align: center;
              cursor: pointer;
              a {
                color: #333;
              }
              &:hover {
                background-color: #dbdbdbc6;
              }
            }
          }
          &:hover {
            .submenu {
              display: block;
            }
          }
        }
      }
    }
  }
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-check {
  display: none;
}

.hamburger-label {
  width: 58px;
  height: 30px;
  display: block;
  cursor: pointer;
}

.hamburger-label span {
  width: 40px;
  height: 4px;
  background-color: #333;
  position: absolute;
}

.line1 {
  transition: all 0.3s;
}

.line2 {
  margin: 11px 0 0 0;
  transition: 0.3s;
}

.line3 {
  margin: 24px 0 0 0;
  transition: 0.3s;
}

#label-check:checked + .hamburger-label .line1 {
  transform: rotate(-36deg) scaleX(0.55) translate(-30px, -4.5px);
  border-radius: 50px 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line3 {
  transform: rotate(36deg) scaleX(0.55) translate(-30px, 4.5px);
  border-radius: 50px 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line2 {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transform: translateX(10px);
  width: 35px;
}

@media screen and (max-width: 768px) {
  header {
    .header_container {
      .header_content {
        .container {
          display: flex;
        }
        .menu_wrapper {
          box-shadow: 5px 1px 10px rgba(0, 0, 0, 0.1);
          transform: translateX(120%);
          position: absolute;
          top: 60px;
          right: 0;
          background-color: #fff;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 5px;
          transition: all 0.3s ease;

          &.MenuOpen {
            transform: translateX(0);
          }

          .menu_item {
            margin-left: 0;

            &:hover {
              a {
                color: #1890ff;
              }
            }

            .menu_item_link {
              padding: 20px;
              font-size: 16px;
              color: #333;
              font-weight: 500;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>
