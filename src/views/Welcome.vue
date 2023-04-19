<template>
    <div v-if="this.loading == true">
  <Loader/>
  </div>

  <div v-else-if="this.bpsHealthy == false || this.btcCoreHealthy == false" class="loading">
  <header>
    <h1>Welcome to Arctica</h1>
    <h2>Hang Tight. We are checking on a few things.</h2>
    <div v-if="this.btcCoreHealthy == false">
    <h2>Bitcoin Core Must Finish Syncing. This can take a long time. Do not turn off this computer.</h2>
    <h2>Progress: {{ syncProgress }}%</h2>
  </div>
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
-check for a BPS connection (update state)
-check the tripwire (update state)
-Check for any published time machine keys/privacy keys (update state) -->

<!-- Quick withdrawal button should eventually grey out if the balance has been swept/accessed or is not set up -->


<script>
import store from '../store.js'
const invoke = window.__TAURI__.invoke
import Loader from '@/components/loader'

export default {
  name: 'Welcome',
  components: {
    Loader
  },
    methods: {
        login(){
            if(this.decrypted == true && this.currentHW == 1){
              store.commit('setDebug', 'masterkey found in ramdisk, unpacking & sending user to dashboard')
              this.loading = true
              //unpacking sensitive dir
              store.commit('setLoadMessage', 'unpacking tarball...')
              invoke('unpack').then((res)=>{
                store.commit('setDebug', `unpacking sensitive dir ${res}`)
                store.commit('setLoadMessage', 'Loading immediate wallet...')
                invoke('load_wallet', {wallet_name: "immediate", hw_number: this.currentHW.toString()}).then((res) =>{
                    store.commit('setDebug', `Loaded Immediate Wallet: ${res}`)
                    store.commit('setLoadMessage', 'Loading delayed wallet...')
                    invoke('load_wallet', {wallet_name: "delayed", hw_number: this.currentHW.toString()}).then((res) =>{
                        store.commit('setDebug', `Loaded Delayed Wallet: ${res}`)
                        invoke('packup').then((res) => {
                          store.commit('setDebug', `successfully packed up: ${res}`)
                          this.loading = false
                          store.commit('setDebug', 'Login button pushed Sending user to dashboard')
                          this.$router.push({ name: 'dashboard' })
                        }).catch((e)=>{
                            store.commit('setDebug', `error packing up sensitive: ${e}`)
                            store.commit('setErrorMessage', `Error Packing up Sensitive Error Code: Welcome4 Response: ${e}`)
                            this.$router.push({ name: 'Error' })  
                        })
                    })
                    .catch((e)=>{
                        store.commit('setDebug', `error loading delayed wallet: ${e}`)
                        store.commit('setErrorMessage', `Error Loading delayed Wallet Error Code: Welcome2 Response: ${e}`)
                        this.$router.push({ name: 'Error' }) 
                    })

                })
                .catch((e)=>{
                    store.commit('setDebug', `error loading immediate wallet: ${e}`)
                    store.commit('setErrorMessage', `Error Loading immediate Wallet Error Code: Welcome3 Response: ${e}`)
                    this.$router.push({ name: 'Error' }) 
                })
              })
              .catch((e)=>{
                store.commit('setDebug', `error unpacking sensitive dir ${e}`)
                store.commit('setErrorMessage', `Error unpacking sensitive from welcome. Error code: Welcome1 Response: ${e}`)
                this.$router.push({ name: 'Error' })
              })
              
            }
            //user has bricked their relationship with BPS and must manually decrypt
            else if(this.bpsBricked == true){
              store.commit('setDebug', 'Sending user to BPS_Bricked')
              this.$router.push({ name: 'BPS_Bricked' })
            }
            //user is logging in with attic key, this is at at the very end of the logic loop here intentionally
            else if(this.currentHW == 1){
              store.commit('setDebug', 'Sending user to Login')
              this.$router.push({ name: 'Login'})
            }
            //user does not have HW 1 inserted and/or is trying to login with HW 2-7 and does not have a valid transfer CD inserted
            else{
              store.commit('setDebug', 'Sending user to Boot')
              this.$router.push({ name: 'Boot' })
            }
            
        },
        quickWithdrawal(){
            store.commit('setDebug', 'Quick Withdraw pushed, Sending user to quick1')
            this.$router.push({ name: 'quick1' })
        },
    },
    computed: {
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
      currentHW(){
        return store.getters.getcurrentHW
      },
      bpsBricked(){
        return store.getters.getBPSBricked
      },
      decrypted(){
        if(this.privacyKeysFound == true){
          store.commit('setDecrypted', true)
          return store.getters.getDecrypted
        }else{return store.getters.getDecrypted}
      },
      setupStep(){
        return store.getters.getSetupStep
      },
    },
    data(){
        return{
            syncProgress: 0,
            loading: false
        }
    },
    mounted(){
      //reading config values 
      invoke('read').then((res) => {
          store.commit('setDebug', `invoking read config: ${res}`)
          let resArray = res.split("\n")
          store.commit('setDebug', `response Array: ${resArray}`)
          for(let i = 0; i < resArray.length; i ++){
            let it = resArray[i].split("=")
            store.commit('setDebug', `for loop number: ${i+1}; key: ${it[0].toUpperCase()} value: ${it[1]}`)
            //check config for current HW
            if (String(it[0]).toUpperCase() == 'HWNUMBER'){
              store.commit('setcurrentHW', parseInt(it[1]))
              this.currentHW == store.getters.getcurrentHW
              store.commit('setDebug', `HW NUMBER successfully set to: ${this.currentHW}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
            //check config for current setup step
            else if(String(it[0]).toUpperCase() == 'SETUPSTEP'){
              store.commit('setSetupStep', parseInt(it[1]))
              this.setupStep == store.getters.getSetupStep
              store.commit('setDebug', `SETUP STEP successfully set to: ${this.setupStep}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
            else{
              store.commit('setDebug', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            }
        }
        store.commit('setDebug', `exiting config read`)
        //if the user has completed the initial flash of the 7 Hardware Wallets (config is present) create ramdisk and check for masterkey

              
        //creating ramdisk for sensitive data
        invoke('create_ramdisk').then((res)=>{
          store.commit('setDebug', `creating ramdisk ${res}`)
        })
        .catch((e)=>{
          store.commit('setDebug', `error creating ramdisk ${e}`)
          store.commit('setErrorMessage', `Error creating ramdisk. Error code: Welcome9 Response: ${e}`)
          this.$router.push({ name: 'Error' }) 
        })  

        //if user has completed initial setup and booted from a Hardware Wallet, mount internal disk and symlink .bitcoin folders..
        //we MAY be better off removing this as if decrypted was true we assumed the ramdisk already exists above and thus we could probably also assume 
        //that bitcoin core is already running properly and sync MAY have already occurred, in which case running sync again is superfluous. 
        if(this.currentHW == 1 && this.setupStep == 0){
          store.commit('setDebug', 'current HW = 1 and setupStep = 0 conditional met, invoking mount internal')
          this.loading = true
          store.commit('setLoadMessage', 'Mounting the internal drive...')
          invoke('mount_internal').then((res)=> {
              store.commit('setDebug', `invoking mount internal ${res}`)
              store.commit('setLoadMessage', 'Syncing Bitcoin Blockchain...')
              //start bitcoind with networking enabled
              invoke('start_bitcoind').then((res)=> {
                store.commit('setDebug', `starting bitcoin daemon ${res}`)
                this.loading = false
                //note: this conditional is nested within the previous conditional
                //TODO if we have determined masterkey is present earlier decrypted is true, wallet can be synced and user sent to dashboard automatically
                // if(this.decrypted == true && this.btcCoreHealthy == true){
                //   store.commit('setDebug', `decrypted state value is set to true, syncing med wallet...`)
                //   store.commit('setDebug', 'Sending user to dashboard')
                //   this.$router.push({ name: 'dashboard' })

                // }else{
                //   store.commit('setDebug', 'decrypted state value is set to false')
                // }
              })
              .catch((e)=> {
                store.commit('setDebug', `error starting bitcoin daemon error: ${e}`)    
                store.commit('setErrorMessage', `Error Starting Bitcoin Daemon Error code: Welcome6 Response: ${e}`)
                this.$router.push({ name: 'Error' })            
              })
            })
          .catch((e)=> {
            store.commit('setDebug', `mount internal error: ${e}`)
            store.commit('setErrorMessage', `Error Mounting internal. Error code: Welcome5 Response: ${e}`)
            this.$router.push({ name: 'Error' })
            })
        //user is booted on HW 2-7 and has completed setup...start bitcoind
        } else if(this.currentHW != 0 && this.setupStep == 0){
          store.commit('setDebug', 'current HW !=0 and setupStep = 0 conditional met, starting bitcoind network off')
                //start bitcoind with networking disabled
                invoke('start_bitcoind_network_off')
                  store.commit('setDebug', `starting bitcoin daemon with networking disabled`)

        }

        //initial set up step redirects
        if(this.setupStep == 1 && this.currentHW == 1){
            store.commit('setDebug', 'setup step 1 found, redirecting user to setup12')
            this.$router.push({ name: 'Setup12' })  
        }
        else if(this.setupStep == 2 && this.currentHW == 2){
            store.commit('setDebug', 'setup step 2 found, redirecting user to setup14a')
            this.$router.push({ name: 'Setup14a' })
        }
        else if(this.setupStep == 3 && this.currentHW == 3){
            store.commit('setDebug', 'setup step 3 found, redirecting user to setup15a')
            this.$router.push({ name: 'Setup15a' })
        }
        else if(this.setupStep == 4 && this.currentHW == 4){
            store.commit('setDebug', 'setup step 4 found, redirecting user to setup16')
            this.$router.push({ name: 'Setup16' })
        }
        else if(this.setupStep == 5 && this.currentHW == 5){
            store.commit('setDebug', 'setup step 5 found, redirecting user to setup18a')
            this.$router.push({ name: 'Setup18a' })
        }
        else if(this.setupStep == 6 && this.currentHW == 6){
            store.commit('setDebug', 'setup step 6 found, redirecting user to setup19a')
            this.$router.push({ name: 'Setup19a' })
        }
        else if(this.setupStep == 7 && this.currentHW == 7){
            store.commit('setDebug', 'setup step 7 found, redirecting user to setup20a')
            this.$router.push({ name: 'Setup20a' })
        }
        else if(this.setupStep == 8 && this.currentHW == 1){
            store.commit('setDebug', 'setup step 8 found, redirecting user to setup21')
            this.$router.push({ name: 'Setup21' })
        }
        else if(this.setupStep == 9 && this.currentHW == 2){
            store.commit('setDebug', 'setup step 9 found, redirecting user to setup27a')
            this.$router.push({ name: 'Setup27a' })
        }
        else if(this.setupStep == 10 && this.currentHW == 3){
            store.commit('setDebug', 'setup step 10 found, redirecting user to setup31a')
            this.$router.push({ name: 'Setup31a' })
        }
        else if(this.setupStep == 11 && this.currentHW == 4){
            store.commit('setDebug', 'setup step 11 found, redirecting user to setup35a')
            this.$router.push({ name: 'Setup35a' })
        }
        else if(this.setupStep == 12 && this.currentHW == 5){
            store.commit('setDebug', 'setup step 12 found, redirecting user to setup39a')
            this.$router.push({ name: 'Setup39a' })
        }
        else if(this.setupStep == 13 && this.currentHW == 6){
            store.commit('setDebug', 'setup step 13 found, redirecting user to setup43a')
            this.$router.push({ name: 'Setup43a' })
        }
        else if(this.setupStep == 14 && this.currentHW == 7){
            store.commit('setDebug', 'setup step 14 found, redirecting user to setup47a')
            this.$router.push({ name: 'Setup47a' })
        }
        else if(this.setupStep == 15 && this.currentHW == 1){
          store.commit('setDebug', 'setup step 15 found, redirecting user to setup50b')
          this.$router.push({ name: 'Setup50b' })
        }

        //redirect user to boot screen if they have HW 2-7 or no HW inserted
        else if(this.currentHW != 1){
          store.commit('setDebug', 'Hardware Wallet 1 not detected, redirecting to boot screen')
          this.$router.push({ name:'Boot' })
        }

        //eventually check externally for time machine keys here
        //might want to move this somewhere else
        if(this.timeMachineKeysFound == true){
          store.commit('setTimeLock', false)
        }

        })
          .catch((e) => {
            store.commit('setDebug', `read config error: ${e}`)

      })
    },
}
</script>

<style scoped>
.btn3{
  cursor:wait;
}
</style>

