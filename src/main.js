// MODULES
import Vue    from 'vue'
import App    from '@/App.vue'
import router from '@/router'
import store  from '@/store'

// BULMA CSS
import 'bulma/css/bulma.css'

// UTILS
import directives from '@/directives'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  store,
  render: h => h( App ),
  created() {
    this.$store.dispatch( 'things' )
  }
}).$mount( '#app' )
