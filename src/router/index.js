import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/boot',
    name: 'Boot',
    component: () => import('../views/Boot.vue')
     
   },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/wallets',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/wallets/hot',
    name: 'hot',
    component: () => import('../views/hot/Transactions.vue')
     
   },
   {
    path: '/wallets/hot/send',
    name: 'hotSend',
    component: () => import('../views/hot/Send.vue')
     
   },
   {
    path: '/wallets/hot/receive',
    name: 'hotReceive',
    component: () => import('../views/hot/Receive.vue')
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
    path: '/wallets/delayed/send',
    name: 'delayedSend',
    component: () => import('../views/delayed/Send.vue')
     
   },
   {
    path: '/wallets/delayed/receive',
    name: 'delayedReceive',
    component: () => import('../views/delayed/Receive.vue')
     
   },
  {
   path: '/settings',
   name: 'settings',
   component: () => import('../views/Settings.vue')
  },
  {
    path: '/setup/1',
    name: 'Setup1',
    component: () => import('../views/setup/1.vue')
   },
   {
    path: '/setup/2',
    name: 'Setup2',
    component: () => import('../views/setup/2.vue')
   },
   {
    path: '/setup/3',
    name: 'Setup3',
    component: () => import('../views/setup/3.vue')
   },
   {
    path: '/setup/4',
    name: 'Setup4',
    component: () => import('../views/setup/4.vue')
   },
]


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
