import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Menu from '../components/menu.vue'
import Tbooking from '../components/booking.vue'
import Schedule from '../components/schedule.vue'

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
	{
		path: '/tbooking',
		name: 'tbooking',
		component: Tbooking
	},
	{
		path: '/schedule',
		name: 'schedule',
		component: Schedule
	},
]

const router = new VueRouter({
		mode: 'history',
		routes
	})


export default router
