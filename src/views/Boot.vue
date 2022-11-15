<!-- this page conditionally renders if the user does not currently have any Arctica SD inserted (in which case they are prompted to install Arctica software)
or directs them to the 'i need help' section which can walk them through restoring an attic SD. 

the second conditional rendering below appears if the user has booted from SD 2-7 but does not have a transfer CD with a PSBT inserted into the machine.  -->

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
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
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
                    this.loading = false
                    break
                }
                //check for transfer CD
                //assume user is trying to sign a PSBT
                else if (String(it[0]).toUpperCase() == 'TYPE' && String(it[1]).toUpperCase() == 'TRANSFERCD'){
                    store.commit('setTransferCD', true)
                    store.commit('setTest', `Transfer CD detected, boolean set to true ${store.getters.getTransferCD}`)
                    this.loading = false
                    break
                }
                //either no cd is inserted or user hit the button too fast
                else{
                    store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
                }
            // //user is trying to sign a psbt
            // if(this.psbtFound == true && this.psbt != null){
            // console.log('user ack, simulating transfer CD, PSBT found')
            // this.$router.push({ name: 'welcome' })
            // }
            // //user is trying to manually decrypt
            // else if(true){
            //   //dump recovery cd to ramdisk
            //   invoke('copy_recovery_cd').then((res)=> {
            //     store.commit('setTest', `copying recovery CD into ramdisk: ${res} `)
            //   })
            //   .catch((e) => {
            //     store.commit('setTest', `obtain ubuntu error: ${e}`)
            //   })
            // //this is where we need to send the user to recovery_additional if they have not yet met numbertorecover threshold inside of the shards dir
            // //need to count number of shards in shards dir and compare to numbertorecover variable
            // //if numbertorecover is < = number of shards in shards dir then send user to recovery_success
            // //else send them to recovery additional to collect more shards

            // }
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
    psbtFound(){
      return store.getters.getPSBTFound
    },
    psbt(){
      return store.getters.getPSBT
    },
    test(){
      return store.getters.getTest
    }
  },
  data() {
    return {someData: [],
    loading: false
    }
  },
}
</script>

