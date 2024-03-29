import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    }, {
      path: '/Hi',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    }
    

  ]
})