import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Menu from '../components/menu.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/menu',
		name: 'menu',
		component: Menu
	},
]

const router = new VueRouter({
		mode: 'history',
		routes
	})


export default router
