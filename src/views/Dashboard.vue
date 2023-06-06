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
            <h2 class="time_decay">2 HWs</h2>
            </div>
            <div class="wallet_container_right">
              <h2 class="balance_overview"> {{ this.immediateBalance }} BTC</h2>
              
              <span class="carat"><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link> 

        <router-link class="wallet_container" :to="{ name: 'delayed' }">
          <div class="wallet_container_left">
          <h2>Delayed Wallet (Disabled)</h2>
          <h2 class="time_decay">5 HWs + 2 Time Machine Keys</h2>
          </div>
          <div class="wallet_container_right">
            <h2 class="balance_overview">{{ this.delayedBalance }} BTC</h2>
            <span class="carat"><img src="@/assets/carat_right.png"/></span>
          </div>
        </router-link> 
          <div v-if="this.decayComplete == false" class="decay_timer">
            <h2 class="time_decay">Time until next decay: {{ this.years }} year(s) {{ this.months }} month(s) {{ this.days }} day(s) {{ this.hours }} hour(s) {{ this.minutes }} minute(s) {{ this.seconds }} second(s)</h2>
          </div>
          <div v-else class="decay_timer">
            <h2 class="time_decay">Decay Complete</h2>
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
 hwNumber:{
            get(){
                return store.getters.getcurrentHW
            }
        }
      },
    mounted(){
          invoke('calculate_decay_time').then((res)=>{
            console.log("response:", res)
            if(res.contains("decay complete")){
              decayComplete = true

            }
            else{
            const parts = res.split(",")
            this.years = parts[0].split("=")[1].trim()
            this.months = parts[1].split("=")[1].trim()
            this.weeks = parts[2].split("=")[1].trim()
            this.days = parts[3].split("=")[1].trim()
            this.hours = parts[4].split("=")[1].trim()
            this.minutes = parts[5].split("=")[1].trim()
            this.seconds = parts[6].split("=")[1].trim()
            }
          })
          invoke('get_balance', {walletname: "immediate", hwnumber: this.hwNumber.toString()}).then((res)=>{
            store.commit('setDebug', `getting balance for immediate wallet: ${res}`)
            let bal = parseFloat(res)
            store.commit('setImmediateBalance', `${bal}`)
          }).catch((e)=>{
          store.commit('setDebug', `error getting immediate wallet balance ${e}`)
            })
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
    decayComplete: false,
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
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