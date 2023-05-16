<template>
	<div class="ai-option">
		<div class="option-wrap">
			<div class="option-title">
				<h3 class="title">{{ title }}</h3>
				<span class="desc">{{ desc }}</span>
			</div>
			<el-form ref="form" :model="generateOptions" label-width="80px">
				<el-form-item label="文字描述">
					<el-input
						v-model="generateOptions.TextDescription"
						type="textarea"
					></el-input>
				</el-form-item>
				<el-form-item label="反向描述">
					<el-input
						v-model="generateOptions.ReverseDescription"
						placeholder="请选择活动区域"
					></el-input>
				</el-form-item>

				<el-form-item label="分辨率">
					<!-- 图像分辨率 -->
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit"
						>立即创建</el-button
					>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="result-image">
			<el-image :src="result.src">
				<template #placeholder>
					<div class="image-slot">
						加载中
						<span class="dot">...</span>
					</div>
				</template>
			</el-image>
		</div>
	</div>
</template>
<script setup lang="ts">
const title = 'AI选项'
const desc = 'AI选项描述'
const generateOptions = reactive({
	TextDescription: '',
	ReverseDescription: '',
	ImageInfo: {
		width: 0,
		height: 0,
	},
})
const result = reactive({
	src: '',
})
const onSubmit = () => {
	console.log(generateOptions)
}
</script>

<style lang="less" scoped>
.ai-option {
	width: 100%;
	height: 600px;
	background: red;
}
</style>
