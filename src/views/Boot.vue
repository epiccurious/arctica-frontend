<!-- this page conditionally renders if the user does not currently have any Arctica SD inserted (in which case they are prompted to install Arctica software)
or directs them to the 'i need help' section which can walk them through restoring an attic SD. 

the second conditional rendering below appears if the user has booted from SD 2-7 but does not have a transfer CD with a PSBT inserted into the machine.  -->

<template>
<div v-if="this.loading == true">
  <Loader/>
</div>

<div v-else>
  <div v-if="this.currentSD == 0 || this.currentSD == 1" class="login">
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
            if(this.psbtFound == true && this.psbt != null){
            console.log('user ack, simulating transfer CD, PSBT found')
            this.$router.push({ name: 'welcome' })
            }
        },
        help(){
            console.log('fetching help')
        },
        install(){
          //show loader
          this.loading = true;

          //begin install
          //obtain latest tails image
          invoke('obtain_ubuntu').then(()=> {
            this.loading = false;
            //send user to next step
            this.$router.push({ name:'Setup1' })
          })

        },


        },
  mounted(){
  },
  computed:{
    currentSD(){
      return store.getters.getCurrentSD
    },
    psbtFound(){
      return store.getters.getPSBTFound
    },
    psbt(){
      return store.getters.getPSBT
    },
    testVar(){
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

