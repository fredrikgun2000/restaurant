import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Plugin } from 'vue-responsive-video-background-player'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
