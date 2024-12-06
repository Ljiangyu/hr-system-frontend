
const state = {
  token: null
}
const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  login(context, data) {
    console.log(data)
    // todo:: api 登陆接口
    // token 123456
    context.commit('setToken', '123456')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
