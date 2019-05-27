import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import SportClimbing from './components/sport_climbing.vue'
import Bouldering from './components/bouldering.vue'
import Lead from './components/lead.vue'
import Speed from './components/speed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', 
      name: '1', 
      component: SportClimbing,
      meta:{bodyClass: 'sport'} 
    },{
      path: '/bouldering', 
      name: '2', 
      component: Bouldering,
      meta:{bodyClass: 'bouldering'} 
    },{
      path: '/lead', 
      name: '3', 
      component: Lead,
      meta:{bodyClass: 'leadclimb'} 
    },{
      path: '/speed', 
      name: '4', 
      component: Speed,
      meta:{bodyClass: 'speed'} 
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // スクロール位置を1pxから
    return { x: 0, y: 1 }
  },
  data: {
    show: true
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  document.body.classList.add('scrollhidden');
  document.body.classList.remove('scrollhidden');
})

export default router
