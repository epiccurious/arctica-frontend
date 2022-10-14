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
import store from '../store.js'

export default {
  name: 'Welcome',
    methods: {
        login(){
           //user is returning with an immediate account PSBT that has been signed by 1 SD card
            if(this.psbtFound == true && this.psbt == '1of2' && this.currentSD != 1 && this.currentSD != 0){
              this.$router.push({ name:'sign2of2' })
            }
            //user is returning with an immediate account PSBT that has been signed by 2 SD cards
            else if(this.psbtFound == true && this.psbt == '2of2' && this.currentSD == 1 && this.currentSD != 0 && this.primaryMachine == true){
              this.$router.push({ name:'immediateBroadcast' })
            }
            //user is returning with a delayed account PSBT that has been signed by 1 SD card
            else if(this.psbtFound == true && this.psbt == '1of5' && this.currentSD != 1 && this.currentSD != 0){
              this.$router.push({ name:'sign2of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 2 SD card
            else if(this.psbtFound == true && this.psbt == '2of5' && this.currentSD != 1 && this.currentSD != 0){
              this.$router.push({ name:'sign3of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 3 SD card
            else if(this.psbtFound == true && this.psbt == '3of5' && this.currentSD != 1 && this.currentSD != 0){
              this.$router.push({ name:'sign4of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 4 SD card
            else if(this.psbtFound == true && this.psbt == '4of5' && this.currentSD != 1 && this.currentSD !=0){
              this.$router.push({ name:'sign5of5' })
            }
            //user is returning with a delayed account PSBT that has been signed by 5 SD card and time lock is enabled
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 1 && this.currentSD != 0 && this.primaryMachine == true && this.timelock == true){
              this.$router.push({ name:'TimeMachine1' })
            }
            //user is returning with a delayed account PSBT that has been signed by 5 SD card and time lock is disabled
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 1 && this.currentSD != 0 && this.primaryMachine == true && this.timelock == false){
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
            else if(this.currentSD == 1){
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
      setupStep(){
        return store.getters.getSetupStep
      }
    },
    mounted(){
      const invoke = window.__TAURI__.invoke
      invoke('mount_internal').then((res)=> {
        store.commit('setTest', 'success')
        console.log(res)
      })
      invoke('read').then((res) => {
          let resArray = res.split("\n")
          for(let i = 0; i < resArray.length; i ++){
            let it = resArray[i].split("=")
            //check config for current SD
            if (it[0] == 'sdNumber'){
              store.commit('setCurrentSD', parseInt(it[1]))
            }
            //check config for current setup step
            else if(it[0] == 'setupStep'){
              store.commit('setSetupStep', parseInt(it[1]))
            }
          }
        })
        
      //for initial set up only
      if(this.setupStep == 1 && this.currentSD == 1){
        this.$router.push({ name: 'Setup12' })
      }
      else if(this.setupStep == 2 && this.currentSD == 2){
        this.$router.push({ name: 'Setup14' })
      }
      else if(this.setupStep == 3 && this.currentSD == 3){
        this.$router.push({ name: 'Setup15' })
      }
      else if(this.setupStep == 4 && this.currentSD == 4 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup16' })
      }
      else if(this.setupStep == 5 && this.currentSD == 5 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup18' })
      }
      else if(this.setupStep == 6 && this.currentSD == 6 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup19' })
      }
      else if(this.setupStep == 7 && this.currentSD == 7 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup20' })
      }
      else if(this.setupStep == 8 && this.currentSD == 1 && this.primaryMachine == true){
        this.$router.push({ name: 'Setup21' })
      }
      else if(this.setupStep == 9 && this.currentSD == 2 && this.primaryMachine == true){
        this.$router.push({ name: 'Setup27a' })
      }
      else if(this.setupStep == 10 && this.currentSD == 3 && this.primaryMachine == true){
        this.$router.push({ name: 'Setup31a' })
      }
      else if(this.setupStep == 11 && this.currentSD == 4 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup35a' })
      }
      else if(this.setupStep == 12 && this.currentSD == 5 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup39a' })
      }
      else if(this.setupStep == 13 && this.currentSD == 6 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup43a' })
      }
      else if(this.setupStep == 14 && this.currentSD == 7 && this.primaryMachine == false){
        this.$router.push({ name: 'Setup47a' })
      }
      else if(this.setupStep == 15 && this.currentSD == 1 && this.primaryMachine == true){
        this.$router.push({ name: 'Setup50b' })
      }

      //eventually we should check externally for time machine keys here as well
      if(this.timeMachineKeysFound == true){
        store.commit('setTimeLock', false)
      }

      //below we redirect user to boot screen if they have no SD inserted
      if(this.currentSD == 0){
        this.$router.push({ name:'Boot' })
      }

      //below we redirect the user to the boot screen if they do not have SD 1 inserted AND there is also no PSBT currently present on a transfer CD
      if(this.currentSD != 1 && this.psbtFound == 'none'){
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

