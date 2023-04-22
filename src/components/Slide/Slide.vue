<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in swiperList.data" :key="item.title">
        <img :src="item.image" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import { getSwiper } from "../../api/images";
const swiperList = reactive({
  data: [
    {
      image: "https://img.yzcdn.cn/vant/apple-1.jpg",
      title: "标题1",
    },
  ],
});
const getSwiperList = async () => {
  const res = await getSwiper();
  swiperList.data = res.data;
};
onMounted(() => {
  getSwiperList();
});
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
