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
    path: '/login/bricked',
    name: 'BPS_Bricked',
    component: () => import('../views/Manual_Login/BPS_Bricked.vue')
     
   },
   {
    path: '/login/recovery',
    name: 'Recovery',
    component: () => import('../views/Manual_Login/Recovery.vue')
     
   },
   {
    path: '/login/recovery_initiate',
    name: 'RecoveryInitiate',
    component: () => import('../views/Manual_Login/Recovery_initiate.vue')
     
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
    props: true,
    component: () => import('../views/immediate/Send.vue')
     
   },
   {
    path: '/wallets/immediate/1of2',
    name: 'sign1of2',
    props: true,
    component: () => import('../views/immediate/multi/sign1.vue')
     
   },
   {
    path: '/wallets/immediate/2of2',
    name: 'sign2of2',
    component: () => import('../views/immediate/multi/sign2.vue')
     
   },
   {
    path: '/wallets/immediate/1of2success',
    name: '1of2success',
    component: () => import('../views/immediate/multi/1of2success.vue')
     
   },
   {
    path: '/wallets/immediate/2of2success',
    name: '2of2success',
    component: () => import('../views/immediate/multi/2of2success.vue')
     
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
    path: '/wallets/delayed/1of5',
    name: 'sign1of5',
    component: () => import('../views/delayed/multi/sign1.vue')
     
   },
   {
    path: '/wallets/delayed/2of5',
    name: 'sign2of5',
    component: () => import('../views/delayed/multi/sign2.vue')
     
   },
   {
    path: '/wallets/delayed/3of5',
    name: 'sign3of5',
    component: () => import('../views/delayed/multi/sign3.vue')
     
   },
   {
    path: '/wallets/delayed/4of5',
    name: 'sign4of5',
    component: () => import('../views/delayed/multi/sign4.vue')
     
   },
   {
    path: '/wallets/delayed/5of5',
    name: 'sign5of5',
    component: () => import('../views/delayed/multi/sign5.vue')
     
   },
   {
    path: '/wallets/delayed/1of5success',
    name: '1of5success',
    component: () => import('../views/delayed/multi/1of5success.vue')
     
   },
   {
    path: '/wallets/delayed/2of5success',
    name: '2of5success',
    component: () => import('../views/delayed/multi/2of5success.vue')
     
   },
   {
    path: '/wallets/delayed/3of5success',
    name: '3of5success',
    component: () => import('../views/delayed/multi/3of5success.vue')
     
   },
   {
    path: '/wallets/delayed/4of5success',
    name: '4of5success',
    component: () => import('../views/delayed/multi/4of5success.vue')
     
   },
   {
    path: '/wallets/delayed/5of5success',
    name: '5of5success',
    component: () => import('../views/delayed/multi/5of5success.vue')
     
   },
   {
    path: '/delayed/timemachine/1',
    name: 'TimeMachine1',
    component: () => import('../views/delayed/timemachine/1.vue')
   },
   {
    path: '/delayed/timemachine/2',
    name: 'TimeMachine2',
    component: () => import('../views/delayed/timemachine/2.vue')
   },
   {
    path: '/delayed/timemachine/3',
    name: 'TimeMachine3',
    component: () => import('../views/delayed/timemachine/3.vue')
   },
   {
    path: '/delayed/timemachine/4',
    name: 'TimeMachine4',
    component: () => import('../views/delayed/timemachine/4.vue')
   },
   {
    path: '/delayed/timemachine/5',
    name: 'TimeMachine5',
    component: () => import('../views/delayed/timemachine/5.vue')
   },
   {
    path: '/delayed/timemachine/6',
    name: 'TimeMachine6',
    component: () => import('../views/delayed/timemachine/6.vue')
   },
   {
    path: '/delayed/timemachine/7',
    name: 'TimeMachine7',
    component: () => import('../views/delayed/timemachine/7.vue')
   },
   {
    path: '/delayed/timemachine/8',
    name: 'TimeMachine8',
    component: () => import('../views/delayed/timemachine/8.vue')
   },
   {
    path: '/delayed/timemachine/9',
    name: 'TimeMachine9',
    component: () => import('../views/delayed/timemachine/9.vue')
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
   {
    path: '/setup/35',
    name: 'Setup35',
    component: () => import('../views/setup/35.vue')
   },
   {
    path: '/setup/36',
    name: 'Setup36',
    component: () => import('../views/setup/36.vue')
   },
   {
    path: '/setup/37',
    name: 'Setup37',
    component: () => import('../views/setup/37.vue')
   },
   {
    path: '/setup/38',
    name: 'Setup38',
    component: () => import('../views/setup/38.vue')
   },
   {
    path: '/setup/39',
    name: 'Setup39',
    component: () => import('../views/setup/39.vue')
   },
   {
    path: '/setup/40',
    name: 'Setup40',
    component: () => import('../views/setup/40.vue')
   },
   {
    path: '/setup/41',
    name: 'Setup41',
    component: () => import('../views/setup/41.vue')
   },
   {
    path: '/setup/42',
    name: 'Setup42',
    component: () => import('../views/setup/42.vue')
   },
   {
    path: '/setup/43',
    name: 'Setup43',
    component: () => import('../views/setup/43.vue')
   },
   {
    path: '/setup/44',
    name: 'Setup44',
    component: () => import('../views/setup/44.vue')
   },
   {
    path: '/setup/45',
    name: 'Setup45',
    component: () => import('../views/setup/45.vue')
   },
   {
    path: '/setup/46',
    name: 'Setup46',
    component: () => import('../views/setup/46.vue')
   },
   {
    path: '/setup/47',
    name: 'Setup47',
    component: () => import('../views/setup/47.vue')
   },
   {
    path: '/setup/48',
    name: 'Setup48',
    component: () => import('../views/setup/48.vue')
   },
   {
    path: '/setup/49',
    name: 'Setup49',
    component: () => import('../views/setup/49.vue')
   },
   {
    path: '/setup/50',
    name: 'Setup50',
    component: () => import('../views/setup/50.vue')
   },
   {
    path: '/setup/51',
    name: 'Setup51',
    component: () => import('../views/setup/51.vue')
   },
   {
    path: '/tripwire/setup/1',
    name: 'tripwirePostSetup1',
    component: () => import('../views/post-setup/tripwire1.vue')
   },
   {
    path: '/tripwire/setup/2',
    name: 'tripwirePostSetup2',
    component: () => import('../views/post-setup/tripwire2.vue')
   },
   {
    path: '/duress/setup/2',
    name: 'duressPostSetup1',
    component: () => import('../views/post-setup/duress1.vue')
   },
   {
    path: '/recovery/setup/1',
    name: 'piiPostSetup1',
    component: () => import('../views/post-setup/pii1.vue')
   },
   {
    path: '/recovery/setup/2',
    name: 'piiPostSetup2',
    component: () => import('../views/post-setup/pii2.vue')
   },
   {
    path: '/recovery/setup/3',
    name: 'piiPostSetup3',
    component: () => import('../views/post-setup/pii3.vue')
   },
   {
    path: '/quick',
    name: 'quick1',
    component: () => import('../views/tripwire/quick1.vue')
   },
   {
    path: '/quick/send',
    name: 'quick2',
    component: () => import('../views/tripwire/quick2.vue')
   },
   {
    path: '/quick/compromised',
    name: 'Compromised',
    component: () => import('../views/tripwire/compromised.vue')
   },


]

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
