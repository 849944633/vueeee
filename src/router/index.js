import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xiangqing from '@/components/xiangqing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
		{
			path:"/xiangqing/:id?",
			component:xiangqing,
		}
		
  ]
})
