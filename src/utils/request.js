import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: '/api', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        console.log("request before");
        if (store.getters.token) {
            const token = getToken();
            if (token) {
                try {
                    // 确保 token 只是一个字符串，并且不是 JSON 对象
                    console.log('Token from storage:', token);
                    config.headers['hr-token'] = token; // 不需要编码，因为 token 应该已经是有效的 ASCII 字符串
                } catch (e) {
                    console.error('Token encoding error:', e);
                }
            }
        }
        return config;
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        console.log('response', response)
        // 逆天错误 todo error
        const { code, data, message } = response.data

        if (code !== 200) {
            Message({
                message: message || 'Error',
                type: 'error',
                duration: 5 * 300
            })
            return Promise.reject(new Error(message || 'Error'))
        } else {
            return response
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 300
        })
        return Promise.reject(error)
    }

)

export default service
