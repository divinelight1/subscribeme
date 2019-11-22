import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ListEntries from '@/components/ListEntries'
import Options from '@/components/Options'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/list',
      name: 'ListEntries',
      component: ListEntries
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    }
  ]
})
