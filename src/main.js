import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
