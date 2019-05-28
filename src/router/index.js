import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import adduser from '@/components/adduser'
import updateuser from '@/components/updateuser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: adduser
    },
    {
      path: '/updateuser/:userId',
      name: 'updateuser',
      component: updateuser
    }
  ]
})
