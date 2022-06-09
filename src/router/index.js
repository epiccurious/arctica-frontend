import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/wallets',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/wallets/immediate',
    name: 'immediate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/immediate/Transactions.vue')
     
   },
   {
    path: '/wallets/immediate/send',
    name: 'immediateSend',
    component: () => import('../views/immediate/Send.vue')
     
   },
   {
    path: '/wallets/immediate/receive',
    name: 'immediateReceive',
    component: () => import('../views/immediate/Receive.vue')
     
   },
   {
    path: '/wallets/delayed',
    name: 'delayed',
    component: () => import('../views/delayed/Transactions.vue')
     
   },
  {
   path: '/settings',
   name: 'settings',
   component: () => import('../views/Settings.vue')
    
  },
]

//need path for immediate wallet (spend/receive)
//need path for delayed wallet (spend/receive)
//need path for delayed wallet -> time machine protocol
//remember to use lazy loading to optimize...
//remember to use code splitting for dynamic routes to optimize...
//consider prefetch for transaction history to optimize...

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//may want to disable this web history feature at some point. Seems like a recipe for trouble to allow 
//the user to navigate through the app with forward and back pages.

export default router
