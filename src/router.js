import Vue       from 'vue'
import Router    from 'vue-router'
import ThingList from '@/components/ThingList'

Vue.use( Router )

const routes = [
  { path: '/', component: ThingList }
]

export default new Router({
  routes,
  mode: 'history'
})
