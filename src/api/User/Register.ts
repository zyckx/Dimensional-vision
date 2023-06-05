import axios from 'axios'
import type { IRegisterForm } from '../../types'
export const register = (registerData: IRegisterForm) => {
	return axios.post(
		'/users/register',
		{ ...registerData },
		{ baseURL: '/login' }
	)
}
