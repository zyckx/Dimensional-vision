<template>
  <section class="index">
    <div class="index-wrap">
      <div class="slide-wrap">
        <Slide />
      </div>
      <div class="image-transform">
        <div v-for="item in buttonList" :key="item.id">
          <router-link :to="item.path">
            <div class="image-transform-item">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const buttonList = ref([
  {
    id: 1,
    path: "/",
    title: "超分辨率",
    icon: "el-icon-s-home",
  },
  {
    id: 2,
    path: "/",
    title: "图像处理",
    icon: "el-icon-picture-outline",
  },
  {
    id: 3,
    path: "/",
    title: "点云处理",
    icon: "el-icon-s-data",
  },
  {
    id: 4,
    path: "/",
    title: "视频处理",
    icon: "el-icon-video-camera",
  },
  {
    id: 5,
    path: "/",
    title: "数据集",
    icon: "el-icon-s-grid",
  },
  {
    id: 6,
    path: "/",
    title: "论文",
    icon: "el-icon-notebook-2",
  },
  {
    id: 7,
    path: "/",
    title: "关于我们",
    icon: "el-icon-s-custom",
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
        flex-direction: column;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          transform: scale(1.05);
        }
        i {
          font-size: 30px;
          color: #1890ff;
        }
        span {
          font-size: 16px;
          color: #000;
        }
      }
    }
    .slide-wrap {
      width: 60%;
    }
  }
}
</style>
