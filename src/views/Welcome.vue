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
const invoke = window.__TAURI__.invoke

export default {
  name: 'Welcome',
    methods: {
        login(){
           //user is returning with an immediate account PSBT that has been signed by 1 SD card
            if(this.psbtFound == true && this.psbt == '1of2' && this.currentSD != 1 && this.currentSD != 0){
              this.$router.push({ name:'sign2of2' })
            }
            //user is returning with an immediate account PSBT that has been signed by 2 SD cards
            else if(this.psbtFound == true && this.psbt == '2of2' && this.currentSD == 1 && this.currentSD != 0){
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
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 1 && this.currentSD != 0 && this.timelock == true){
              this.$router.push({ name:'TimeMachine1' })
            }
            //user is returning with a delayed account PSBT that has been signed by 5 SD card and time lock is disabled
            else if(this.psbtFound == true && this.psbt == '5of5' && this.currentSD == 1 && this.currentSD != 0 && this.timelock == false){
              this.$router.push({ name:'delayedBroadcast' })
            }
            //user has manually recovered password using the appropriate amount of SD cards
            else if(this.decrypted == true){
              //unpacking sensitive dir
              invoke('unpack').then((res)=>{
                store.commit('setTest', `unpacking sensitive dir ${res}`)
                this.$router.push({ name: 'dashboard' })
              })
              .catch((e)=>{
                store.commit('setTest', `error unpacking sensitive dir ${e}`)
              })
              
            }
            //user has bricked their relationship with BPS and must manually decrypt
            else if(this.bpsBricked == true){
              this.$router.push({ name: 'BPS_Bricked' })
            }
            //user is logging in with attic key, this is at at the very end of the logic loop here intentionally
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
      test(){
        return store.getters.getTest
      },
      decrypted(){
        if(this.privacyKeysFound == true){
          store.commit('setDecrypted', true)
          return store.getters.getDecrypted
        }else{return store.getters.getDecrypted}
      },
      setupStep(){
        return store.getters.getSetupStep
      }
    },
    mounted(){
      //Will error out if bitcoin core is not running
      invoke('generate_wallet').then((res)=>{
        store.commit('setTest', `IIIIIII: ${res} IIIIIIIII`)
      })

      //Will error out if there is no wallet
      invoke('get_address_high_wallet').then((res)=>{
        store.commit('setTest', `iiiiiii: ${res} iiiiiiiii`)
      })

      //creating ramdisk for sensitive data
      invoke('create_ramdisk').then((res)=>{
        store.commit('setTest', `creating ramdisk ${res}`)
      })
      .catch((e)=>{
        store.commit('setTest', `error creating ramdisk ${e}`)
      })
      //check for masterkey
      invoke('check_for_masterkey').then((res)=>{
        if(res == 'masterkey found'){
          store.commit('setTest', `checking for masterkey: ${res}`)
          store.commit('setTest', 'masterkey found!')
          store.commit('setDecrypted', true)
        }
        else{
          store.commit('setTest', `checking for masterkey: ${res}`)
          store.commit('setTest', `masterkey not found`)  
        }
        
      }).catch((e)=>{
        store.commit('setTest',  `error checking for masterkey ${e}`)
      })
      //reading config values 
      invoke('read').then((res) => {
          store.commit('setTest', `invoking read config: ${res}`)
          let resArray = res.split("\n")
          store.commit('setTest', `response Array: ${resArray}`)
          for(let i = 0; i < resArray.length; i ++){
            let it = resArray[i].split("=")
            store.commit('setTest', `for loop number: ${i+1}; key: ${it[0].toUpperCase()} value: ${it[1]}`)
            //check config for current SD
            if (String(it[0]).toUpperCase() == 'SDNUMBER'){
              store.commit('setCurrentSD', parseInt(it[1]))
              this.currentSD == store.getters.getCurrentSD
              store.commit('setTest', `SD NUMBER successfully set to: ${this.currentSD}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
            //check config for current setup step
            else if(String(it[0]).toUpperCase() == 'SETUPSTEP'){
              store.commit('setSetupStep', parseInt(it[1]))
              this.setupStep == store.getters.getSetupStep
              store.commit('setTest', `SETUP STEP successfully set to: ${this.setupStep}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
            else{
              store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
        }
        store.commit('setTest', `exiting config read`)
        //mount internal disk and symlink .bitcoin folders if on SD 1 and not in intial install
        if(this.currentSD == 1 && this.setupStep == 0){
          invoke('mount_internal').then((res)=> {
              store.commit('setTest', `invoking mount internal ${res}`)
              //start bitcoind
              invoke('start_bitcoind').then((res)=> {
                store.commit('setTest', `starting bitcoin daemon ${res}`)
              })
              .catch((e)=> {
                store.commit('setTest', `error starting bitcoin daemon error: ${e}`)
              })
          })
        .catch((e)=> {
          store.commit('setTest', `mount internal error: ${e}`)
          })

        }    
        //mount internal fallback    
        else if(this.currentSD == 1){
          invoke('mount_internal').then((res)=> {
          store.commit('setTest', `invoking mount internal ${res}`)
        })
        .catch((e)=> {
          store.commit('setTest', `mount internal error: ${e}`)
        })
        }
        //redirects
        //set up step redirects
        if(this.setupStep == 1 && this.currentSD == 1){
          store.commit('setTest', 'setup step 1 found, redirecting user to setup12')
          this.$router.push({ name: 'Setup12' })
        }
        else if(this.setupStep == 2 && this.currentSD == 2){
          store.commit('setTest', 'setup step 2 found, redirecting user to setup14a')
          this.$router.push({ name: 'Setup14a' })
        }
        else if(this.setupStep == 3 && this.currentSD == 3){
          store.commit('setTest', 'setup step 3 found, redirecting user to setup15a')
          this.$router.push({ name: 'Setup15a' })
        }
        else if(this.setupStep == 4 && this.currentSD == 4){
          store.commit('setTest', 'setup step 4 found, redirecting user to setup16')
          this.$router.push({ name: 'Setup16' })
        }
        else if(this.setupStep == 5 && this.currentSD == 5){
          store.commit('setTest', 'setup step 5 found, redirecting user to setup18a')
          this.$router.push({ name: 'Setup18a' })
        }
        else if(this.setupStep == 6 && this.currentSD == 6){
          store.commit('setTest', 'setup step 6 found, redirecting user to setup19a')
          this.$router.push({ name: 'Setup19a' })
        }
        else if(this.setupStep == 7 && this.currentSD == 7){
          store.commit('setTest', 'setup step 7 found, redirecting user to setup20a')
          this.$router.push({ name: 'Setup20a' })
        }
        else if(this.setupStep == 8 && this.currentSD == 1){
          store.commit('setTest', 'setup step 8 found, redirecting user to setup21')
          this.$router.push({ name: 'Setup21' })
        }
        else if(this.setupStep == 9 && this.currentSD == 2){
          store.commit('setTest', 'setup step 9 found, redirecting user to setup27a')
          this.$router.push({ name: 'Setup27a' })
        }
        else if(this.setupStep == 10 && this.currentSD == 3){
          store.commit('setTest', 'setup step 10 found, redirecting user to setup31a')
          this.$router.push({ name: 'Setup31a' })
        }
        else if(this.setupStep == 11 && this.currentSD == 4){
          store.commit('setTest', 'setup step 11 found, redirecting user to setup35a')
          this.$router.push({ name: 'Setup35a' })
        }
        else if(this.setupStep == 12 && this.currentSD == 5){
          store.commit('setTest', 'setup step 12 found, redirecting user to setup39a')
          this.$router.push({ name: 'Setup39a' })
        }
        else if(this.setupStep == 13 && this.currentSD == 6){
          store.commit('setTest', 'setup step 13 found, redirecting user to setup43a')
          this.$router.push({ name: 'Setup43a' })
        }
        else if(this.setupStep == 14 && this.currentSD == 7){
          store.commit('setTest', 'setup step 14 found, redirecting user to setup47a')
          this.$router.push({ name: 'Setup47a' })
        }
        else if(this.setupStep == 15 && this.currentSD == 1){
          store.commit('setTest', 'setup step 15 found, redirecting user to setup50b')
          this.$router.push({ name: 'Setup50b' })
        }
        //redirect user to boot screen if they have SD 2-7 or no SD inserted
        else if(this.currentSD != 1){
          store.commit('setTest', 'SD card 1 not detected, redirecting to boot screen')
          this.$router.push({ name:'Boot' })
        }

        //eventually check externally for time machine keys here
        if(this.timeMachineKeysFound == true){
          store.commit('setTimeLock', false)
        }

        })
          .catch((e) => {
            store.commit('setTest', `read config error: ${e}`)
      })

    },
}
</script>

<style scoped>
.btn3{
  cursor:wait;
}
</style>

