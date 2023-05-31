<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item
				v-for="(item, index) in route.matched"
				:key="index"
			>
				<span v-if="item.meta.breadcrumb">{{
					item.meta.breadcrumb
				}}</span>
				<span v-else>{{ item.name }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script setup lang="ts">
const route = useRoute()
console.log(route)
</script>

<style lang="scss" scoped></style>
