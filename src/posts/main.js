import Vue from 'vue'
import PostTop from './PostTop.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(PostTop),
}).$mount('#app')
