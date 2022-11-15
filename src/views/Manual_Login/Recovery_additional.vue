<template>
  <div class="page">
    <header>
      <h1>Manual Recovery In Progress.</h1>
      <h2>Please power off this machine, insert your next available SD card and reboot.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>
</template>

<script>
import store from '../../store.js'

export default {
  name: 'RecoveryAdditional',
    methods: {
        acknowledge(){
            console.log('user ack, recovery initiating')
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

