import request from '@/utils/request'

/**
 * 获取目录数据
 * @returns {Promise}
 */
export function getDepartmentList() {
    return request({
        url: '/department/menu',
        method: 'get',
    })
}
