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
            if(this.currentSD == 'one' && this.bpsBricked != true){
              this.$router.push({ name: 'Login'})
            }else if(this.bpsBricked == true){
              this.$router.push({ name: 'BPS_Bricked' })
            }
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
      }
    },
    mounted(){
      //eventually we should check externally for time machine keys here as well
      if(this.timeMachineKeysFound == true){
        store.commit('setTimeLock', false)
      }
      //below we redirect the user to the boot screen if they do not have SD 1 inserted AND there is also no PSBT currently present on a transfer CD
      if(this.currentSD != 'one' && this.psbtFound == false){
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

