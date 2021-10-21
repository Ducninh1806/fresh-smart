import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index.vue'
import PageLogin from '../pages/login/index.vue'
import PageRegister from '../pages/register/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: PageLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: PageRegister
    }
  ]
})
