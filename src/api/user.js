import request from '@/utils/request'

/**
 * 登录
 * @param data
 * @returns {AxiosPromise}
 */
export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

/**
 * 获取用户信息
 * @returns {AxiosPromise}
 */
export function getUserInfo() {
    return request({
        url: '/user/getInfo'
    })
}

