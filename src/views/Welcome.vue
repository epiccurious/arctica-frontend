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
      tripwireHealthy(){
        return store.getters.getBPSHealthy
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
      }
    },
    mounted(){
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

