<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->

<template>
  <div class="page">
    <header>
    </header>
    <div v-if="this.numberToRecover == 5" class="btn_container">
      <h1>In order to manually recover you will need access to 2-3 additional SD cards.</h1>
        <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <!-- Eventually every option below this point needs to be fetching privacy keys from blockchain and adding them to shards dir -->
    <div v-else-if="this.numberToRecover == 4" class="btn_container"> 
      <h1>In order to manually recover you will need access to 1-2 additional SD cards.</h1>
      <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <div v-else-if="this.numberToRecover == 3" class="btn_container">
      <h1>In order to manually recover you will need access to 1 additional SD card.</h1>
        <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <div v-else-if="this.numberToRecover == 2 || this.numberToRecover == 1">
      <h1>Enough of your privacy keys have decayed for you to login with just SD 1.</h1>
      <button @click="acknowledge()" class="btn">Log in</Button>
    You 
    </div>
  
  </div>
</template>

<script>
  import store from '../../store.js'
  
  export default {
    name: 'Recovery',
      methods: {
          acknowledge(){
              console.log('user ack, recovery initiating')
              store.commit('setRecoveryStep', 1) //eventually replace this with  virtual label
              //here we need to append the key shard to the transfer CD as well as a config var that instructs the next SD card how many key shards we have collected
              this.$router.push({ name: 'RecoveryInitiate' })
          },
          help(){
              console.log('fetching help')
          }
      },
      computed: {
        numberToRecover(){
          return store.getters.getNumberToRecover
        },
        recoveryStep(){
          return store.getters.getRecoveryStep
        },
        
      },
      mounted(){
        if(this.numberToRecover >= this.recoveryStep){
          this.recoveryComplete = true
        }
      },
      data(){
        return{
          recoveryComplete: false
        }
      },
    }
  </script>


