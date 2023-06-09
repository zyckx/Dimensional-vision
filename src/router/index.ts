import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/index/index.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login/Login.vue'),
	},
	{
		path: '/image-processing',
		name: '图像处理',
		component: () => import('../views/ImageFunc/ImageFunc.vue'),
		children: [
			{
				path: '',
				name: '',
				component: () => import('../views/ImageFunc/Funcindex.vue'),
			},
			{
				path: 'super-resolution',
				name: '超分辨率',
				component: () =>
					import('../views/ImageFunc/SuperResolution.vue'),
			},
			{
				path: 'style-transfer',
				name: '风格迁移',
				component: () => import('../views/ImageFunc/StyleTransfer.vue'),
			},
		],
	},

	{
		path: '/pointcloud',
		name: 'pointcloud',
		component: () => import('../views/PointCloud/PointCloud.vue'),
		children: [
			{
				path: '',
				name: '',
				component: () =>
					import('../views/PointCloud/PointCloudIndex.vue'),
			},
			{
				path: 'td-reconstruction',
				name: 'td-reconstruction',
				component: () =>
					import('../views/PointCloud/TdReconstruction.vue'),
			},
		],
	},
	{
		path: '/ai-drawing',
		name: 'AI绘图',
		component: () => import('../views/ImageDisplay/ImageDisplay.vue'),
		children: [
			{
				path: '',
				name: 'cyAnime',
				component: () => import('../views/ImageDisplay/cyAnime.vue'),
			},
			{
				path: 'text',
				name: 'text',
				component: () => import('../views/ImageDisplay/AIText.vue'),
			},
			{
				path: 'base',
				name: 'base',
				component: () => import('../views/ImageDisplay/AiDrawBase.vue'),
			},
		],
	},
	{
		path: '/:catchAll(.*)',
		name: '404',
		component: () => import('../views/404/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

//全局开启路由守卫，检验cookie
router.beforeEach((to, from, next) => {
	//跳转到登录页
	if (to.path === '/login') {
		next()
	} else {
		// 检查权限路由
		if (to.meta.requireAuth) {
			// 检查cookie
			if (document.cookie.indexOf('ticket') === -1) {
				ElMessage.error('请登录')
				next('/login')
			} else {
				next()
			}
		}
		next()
	}
})
export default router
