import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
import DePage from '@/view/DePage'
import Earth from '@/view/details/Earth'
import Car from '@/view/details/Car'
import Hill from '@/view/details/Hill'
import Loud from '@/view/details/Loud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/details',
      name: 'DePage',
      component: DePage,
      redirect:'/details/earth',
      children:[
        {
          path:'earth',
          name:'Earth',
          component:Earth,
        },{
          path:'car',
          name:'Car',
          component:Car,
        },{
          path:'hill',
          name:'Hill',
          component:Hill,
        },{
          path:'loud',
          name:'Loud',
          component:Loud,
        },
      ]
    },
  ]
})
