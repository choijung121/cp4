import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import Suggestions from '../views/Suggestion.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/suggestion',
    name: 'Suggestions',
    component: Suggestions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
