// ROUTER
import Vue       from 'vue'
import Router    from 'vue-router'
import ThingList from '@/components/ThingList'
import ThingNew  from '@/components/ThingNew'
import ThingShow from '@/components/ThingShow'

Vue.use( Router )

const routes = [
  { path: '/',         component: ThingList },
  { path: '/new',      component: ThingNew  },
  { path: '/show/:id', component: ThingShow }
]

export default new Router({
  routes,
  mode: 'history'
})
