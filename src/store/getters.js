const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    userId: state => state.user.userinfo.id,
    //   avatar: state => state.user.avatar,
    name: state => state.user.userinfo.name
}
export default getters
