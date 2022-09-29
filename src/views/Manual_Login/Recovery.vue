<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->

<template>
  <div class="page">
    <header>
      <h1>How many SD cards do you have access to?</h1>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 3 SD cards</Button>
        <button class="btn3">I have 2 SD cards</button>
        <h2 class="strong_text">Unlocks in 27 days.</h2>
        <button class="btn3">I have 1 SD card</button>
        <h2 class="strong_text">Unlocks in 57 days.</h2>
    </div>
  </div>
</template>

<script>
import store from '../../store.js'

export default {
  name: 'Recovery',
    methods: {
        acknowledge(){
            console.log('user ack, closing the application')
            this.$router.push({ name: 'RecoveryInitiate' })
        },
    },
    computed: {
      numberToRecover(){
        return store.getters.getNumberToRecover
      },
    },
}
</script>


