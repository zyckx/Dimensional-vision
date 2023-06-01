<template>
	<div class="style-transfer">
		<!-- 三列布局 -->
		<el-row>
			<el-col :span="8">
				<el-card>
					<div class="upload-wrap">
						<el-upload
							class="img-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:before-upload="beforeAvatarUpload"
							:on-success="handleAvatarSuccess"
						>
							<img
								v-if="imgUrl !== ''"
								:src="imgUrl"
								class="avatar"
							/>
							<i
								v-else
								class="el-icon-plus avatar-uploader-icon"
							></i>
						</el-upload>
					</div>
					<div class="upload-wrap">
						<el-upload
							class="img-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:before-upload="beforeAvatarUpload"
							:on-success="handleAvatarSuccess"
						>
							<img
								v-if="imgUrl !== ''"
								:src="imgUrl"
								class="avatar"
							/>
							<i
								v-else
								class="el-icon-plus avatar-uploader-icon"
							></i>
						</el-upload>
					</div>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card>
					<div class="select-wrap">
						<!-- 风格权重 -->
						<el-input
							placeholder="请输入风格权重"
							v-model="styleWeight"
							clearable
						></el-input>
						<el-button
							type="primary"
							@click="styleTransfer"
							:disabled="imgUrl === ''"
						>
							提升
						</el-button>
					</div>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card>
					<div class="result-wrap">
						<img
							src="../../assets/img/7DF53B707EF1188C36D8FACDF4B5DE6F.png"
							alt=""
						/>
						<img
							v-if="imgUrl !== ''"
							:src="imgUrl"
							class="result"
						/>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<!-- 三列布局 -->
	</div>
</template>
<script setup lang="ts">
const imgUrl = ref('')
const radio = ref('1')
const styleWeight = ref('1')
const styleTransfer = () => {
	console.log('styleTransfer')
}
const handleAvatarSuccess = (res: any, file: any) => {
	imgUrl.value = URL.createObjectURL(file.raw)
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
.style-transfer {
	width: 100%;
	margin: 30px;

	.upload-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		.img-uploader {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 200px;
			height: 200px;
			margin: 10px;
			background-color: #eee;
			.avatar {
				width: 120px;
				height: 120px;
				background-color: #eee;
			}
			.avatar-uploader-icon {
				font-size: 28px;
				color: #8c939d;
				width: 120px;
				height: 120px;
				line-height: 120px;
				text-align: center;
			}
		}
	}
	.select-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.result-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 200px;
			height: 200px;
		}
		.result {
			width: 200px;
			height: 200px;
			background-color: #eee;
			img {
				width: 200px;
				height: 200px;
			}
		}
	}
}
</style>
