<template>
	<!--两栏布局  -->
	<el-row>
		<el-col :span="12">
			<el-card class="upload-wrap">
				<!-- 拖拽上传图片 -->
				<template #header>
					<span>原图</span>
				</template>
				<el-upload
					class="upload-demo"
					drag
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
					:class="['avatar-uploader', 'avatar-uploader--drag']"
				>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">
						Drag here or <em>click to upload</em>
					</div>
					<template #tip> Only support jpg/png files </template>
				</el-upload>
			</el-card>
		</el-col>
		<el-col :span="12">
			<el-card>
				<!-- 图片预览 -->
				<template #header>
					<span>请选择提升倍数</span>
				</template>
				<el-radio-group v-model="radio" size="small">
					<el-radio-button label="1">1</el-radio-button>
					<el-radio-button label="2">2</el-radio-button>
					<el-radio-button label="3">3</el-radio-button>
					<el-radio-button label="4">4</el-radio-button>
				</el-radio-group>
				<el-button
					type="primary"
					@click="superResolution"
					:disabled="imgUrl === ''"
				>
					提升
				</el-button>
			</el-card>
		</el-col>
	</el-row>
	<!-- 两栏布局 -->
</template>
<script setup lang="ts">
const imgUrl = ref('')
const imgUrlList = ref([])
const radio = ref('1')
const handleAvatarSuccess = (res: any, file: any) => {
	imgUrl.value = URL.createObjectURL(file.raw)

	// imgUrlList.value.push(URL.createObjectURL(file.raw))
	// 类型“string”的参数不能赋给类型“never”的参数。
}
const superResolution = () => {
	console.log('superResolution')
}
const beforeAvatarUpload = (file: any) => {
	const isJPG = file.type === 'image/jpeg'
	const isPNG = file.type === 'image/png'
	const isLt2M = file.size / 1024 / 1024 < 2

	if (!isJPG && !isPNG) {
		ElMessage.error('上传头像图片只能是 JPG/PNG 格式!')
	}
	if (!isLt2M) {
		ElMessage.error('上传头像图片大小不能超过 2MB!')
	}
	return (isJPG || isPNG) && isLt2M
}
</script>

<style lang="scss" scoped>
.upload-wrap {
	margin: 30px;
	height: 600px;
	.el-upload {
		border: 1px dashed #409eff;
	}
	.el-upload__text {
		color: #409eff;
	}
	//调整upload组件的大小
	.avatar-uploader {
		width: 200px;
		height: 400px;
	}
}
</style>
