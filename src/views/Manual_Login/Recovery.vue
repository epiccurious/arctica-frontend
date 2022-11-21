<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining privacy key decay schedules -->
<!-- Revisit this entire flow after dynamic privacy key decay feature is implemented -->
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

    <!-- if number to recover is < 3, user can log in using only SD 1 -->
  
  </div>
</template>

<script>
  import store from '../../store.js'
  
  export default {
    name: 'Recovery',
      methods: {
          acknowledge(){
              console.log('user ack, recovery initiating')
              this.$router.push({ name: 'RecoveryInitiate' })
          },
      },
      computed: {
        numberToRecover(){
          return store.getters.getNumberToRecover
        },
      }
    }
  </script>


