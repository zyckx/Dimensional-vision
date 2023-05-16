<template>
	<el-carousel
		trigger="click"
		height="500px"
		arrow="always"
		:pause-on-hover="true"
	>
		<el-carousel-item v-for="item in swiperList.data" :key="item.title">
			<img :src="item.image" alt="" />
		</el-carousel-item>
	</el-carousel>

	<!-- <div class="test"></div> -->
</template>
<script setup lang="ts">
import { getSwiper } from '../../api/images'
const swiperList = reactive({
	data: [
		{
			image: 'https://s1.ax1x.com/2023/05/04/p9tvKQf.jpg',
			title: '首图',
		},
	],
})
const getSwiperList = async () => {
	const res = await getSwiper()
	swiperList.data.push(...res.data)
}
onMounted(() => {
	getSwiperList()
})
</script>
<style scoped>
img {
	width: 100%;
	height: 100%;
}
</style>
