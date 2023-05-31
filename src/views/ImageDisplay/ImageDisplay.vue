<template>
	<router-view></router-view>
</template>

<style lang="less" scoped>
.flex-row {
	display: flex;
	flex-direction: row;
	width: 90vw;
	margin-left: 5vw;
	justify-content: space-around;
	align-items: flex-start;
}

// 可以利用meta属性做一个响应式，比如屏幕宽度超过多宽就显示5列，屏幕宽度为多宽就显示4列
.flex-column {
	display: flex;
	flex-direction: column;
	width: 25%;
	margin: 10px;
}

.flex-column-ele {
	img {
		width: 100%;
		max-height: 500px;
		object-fit: contain;
	}

	padding: 5px;
	margin: 5px;
	background-color: #f8f5f5;
	border-radius: 5px;
	box-shadow: 2px 5px 5px 0px #f3f3f3;
}
</style>
