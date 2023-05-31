<template>
	<Header />
	<div class="main_wrap">
		<ElConfigProvider :locale="locale">
			<router-view />
		</ElConfigProvider>
	</div>
	<Footer />
	<BackTop />
</template>

<script setup lang="ts">
import Header from './components/Header/Header.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = ref(zhCn)
</script>

<style scoped></style>
