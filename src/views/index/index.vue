<template>
  <section class="index">
    <div class="index-wrap">
      <div class="slide-wrap">
        <Slide />
      </div>
      <div class="image-transform">
        <div v-for="item in buttonList" :key="item.title">
          <router-link :to="item.iconName">
            <div class="image-transform-item">
              <span><i :class="item.iconName"></i>{{ item.title }}</span>
              <div class="son-list">
                <router-link
                  class="son-list-item"
                  v-for="text in item.text"
                  :key="text"
                  :to="item.iconName"
                >
                  <span>{{ text }}</span>
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getFunc } from "../../api/text";
onMounted(() => {
  getFunc().then((res) => {
    buttonList.value = res.data;
  });
});
const buttonList = ref([
  {
    title: "图像处理",
    text: ["超分辨率", "风格迁移"],
    iconName: "image-processing",
  },
]);
</script>

<style scoped lang="less">
.index {
  margin-top: 60px;

  width: 100%;
  background-color: #fff;
  // 两两布局
  .index-wrap {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .image-transform {
      width: 32%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .image-transform-item {
        position: relative;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
        span {
          position: relative;
          z-index: 2;
          font-size: 22px;
          font-weight: 700;
          color: #666;
          i {
            margin-right: 10px;
          }
        }

        .son-list {
          position: absolute;
          top: 110%;
          left: 0;
          z-index: 1;
          background-color: #fff;
          border-radius: 5px;
          display: flex;

          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease-in-out;
          scale: 0;
          a {
            width: 150px;
            height: 40px;
            margin: 10px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            scale: 0;
            transform: translateY(0);
            &:hover {
              background-color: #1890ff;
              span {
                color: #fff;
              }
            }
            span {
              text-align: center;
              font-size: 14px;
              color: #666;
              cursor: pointer;
            }
          }
        }
        &:hover {
          .son-list {
            scale: 1;
            a {
              // transform: translateY(114px);
              scale: 1;
            }
          }
        }
      }
    }
    .slide-wrap {
      width: 60%;
    }
  }
}
</style>
