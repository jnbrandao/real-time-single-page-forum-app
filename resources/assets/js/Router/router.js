import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/login', component: Login }
  //  { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router