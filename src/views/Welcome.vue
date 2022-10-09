<template>
  <div v-if="this.bpsHealthy == false || this.btcCoreHealthy == false" class="loading">
  <header>
    <h1>Welcome to Arctica</h1>
    <h2>Hang Tight. We are checking on a few things.</h2>
  </header>
    <div class="btn_container"> 
        <button class="btn3">Log in</Button>
    </div>
  </div>


  <div v-else class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Everything looks good. Glad to have you back.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="login()" class="btn">Log in</Button>
        <button v-if="tripwireTripped == 'none' && tripwireSetup == true" @click="quickWithdrawal()" class="btn2">Quick Withdrawal - $500</button>
        <button v-else class="btn6">Quick Withdrawal - $500</button>
       
    </div>
  </div>
</template>

<!-- This screen is where we will eventually:
-check for a transfer CD & PSBTs (virtual labels and update state)
-check which SD, if any, is currently inserted (virtual labels update state)
-ensure Bitcoin Core is synced (update state)
-check for a BPS connection (update state)
-check the tripwire (update state)
-Check for any published time machine keys/privacy keys (update state) -->

<!-- Quick withdrawal button should eventually grey out if the balance has been swept/accessed or is not set up -->


<script>
import { valueToNode } from '@babel/types'
import { nextTick } from 'process'
import store from '../store.js'

