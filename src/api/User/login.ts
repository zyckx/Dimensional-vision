import http from '../../axios'
import type { Response } from '../../axios'
import axios from 'axios'
export const login = (data: any) => {
	//传递多个params参数
	// return http.post<Response>('/users/login', data, { params })
	return axios.post('/users/login', { ...data }, { baseURL: '/login' })
}
export const getCaptcha = async () => {
	return axios.get('/users/login/captcha', { baseURL: '/login' })
}
export const loginOut = () => {
	return http.get<Response>('/logout')
}
