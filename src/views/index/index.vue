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
        width: 200px;
        height: 100px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        overflow: hidden;
        &:hover {
          transform: scale(1.05);
          .son-list {
            scale: 1;
            transition: all 0.2s ease;
          }
        }
        i {
          font-size: 30px;
          color: #1890ff;
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          height: 100%;
          font-size: 16px;
          color: #000;
        }
        .son-list {
          scale: 0;
          width: 200px;
          height: 100px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;
        }
      }
    }
    .slide-wrap {
      width: 60%;
    }
  }
}
</style>
