import http from '../../axios'
//图像超分辨率
export const superResolution = (data: any) => {
	return http.post('/image-processing/super-resolution', data)
}
