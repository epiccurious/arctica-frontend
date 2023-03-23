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

<!-- the below code adds a display for a single sig hot wallet I had created for testing but this is deprecated and all assets 
can be removed once immediate wallet is functional -->
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
              <h2 class="balance_overview">{{ imbal }} BTC</h2>
              <span class="carat"><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link> 

        <router-link class="wallet_container" :to="{ name: 'delayed' }">
          <div class="wallet_container_left">
          <h2>Delayed Wallet</h2>
          <h2 class="time_decay">5 SD cards + 2 Time Machine Keys</h2>
          </div>
          <div class="wallet_container_right">
            <h2 class="balance_overview">(Disabled) BTC</h2>
            <span class="carat"><img src="@/assets/carat_right.png"/></span>
          </div>
        </router-link> 
          <div class="decay_timer">
            <h2 class="time_decay">Approximate time until next decay: 1 year & 162 days</h2>
          </div>
      </div>
  </div>
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
          invoke('get_balance', {wallet: "immediate", sdcard:this.currentSD.toString()}).then((res)=>{
            store.commit('setDebug', `getting balance for immediate wallet: ${res}`)
            this.imbal = parseInt(res).toPrecision(9)
            store.commit('setImmediateBalance', `${imbal}`)
          }).catch((e)=>{
          store.commit('setDebug', `error getting immediate wallet balance ${e}`)
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
   data(){
      return{
          imbal: 0,
          delbal: 0,
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
 },
 currentSD(){
        return store.getters.getCurrentSD
      },
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