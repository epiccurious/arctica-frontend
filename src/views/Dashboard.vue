<template>
  <!-- Show the compromised component if the user has a tripped tripwire -->
  <Compromised v-if="this.tripwire != 'none'" />
  <!-- Show the main dashboard -->
  <div v-else class="page">
    <Nav />
      <div class="dashboard">
        <div class="head_container">
          <h1>Wallets</h1>
        </div>
        <!-- <router-link class="wallet_container" :to="{ name: 'hot' }">
            <div class="wallet_container_left">
            <h2>Hot Wallet</h2>
            <h2 class="time_decay">Spend Now</h2>
            </div>
            <div class="wallet_container_right">
              <h2 class="balance_overview">{{ this.hotBalance }} BTC</h2>
              <span class="carat"><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link>  -->

        <router-link class="wallet_container" :to="{ name: 'immediate' }">
            <div class="wallet_container_left">
            <h2>Immediate Wallet</h2>
            <h2 class="time_decay">2 SD cards</h2>
            </div>
            <div class="wallet_container_right">
              <h2 class="balance_overview">{{ this.immediateBalance }} BTC</h2>
              <span class="carat"><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link> 

        <router-link class="wallet_container" :to="{ name: 'delayed' }">
          <div class="wallet_container_left">
          <h2>Delayed Wallet</h2>
          <h2 class="time_decay">5 SD cards + 2 Time Machine Keys</h2>
          </div>
          <div class="wallet_container_right">
            <h2 class="balance_overview">{{ this.delayedBalance }} BTC</h2>
            <span class="carat"><img src="@/assets/carat_right.png"/></span>
          </div>
        </router-link> 
          <div class="decay_timer">
            <h2 class="time_decay">Approximate time until next decay: 1 year & 162 days</h2>
          </div>
      </div>
  </div>
  <button @click="test()">Test</button>
</template>


<script>
import Nav from '@/components/Nav'
import { RouterView, RouterLink } from "vue-router";
import store from '../store.js'
import Compromised from './tripwire/compromised.vue'
const invoke = window.__TAURI__.invoke

{
  RouterView;
  RouterLink
}

export default {
  name: 'Dashboard',
  components: {
    Nav,
    Compromised,
  },
     mounted(){
      invoke('get_balance_med_wallet').then((res)=>{
        store.commit('setTest', `getting balance for med wallet: ${res}`)
        store.commit('setImmediateBalance', `${res}`)
      })
      .catch((e)=>{
        store.commit('setTest', `error getting new high wallet address ${e}`)
      })
      invoke('get_balance_high_wallet').then((res)=>{
        store.commit('setTest', `getting balance for high wallet: ${res}`)
        store.commit('setDelayedBalance', `${res}`)
      })
      .catch((e)=>{
        store.commit('setTest', `error getting new high wallet address ${e}`)
      })
      this.duressSetup = store.getters.getDuressSetup
      this.recoverySetup = store.getters.getRecoverySetup
      this.tripwireSetup = store.getters.getTripwireSetup

      //below are the post set up redirects for first time users that have only completed initial set up
      if(this.recoverySetup == false){
        this.$router.push({ name: 'piiPostSetup1' })
      }
      else if(this.duressSetup == false){
        this.$router.push({ name: 'duressPostSetup1' })
      }
      else if(this.tripwireSetup == false){
        this.$router.push({ name: 'tripwirePostSetup1' })
      }
 },
 methods:{
  test(){
    console.log('post set up recovery:', this.recoverySetup)
    console.log('post set up duress:', this.duressSetup)
    console.log('post set up tripwire:', this.tripwireSetup)
    console.log('tripwire', this.tripwire)
  }
 },
 computed:{
 tripwire(){
    return store.getters.getTripwireTripped}
 },
 immediateBalance(){
  return store.getters.getImmediateBalance
 },
 delayedBalance(){
  return store.getters.getDelayedBalance
 },
 tripwireSetup(){
  return store.getters.getTripwireSetup
 },
 recoverySetup(){
  return store.getters.getRecoverySetup
 },
 duressSetup(){
  return store.getters.getDuressSetup
 }
}
</script>

<style scoped>
h2{
  color:#000000;
}
.time_decay{
  color:#777777;
}

</style>