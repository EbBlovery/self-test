import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const User = {
  render(h) {
    return h(
      'div',
      this.$route.params.id
    )
  }
}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home/:id',
      component: () => import('../views/home.vue')
    },
    {
      name: 'compon',
      path: '/compon',
      component: () => import('../views/compon.vue')
    }
  ]
})