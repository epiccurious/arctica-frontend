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
   {
    path: '/setup/5',
    name: 'Setup5',
    component: () => import('../views/setup/5.vue')
   },
   {
    path: '/setup/6',
    name: 'Setup6',
    component: () => import('../views/setup/6.vue')
   },
   {
    path: '/setup/7',
    name: 'Setup7',
    component: () => import('../views/setup/7.vue')
   },
   {
    path: '/setup/8',
    name: 'Setup8',
    component: () => import('../views/setup/8.vue')
   },
   {
    path: '/setup/9',
    name: 'Setup9',
    component: () => import('../views/setup/9.vue')
   },
   {
    path: '/setup/10',
    name: 'Setup10',
    component: () => import('../views/setup/10.vue')
   },
   {
    path: '/setup/11',
    name: 'Setup11',
    component: () => import('../views/setup/11.vue')
   },
   {
    path: '/setup/12',
    name: 'Setup12',
    component: () => import('../views/setup/12.vue')
   },
   {
    path: '/setup/13',
    name: 'Setup13',
    component: () => import('../views/setup/13.vue')
   },
   {
    path: '/setup/14',
    name: 'Setup14',
    component: () => import('../views/setup/14.vue')
   },
   {
    path: '/setup/15',
    name: 'Setup15',
    component: () => import('../views/setup/15.vue')
   },
   {
    path: '/setup/16',
    name: 'Setup16',
    component: () => import('../views/setup/16.vue')
   },
   {
    path: '/setup/17',
    name: 'Setup17',
    component: () => import('../views/setup/17.vue')
   },
   {
    path: '/setup/18',
    name: 'Setup18',
    component: () => import('../views/setup/18.vue')
   },
   {
    path: '/setup/19',
    name: 'Setup19',
    component: () => import('../views/setup/19.vue')
   },
   {
    path: '/setup/20',
    name: 'Setup20',
    component: () => import('../views/setup/20.vue')
   },
   {
    path: '/setup/21',
    name: 'Setup21',
    component: () => import('../views/setup/21.vue')
   },
   {
    path: '/setup/22',
    name: 'Setup22',
    component: () => import('../views/setup/22.vue')
   },
   {
    path: '/setup/23',
    name: 'Setup23',
    component: () => import('../views/setup/23.vue')
   },
   {
    path: '/setup/24',
    name: 'Setup24',
    component: () => import('../views/setup/24.vue')
   },
   {
    path: '/setup/25',
    name: 'Setup25',
    component: () => import('../views/setup/25.vue')
   },
   {
    path: '/setup/26',
    name: 'Setup26',
    component: () => import('../views/setup/26.vue')
   },
   {
    path: '/setup/27',
    name: 'Setup27',
    component: () => import('../views/setup/27.vue')
   },
   {
    path: '/setup/28',
    name: 'Setup28',
    component: () => import('../views/setup/28.vue')
   },
   {
    path: '/setup/29',
    name: 'Setup29',
    component: () => import('../views/setup/29.vue')
   },
   {
    path: '/setup/30',
    name: 'Setup30',
    component: () => import('../views/setup/30.vue')
   },
   {
    path: '/setup/31',
    name: 'Setup31',
    component: () => import('../views/setup/31.vue')
   },
   {
    path: '/setup/32',
    name: 'Setup32',
    component: () => import('../views/setup/32.vue')
   },
   {
    path: '/setup/33',
    name: 'Setup33',
    component: () => import('../views/setup/33.vue')
   },
   {
    path: '/setup/34',
    name: 'Setup34',
    component: () => import('../views/setup/34.vue')
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
