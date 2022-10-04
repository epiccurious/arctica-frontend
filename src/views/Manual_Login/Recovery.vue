<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->

<template>
  <div class="page">
    <header>
      <h1>How many SD cards do you have access to?</h1>
    </header>
    <div v-if="this.numberToRecover == 5" class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 5 SD cards</Button>
        <button class="btn3">I have 4 SD cards</Button>
        <h2 class="strong_text">Unlocks in 67 days.</h2>
        <button class="btn3">I have 3 SD cards</Button>
        <h2 class="strong_text">Unlocks in 97 days.</h2>
        <button class="btn3">I have 2 SD cards</button>
        <h2 class="strong_text">Unlocks in 127 days.</h2>
        <button class="btn3">I have 1 SD card</button>
        <h2 class="strong_text">Unlocks in 157 days.</h2>
    </div>
    <div v-else-if="this.numberToRecover == 4" class="btn_container"> 
      <button @click="acknowledge()" class="btn">I have 4 SD cards</Button>
        <button class="btn3">I have 3 SD cards</Button>
        <h2 class="strong_text">Unlocks in 30 days.</h2>
        <button class="btn3">I have 2 SD cards</button>
        <h2 class="strong_text">Unlocks in 60 days.</h2>
        <button class="btn3">I have 1 SD card</button>
        <h2 class="strong_text">Unlocks in 90 days.</h2>
    </div>
    <div v-else-if="this.numberToRecover == 3" class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 3 SD cards</Button>
        <button class="btn3">I have 2 SD cards</button>
        <h2 class="strong_text">Unlocks in 30 days.</h2>
        <button class="btn3">I have 1 SD card</button>
        <h2 class="strong_text">Unlocks in 60 days.</h2>
    </div>
    <div v-else-if="this.numberToRecover == 2" class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 2 SD cards</Button>
        <button class="btn3">I have 1 SD card</button>
        <h2 class="strong_text">Unlocks in 30 days.</h2>
    </div>
    <div v-else-if="this.numberToRecover == 1" class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 1 SD card</Button>
    </div>
    <div v-else class="btn_container"> 
        <h2 class="strong_text">Your privacy keys have expired.</h2>
        <h2> You no longer need to decrypt your devices.</h2>
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


