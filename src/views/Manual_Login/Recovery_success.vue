<template>
  <div class="page">
    <header>
      <h1>Manual Recovery Success.</h1>
      <h2>You may now log in to your account without the use of a BPS.</h2>
      <h2>Please insert SD 1 and your transfer CD and reboot this machine.</h2>
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
  name: 'RecoverySuccess',
    methods: {
        acknowledge(){
            console.log('user ack')
        },
        help(){
            console.log('fetching help')
        }
    },
    computed: {
      numberToRecover(){
        return store.getters.getNumberToRecover
      },
    },
  }
</script>

