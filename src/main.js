import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// library.add(faUserSecret)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
