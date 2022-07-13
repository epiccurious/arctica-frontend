<template>
  <div v-if="readyToWork == false" class="loading">
  <header>
    <h1>Welcome to Arctica</h1>
    <h2>Hang Tight. We are checking on a few things.</h2>
  </header>
    <div class="btn_container"> 
        <button @click="refresh()" class="btn3">Log in</Button>
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
            this.btcCoreHealthy = store.getters.getBTCCoreHealthy
            this.bpsHealthy = store.getters.getBPSHealthy
            if(this.btcCoreHealthy == true && this.bpsHealthy == true){
              this.$router.push({ name: 'Login'})
            }else{
              this.readyToWork = false
            }
            
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
            this.$router.push({ name: 'quick1' })
        },
        refresh(){
          this.btcCoreHealthy = store.getters.getBTCCoreHealthy
          this.bpsHealthy = store.getters.getBPSHealthy
          if(this.btcCoreHealthy == true && this.bpsHealthy == true){
            this.readyToWork = true
          }
        }
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
      this.bpsHealthy = store.getters.getBPSHealthy
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

      //show green light for login if ready to work conditions are found true
      if(this.bpsHealthy == true && this.btcCoreHealthy == true){
        this.readyToWork = true
      }

 
    },
}
</script>

<style scoped>
.btn3{
  cursor:wait;
}
</style>

