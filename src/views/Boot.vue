<!-- this page conditionally renders if the user does not currently have any Arctica SD inserted (in which case they are prompted to install Arctica software)
or directs them to the 'i need help' section which can walk them through restoring an attic SD. 

the second conditional rendering below appears if the user has booted from SD 2-7 and needs to insert a transfer CD or a recovery CD. -->

<template>
<div v-if="this.loading == true">
  <Loader/>
</div>

<div v-else>
  <div v-if="this.currentSD == 0" class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>If you have already set up Arctica, please insert SD 1 and restart this machine.</h2>
      <h2>If you have not yet set up Arctica click install.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="install()" class="btn">Install</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>

  <div v-else class="login">
    <header> 
      <h1>Welcome to Arctica</h1>
      <h2>Please insert a transfer CD.</h2>
      <h2>If you do not have a transfer CD, please insert SD 1 and reboot this machine.</h2>
    </header>
    <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted a transfer CD.</label>
                </div>
        </form>
    <div class="btn_container"> 
        <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
        <button v-else class="btn3">Continue</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Boot',
  components: {
    Loader
  },
    methods: {
        acknowledge(){
          this.loading = true
          //read the config file of the inserted CD
          invoke('read_cd').then((res) => {
            store.commit('setTest', `invoking read_cd: ${res}`)
            let resArray = res.split("\n")
            store.commit('setTest', `response Array: ${resArray}`)
            for(let i = 0; i < resArray.length; i ++){
                let it = resArray[i].split("=")
                store.commit('setTest', `for loop number: ${i+1}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
                //check for recovery CD
                //assume user is attempting to manually decrypt
                if (String(it[0]).toUpperCase() == 'TYPE' && String(it[1]).toUpperCase() == 'RECOVERYCD'){
                    store.commit('setRecoveryCD', true)
                    store.commit('setTest', `Recovery CD detected, boolean set to true ${store.getters.getRecoveryCD}`)
                    //calculate numbertorecover differential based on how many shards are on recoverycd
                    invoke('calculate_number_of_shards').then((res)=> {
                      store.commit('setTest', `calculating number of shards on recovery cd: number = ${res}`)
                      //send the user to recovery_additional if they have not yet met numbertorecover threshold
                      if(this.numberToRecover > res){
                        store.commit('setTest', 'Need more shards, sending to recovery additional')
                        this.loading = false
                        this.$router.push({ name: 'recoveryAdditional' })
                      }
                      //if the number of shards exceeds the decryption threshold, send user to success screen
                      //combine shards at recovery success screen
                      else{
                        store.commit('setTest', 'shard threshold met, sending to recovery success')
                        this.loading = false
                        this.$router.push({ name: 'recoverySuccess' })
                      }
                    })
                    .catch((e) => {
                      store.commit('setTest', `error calculating shards on recovery cd: ${e}`)
                    })
                }
                //check for transfer CD
                //assume user is trying to sign a PSBT
                else if (String(it[0]).toUpperCase() == 'TYPE' && String(it[1]).toUpperCase() == 'TRANSFERCD'){
                    store.commit('setTransferCD', true)
                    store.commit('setTest', `Transfer CD detected, boolean set to true ${store.getters.getTransferCD}`)
                    this.loading = false
                    this.$router.push({ name: 'welcome' })
                    break
                }
                //either no cd is inserted or user hit the button too fast
                else{
                    store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
                }
        }
      })
    },
        help(){
            console.log('fetching help')
        },
        install(){
          //show loader
          this.loading = true;

          //begin install
          //obtain latest tails image
          store.commit('setLoadMessage', 'Creating custom Ubuntu ISO...')
          store.commit('setTest', 'Obtaining and Creating modified ubuntu ISO')
          invoke('obtain_ubuntu').then(()=> {
            store.commit('setTest', 'ubuntu iso created successfully')
            this.loading = false;
            //send user to next step
            this.$router.push({ name:'Setup1' })
          })
          .catch((e) => {
          store.commit('setTest', `obtain ubuntu error: ${e}`)
    })

        },


        },
  computed:{
    currentSD(){
      return store.getters.getCurrentSD
    },
    setupStep(){
      return store.getters.getSetupStep
    },
    numberToRecover(){
      return store.getters.getNumberToRecover
    },
    test(){
      return store.getters.getTest
    }
  },
  data() {
    return {
    loading: false,
    checkbox: false
    }
  },
}
</script>

