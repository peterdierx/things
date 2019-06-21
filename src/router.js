import Vue       from 'vue'
import Router    from 'vue-router'
import ThingList from '@/components/ThingList'
import ThingNew  from '@/components/ThingNew'

Vue.use( Router )

const routes = [
  { path: '/',    component: ThingList },
  { path: '/new', component: ThingNew  }
]

export default new Router({
  routes,
  mode: 'history'
})
