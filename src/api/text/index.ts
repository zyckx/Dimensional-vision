import http from '../../axios'

// 获取导航栏
export const getNav = () => {
	return http.get('/main/data/nav')
}
// 获取主页二维码
export const getFunc = () => {
	return http.get('/main/data/funcchart')
}
