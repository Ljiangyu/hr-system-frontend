import request from '@/utils/request'

/**
 * 获取目录数据
 * @returns {Promise}
 */
export function getDepartmentList() {
  return request({
    url: '/department/menu',
    method: 'get'
  })
}
/**
 * 添加部门
 */
export function addDepartment(data) {
  return request({
    url: '/department/add',
    method: 'post',
    data: data
  })
}
