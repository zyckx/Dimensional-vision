<template>
	<!--两栏布局  -->
	<el-row>
		<el-col :span="12">
			<!-- 文件上传 -->
			<div class="upload-wrap">
				<input
					type="file"
					accept="image/*"
					ref="fileInput"
					@change="onFileChange"
				/>
				<el-image :src="uploadUrl">
					<template #placeholder>
						<div class="image-slot"
							>Loading<span class="dot">...</span></div
						>
					</template>
				</el-image>
			</div>
		</el-col>
		<el-col :span="12">
			<el-card class="select-wrap">
				<!-- 图片预览 -->
				<template #header>
					<span>请选择提升倍数</span>
				</template>
				<div class="select-option">
					<el-radio-group v-model="radio" size="small">
						<el-radio-button label="1">1</el-radio-button>
						<el-radio-button label="2">2</el-radio-button>
						<el-radio-button label="3">3</el-radio-button>
						<el-radio-button label="4">4</el-radio-button>
					</el-radio-group>
				</div>
				<div class="result-wrap">
					<el-image :src="imgUrl">
						<template #placeholder>
							<div class="image-slot"
								>Loading<span class="dot">...</span></div
							>
						</template>
					</el-image>
				</div>
				<div class="btn-wrap">
					<el-button
						type="primary"
						@click="onSuperResolution"
						:disabled="radio === ''"
					>
						提升
					</el-button>
				</div>
			</el-card>
		</el-col>
	</el-row>
	<!-- 两栏布局 -->
</template>
<script setup lang="ts">
import { superResolution } from '../../api/baseFunc'
const uploadUrl = ref('')

const formData = ref(new FormData())
const onFileChange = (e: Event) => {
	const target = e.target as HTMLInputElement
	const file = target.files?.[0]
	console.log(file)

	if (!file) return
	if (file) {
		formData.value.append('content', file)
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			uploadUrl.value = reader.result as string
		}
	}
}
const imgUrl = ref('')
const radio = ref('1')
const onSuperResolution = () => {
	ElMessage({
		message: '正在提升中，请稍后',
		type: 'info',
		duration: 0,
	})
	superResolution(formData).then((res) => {
		console.log(formData)
		if (res.data.code === 200) {
			imgUrl.value = res.data.data
			ElMessage.closeAll()
			ElMessage({
				message: '提升成功',
				type: 'success',
				duration: 1000,
			})
		} else {
			ElMessage({
				message: '提升失败',
				type: 'error',
			})
		}
	})
}
</script>

<style lang="scss" scoped>
.upload-wrap {
	margin: 30px;
	height: 600px;
}
.select-wrap {
	position: relative;
	margin: 30px;
	height: 600px;
	.select-option {
		margin: 30px;
		//改变radio大小
		:deep .el-radio-button {
			margin: 20px;
		}
	}
	.btn-wrap {
		position: absolute;
		bottom: 30px;
		right: 30px;
	}
}
</style>
