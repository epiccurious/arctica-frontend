<!-- this page conditionally renders if the user does not currently have any Arctica SD inserted (in which case they are prompted to install Arctica software)
or directs them to the 'i need help' section which can walk them through restoring an attic SD. 

the second conditional rendering below appears if the user has booted from SD 2-7 but does not have a transfer CD with a PSBT inserted into the machine.  -->

<template>
  <div v-if="this.currentSD == 'none'" class="login">
<header>
  <h1>Welcome to Arctica</h1>
  <h2>Please insert SD 1 and reboot this machine.</h2>
  <h2>If you have not yet setup Arctica click install.</h2>
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
</template>

<script>
import store from '../store.js'
export default {
  name: 'Boot',
    methods: {
        acknowledge(){
            if(this.psbtFound == true){
            console.log('user ack, simulating transfer CD, PSBT found')
            this.$router.push({ name: 'welcome' })
            }
            else if(this.currentSD == 'one'){
              console.log('user ack, SD 1 found, proceeding to login')
              this.$router.push({ name: 'welcome' })
            }
        },
        help(){
            console.log('fetching help')
        },
        install(){
          console.log('starting installation')
          this.$router.push({ name:'Setup1' })
        },
        redirect(){
          this.$router.push({ name:'welcome' })
        }
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
  },
  watch: {
    //whenever current SD changes redirect user to welcome page
    watchSD(){
      if(this.currentSD == 'one'){
        this.redirect()
      }
    }
  }
}
</script>

