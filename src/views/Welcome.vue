<template>
  <div v-if="readyToWork == false" class="loading">
  <header>
    <h1>Welcome to Arctica</h1>
    <h2>Hang Tight. We are checking on a few things.</h2>
  </header>
    <div class="btn_container"> 
        <button class="btn3">Log in</Button>
        <button @click="greenLight()" class="btn2">Debug - simulate green light</button>
    </div>
  </div>


  <div v-else class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Everything looks good. Glad to have you back.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="login()" class="btn">Log in</Button>
        <button @click="quickWithdrawal()" class="btn2">Quick Withdrawal - $500</button>
       
    </div>
  </div>
</template>

<!-- This screen is where we will eventually:
-check for PSBTs
-ensure Bitcoin Core is synced
-check for a BPS connection
-check the tripwire
-Check for any published time machine keys/privacy keys -->

<!-- Quick withdrawal button should eventually grey out if the balance has been swept/accessed -->


<script>
import store from '../store.js'

export default {
  name: 'Welcome',
    methods: {
        login(){
            this.$router.push({ name: 'Login'})
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
            this.$router.push({ name: 'quick1' })
        },
        readyToWorkFn(){
          if(this.btcCoreHealthy != null && this.timeMachineKeysFound != null && this.privacyKeysFound != null){
            this.readyToWork = true
            }
            //add more logic to this as the appropriate conditionals come online
      },
      //this is a debug fn that simulates checking for all of the conditions required to allow login button to enable
      debugBoot(){
        store.commit('setBTCCoreHealthy', false)
        this.btcCoreHealthy = store.getters.getBTCCoreHealthy

        store.commit('setTimeMachineKeysFound', false)
        this.timeMachineKeysFound = store.getters.getTimeMachineKeysFound

        store.commit('setPrivacyKeysFound', false)
        this.privacyKeysFound = store.getters.getPrivacyKeysFound
      },
        greenLight(){
          console.log('green light given, this is currently a debug feature only and does nothing except enable you to proceed')
          this.debugBoot()
          this.readyToWorkFn()
            
          
        },
    },
    computed: {},
    data(){
      return{
        readyToWork: false,
        psbtFound:null, 
        btcCoreHealthy:null, 
        bpsHealthy:null, 
        tripwireHealthy:null, 
        timeMachineKeysFound:null, 
        privacyKeysFound:null,
        currentSD: null,
        bpsBricked: null,
      }
    },
    mounted(){
      this.psbtFound = store.getters.getPSBTFound
      this.btcCoreHealthy = store.getters.getBTCCoreHealthy
      this.tripwireHealthy = store.getters.getTripwireHealthy

      //eventually we should check externally for time machine keys here as well
      this.timeMachineKeysFound = store.getters.getTimeMachineKeysFound
      if(this.timeMachineKeysFound == true){
        store.commit('setTimeLock', false)
      }

      this.privacyKeysFound = store.getters.getPrivacyKeysFound
      this.currentSD = store.getters.getCurrentSD
      //below we redirect the user to the boot screen if they do not have SD 1 inserted AND there is also no PSBT currently present on a transfer CD
      if(this.currentSD != 'one' && this.psbtFound == false){
        this.$router.push({ name:'Boot' })
      }
      else if(this.currentSD == 'none'){
        this.$router.push({ name: 'Boot' })
      }

      //check for a good BPS connection
      this.bpsHealthy = store.getters.getBPSHealthy
      //below we redirect the user to the BPS bricked screen for manual decryption if they have atleast 5 failed attempts to login and have bricked their BPS public key relationship
      this.bpsBricked = store.getters.getBPSBricked
      if(this.bpsBricked == true){
          this.$router.push({ name: 'BPS_Bricked' })
      }
 
    },
}
</script>

<style scoped>
.btn3{
  cursor:wait;
}
</style>

