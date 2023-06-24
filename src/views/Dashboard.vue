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
            <h3 v-if="immediateDecay == false" class="time_decay">2 HWs</h3>
            <h3 v-else-if="immediateDecay == true" class="time_decay">1 HW</h3>
            </div>
            <div class="wallet_container_right">
              <h2 class="balance_overview"> {{ this.immediateBalance }} BTC</h2>
              <span class="carat"><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link> 
        <div v-if="this.immediateDecayComplete == false" class="decay_timer">
            <h2 class="time_decay">Time until next decay: {{ this.immediateYears }} year(s), {{ this.immediateMonths }} month(s), {{ this.immediateDays }} day(s), {{ this.immediateHours }} hour(s), {{ this.immediateMinutes }} minute(s), {{ this.immediateSeconds }} second(s)</h2>
          </div>
          <div v-else class="decay_timer">
            <h2 class="time_decay">Decay Complete</h2>
          </div>
        <router-link class="wallet_container" :to="{ name: 'delayed' }">
          <div class="wallet_container_left">
          <h2>Delayed Wallet (Disabled)</h2>
          <h3 class="time_decay">5 HWs + Timelock</h3>
          </div>
          <div class="wallet_container_right">
            <h2 class="balance_overview">{{ this.delayedBalance }} BTC</h2>
            <span class="carat"><img src="@/assets/carat_right.png"/></span>
          </div>
        </router-link> 
        <h2 class="time_decay">Time until next decay: (disabled)</h2>
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
 computed:{
 tripwire(){
    return store.getters.getTripwireTripped
 },
 immediateBalance:{
            get(){
                return store.getters.getImmediateBalance
            }
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
 immediateDecay(){
  return store.getters.getImmediateDecay
 },
 hwNumber:{
            get(){
                return store.getters.getcurrentHW
            }
        }
      },
    mounted(){
          //calculate immediate_decay
          invoke('calculate_decay_time', {file: "immediate_decay"}).then((res)=>{
            console.log("response:", res)
            if(res.includes("decay complete")){
              store.commit('setImmediateDecay', true)
              this.immediateDecayComplete = true

            }
            else{
            const parts = res.split(",")
            this.immediateYears = parts[0].split("=")[1].trim()
            this.immediateMonths = parts[1].split("=")[1].trim()
            this.immediateWeeks = parts[2].split("=")[1].trim()
            this.immediateDays = parts[3].split("=")[1].trim()
            this.immediateHours = parts[4].split("=")[1].trim()
            this.immediateMinutes = parts[5].split("=")[1].trim()
            this.immediateSeconds = parts[6].split("=")[1].trim()
            }
          })
          invoke('get_balance', {walletname: "immediate", hwnumber: this.hwNumber.toString()}).then((res)=>{
            store.commit('setDebug', `getting balance for immediate wallet: ${res}`)
            let bal = parseFloat(res)
            store.commit('setImmediateBalance', `${bal}`)
          }).catch((e)=>{
          store.commit('setDebug', `error getting immediate wallet balance ${e}`)
            })
        //TODO calculate delayed_decay1-5
        //TODO get delayed balance
      this.duressSetup = store.getters.getDuressSetup
      this.recoverySetup = store.getters.getRecoverySetup
      this.tripwireSetup = store.getters.getTripwireSetup
      //below are the post set up redirects for first time users that have only completed initial set up
      if(this.recoverySetup == false){
        store.commit('setDebug', 'Sending user to piiPostSetup1')
        this.$router.push({ name: 'piiPostSetup1' })
      }
      else if(this.duressSetup == false){
        store.commit('setDebug', 'Sending user to duressPostSetup1')
        this.$router.push({ name: 'duressPostSetup1' })
      }
      else if(this.tripwireSetup == false){
        store.commit('setDebug', 'Sending user to tripwirePostSetup1')
        this.$router.push({ name: 'tripwirePostSetup1' })
      }
 },
 data(){
  return{
    immediateDecayComplete: false,
    immediateYears: 0,
    immediateMonths: 0,
    immediateWeeks: 0,
    immediateDays: 0,
    immediateHours: 0,
    immediateMinutes: 0,
    immediateSeconds: 0
  }
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