import Vue from 'vue'
import UsersTop from './UsersTop.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(UsersTop),
}).$mount('#app')