export default {
  name: 'Welcome',
    methods: {
        login(){
           //user is returning with an immediate account PSBT that has been signed by 1 SD card
            if(this.psbtFound == true && this.psbt == '1of2' && this.currentSD != 'one' && this.currentSD !='none'){
              this.$router.push({ name:'sign2of2' })
            }
            //user is returning with an immediate account PSBT that has been signed by 2 SD cards
            else if(this.psbtFound == true && this.psbt == '2of2' && this.currentSD == 'one' && this.currentSD !='none' && this.primaryMachine == true){
              this.$router.push({ name:'immediateBroadcast' })
            }
            //user is returning with a delayed account PSBT that has been signed by 1 SD card
            else if(this.psbtFound == true && this.psbt == '1of5' && this.currentSD != 'one' && this.currentSD !='none'){
              this.$router.push({ name:'sign2of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 2 SD card
            else if(this.psbtFound == true && this.psbt == '2of5' && this.currentSD != 'one' && this.currentSD !='none'){
              this.$router.push({ name:'sign3of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 3 SD card
            else if(this.psbtFound == true && this.psbt == '3of5' && this.currentSD != 'one' && this.currentSD !='none'){
              this.$router.push({ name:'sign4of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 4 SD card
            else if(this.psbtFound == true && this.psbt == '4of5' && this.currentSD != 'one' && this.currentSD !='none'){
              this.$router.push({ name:'sign5of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 5 SD card and time lock is enabled
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 'one' && this.currentSD !='none' && this.primaryMachine == true && this.timelock == true){
              this.$router.push({ name:'TimeMachine1' })
            }
            //user is returning with a delayed account PSBT that has been signed by 5 SD card and time lock is disabled
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 'one' && this.currentSD !='none' && this.primaryMachine == true && this.timelock == false){
              this.$router.push({ name:'delayedBroadcast' })
            }
            //user has manually recovered password using the appropriate amount of SD cards
            else if(this.manualDecrypt == true){
              this.$router.push({ name: 'dashboard' })
            }
            //user has bricked their relationship with BPS and must manually decrypt
            else if(this.bpsBricked == true){
              this.$router.push({ name: 'BPS_Bricked' })
            }
            //user is logging in with attic key
            else if(this.currentSD == 'one'){
              this.$router.push({ name: 'Login'})
            }
            //user does not have SD 1 inserted and/or is trying to login with SD 2-7 and does not have a valid transfer CD inserted
            else{
              this.$router.push({ name: 'Boot' })
            }
            
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
            this.$router.push({ name: 'quick1' })
        },
    },
    computed: {
      psbtFound(){
        return store.getters.getPSBTFound
      },
      psbt(){
        return store.getters.getPSBT
      },
      timelock(){
        return store.getters.getTimeLock
      },
      btcCoreHealthy(){
        return store.getters.getBTCCoreHealthy
      },
      bpsHealthy(){
        return store.getters.getBPSHealthy
      },
      tripwireTripped(){
        return store.getters.getTripwireTripped
      },
      tripwireSetup(){
        return store.getters.getTripwireSetup
      },
      timeMachineKeysFound(){
        return store.getters.getTimeMachineKeysFound
      },
      privacyKeysFound(){
        return store.getters.getPrivacyKeysFound
      },
      currentSD(){
        return store.getters.getCurrentSD
      },
      bpsBricked(){
        return store.getters.getBPSBricked
      },
      primaryMachine(){
        return store.getters.getPrimaryMachine
      },
      manualDecrypt(){
        if(this.privacyKeysFound == true){
          store.commit('setManualDecrypt', true)
          return store.getters.getManualDecrypt
        }else{return store.getters.getManualDecrypt}
      },
      setup1(){
        return store.getters.getSetup1
      },
      setup2(){
        return store.getters.getSetup2
      },
      setup3(){
        return store.getters.getSetup3
      },
      setup4(){
        return store.getters.getSetup4
      },
      setup5(){
        return store.getters.getSetup5
      },
      setup6(){
        return store.getters.getSetup6
      },
      setup7(){
        return store.getters.getSetup7
      },
      setup8(){
        return store.getters.getSetup8
      },
      setup9(){
        return store.getters.getSetup9
      },
      setup10(){
        return store.getters.getSetup10
      },
      setup11(){
        return store.getters.getSetup11
      },
      setup12(){
        return store.getters.getSetup12
      },
      setup13(){
        return store.getters.getSetup13
      },
      setup14(){
        return store.getters.getSetup14
      },
      setup15(){
        return store.getters.getSetup15
      },
    },
    mounted(){
      const invoke = window.__TAURI__.invoke
      invoke('read').then((res) => {
          const partsArray = res.split('\n')
          const partsArray1 = partsArray.split('=')
          for(i in partsArray1){
            store.commit('setConfig', partsArray1[i], partsArray1[i + 1])
          }
        //need to turn res into a dictionary here and feed it to setConfig
        store.commit('setConfig', dictionary )
                })
      //for initial set up only
      if(this.setup1 == true && this.currentSD == 'one'){
        this.$router.push({ name: 'Setup12' })
      }
      else if(this.setup2 == true && this.currentSD == 'two'){
        this.$router.push({ name: 'Setup14' })
      }
      else if(this.setup3 == true && this.currentSD == 'three'){
        this.$router.push({ name: 'Setup15' })
      }
      else if(this.setup4 == true && this.currentSD == 'four' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup16' })
      }
      else if(this.setup5 == true && this.currentSD == 'five' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup18' })
      }
      else if(this.setup6 == true && this.currentSD == 'six' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup19' })
      }
      else if(this.setup7 == true && this.currentSD == 'seven' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup20' })
      }
      else if(this.setup8 == true && this.currentSD == 'one' && this.primaryMachine == true){
        this.$router.push({ name: 'Setup21' })
      }
      else if(this.setup9 == true && this.currentSD == 'two' && this.primaryMachine == true){
        this.$router.push({ name: 'Setup27a' })
      }
      else if(this.setup10 == true && this.currentSD == 'three' && this.primaryMachine == true){
        this.$router.push({ name: 'Setup31a' })
      }
      else if(this.setup11 == true && this.currentSD == 'four' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup35a' })
      }
      else if(this.setup12 == true && this.currentSD == 'five' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup39a' })
      }
      else if(this.setup13 == true && this.currentSD == 'six' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup43a' })
      }
      else if(this.setup14 == true && this.currentSD == 'seven' && this.primaryMachine == false){
        this.$router.push({ name: 'Setup47a' })
      }
      else if(this.setup15 == true && this.currentSD == 'one' && this.primaryMachine == true){
        this.$router.push({ name: 'Setup50b' })
      }

      //eventually we should check externally for time machine keys here as well
      if(this.timeMachineKeysFound == true){
        store.commit('setTimeLock', false)
      }

      //below we redirect user to boot screen if they have no SD inserted
      if(this.currentSD == 'none'){
        this.$router.push({ name:'Boot' })
      }

      //below we redirect the user to the boot screen if they do not have SD 1 inserted AND there is also no PSBT currently present on a transfer CD
      if(this.currentSD != 'one' && this.psbtFound == 'none'){
        this.$router.push({ name:'Boot' })
      }

    },
}
</script>

<style scoped>
.btn3{
  cursor:wait;
}
</style>

