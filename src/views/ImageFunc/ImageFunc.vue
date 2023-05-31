<template>
	<div class="ImageFunc-wrap">
		<BreadCrumbs />
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts">
const arrt = useAttrs()
console.log(arrt)
</script>

<style lang="less" scoped>
.ImageFunc-wrap {
	width: 100%;
	height: 600px;
	padding: 20px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
}
</style>
