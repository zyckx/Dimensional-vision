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
				<el-form-item label="反向描述(可选)">
					<el-input
						v-model="generateOptions.ReverseDescription"
						placeholder="请选择活动区域"
					></el-input>
				</el-form-item>
				<el-form-item label="生产分辨率">
					<!-- 图像分辨率 -->
					<span>W横向</span>
					<el-select
						v-model="generateOptions.ImageInfo.width"
						placeholder="请选择活动区域"
					>
						<el-option
							v-for="item in [128, 256, 512, 1024]"
							:key="item"
							:label="item"
							:value="item"
						></el-option>
					</el-select>
					<span>H纵向</span>
					<el-select
						v-model="generateOptions.ImageInfo.height"
						placeholder="请选择活动区域"
					>
						<el-option
							v-for="item in [128, 256, 512, 1024]"
							:key="item"
							:label="item"
							:value="item"
						></el-option>
					</el-select>
				</el-form-item>

				<el-form-item class="btn-wrap">
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
			<div class="more-wrap">
				<router-link to="/image-processing/super-resolution">
					<el-button type="primary">Go超分辨率</el-button>
				</router-link>

				<el-button type="success" @click="downloadImage"
					>下载</el-button
				>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const title = 'cyAnimeV1.0'
const desc = '动漫人物生成模型'
const generateOptions = reactive({
	TextDescription: '',
	ReverseDescription: '',
	ImageInfo: {
		width: 0,
		height: 0,
	},
})
const result = reactive({
	src: 'src/assets/img/index.png',
})
const onSubmit = () => {
	console.log(generateOptions)
}
const downloadImage = () => {
	// 下载图片
	const link = document.createElement('a')
	link.download = 'cyAnimeV1.0.png'
	link.href = result.src
	link.click()
}
</script>

<style lang="less" scoped>
.ai-option {
	width: 1400px;
	margin: 50px auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 600px;
	.option-wrap {
		width: 600px;
		height: 100%;
		padding: 20px;
		background: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
		.option-title {
			width: 100%;
			height: 200px;
			text-align: center;
			.title {
				color: #333;
				font-size: 22px;
				font-weight: 700;
			}
			.desc {
				color: rgba(0, 0, 0, 0.6);
				font-size: 13px;
			}
		}
		.btn-wrap {
			margin-top: 50px;
		}
	}
	.result-image {
		width: 600px;
		height: 500px;
		padding: 20px;
		background: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
		img {
			width: 100%;
			height: 100%;
		}
		.more-wrap {
			display: flex;
			justify-content: space-around;
			margin-top: 100px;
		}
	}
}
</style>
