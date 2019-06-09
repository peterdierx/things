// MODULES
import Vue    from 'vue'
import App    from '@/App.vue'
import router from '@/router'
import store  from '@/store'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  store,
  render: h => h( App )
}).$mount( '#app' )
