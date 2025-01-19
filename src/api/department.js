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

/**
 * 获取数据
 * @param {部门编号} id
 * @returns
 */
export function getDepartmentDetails(id) {
  return request({
    url: `/department/get/${id}`,
    method: 'get'
  })
}

/**
 * 更新数据
 * @param  data
 * @returns
 */
export function updateDepartment(data) {
  return request({
    url: `/department/update/${data.code}`,
    method: 'put',
    data
  })
}

/**
 * 删除数据
 * @param {部门编号} id
 * @returns
 */
export function deleteDepartment(id) {
  return request({
    url: `/department/delete/${id}`,
    method: 'get'
  })
}
