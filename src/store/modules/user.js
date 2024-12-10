import { getToken, removeToken, setToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

const state = {
    token: getToken(),
    userinfo: {

    }
}
const mutations = {
    setToken(state, token) {
        console.log("setToken")
        console.log(token)
        state.token = token
        setToken(token)
    },
    removeToken(state) {
        state.token = null
        removeToken()
    },
    setUserInfo(state, data) {
        console.log("setUserInfo")
        console.log(data)
        state.userinfo = data
        console.log("============setUserInfo=============")
        console.log(state.userinfo)
        console.log("============end_setUserInfo=============")
    }
}

const actions = {
    async login(context, data) {
        const res = await login(data)
        console.log('========login=====')
        console.log(res)
        console.log(res.data)
        context.commit('setToken', res.data.data)
    },
    async getInfo(context) {
        console.log("getInfo")
        const res = await getUserInfo()
        console.log('========res=====')
        console.log(res)
        context.commit('setUserInfo', res.data.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
