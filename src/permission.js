import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'
import store from '@/store'

const whiteList = ['/login', '/404']
router.beforeEach(
  (to, from, next) => {
    nprogress.start()
    if (store.getters.token) {
      if (to.path === '/login') {
        next('/')
        // next 中有地址 不会执行后置首位
        nprogress.done()
      } else {
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next('/login')
        nprogress.done()// 同样的原因
      }
    }
  }
)
router.afterEach(() => {
  nprogress.done()
})
