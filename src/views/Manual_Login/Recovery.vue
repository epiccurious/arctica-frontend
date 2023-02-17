<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining privacy key decay schedules -->
<!-- Revisit this entire flow after dynamic privacy key decay feature is implemented -->
<!-- The recovery protocol currently demands the user is starting the recovery process on SD 1-->
<!-- There is a very rare edge case here which is not handled. If the user has somehow lost SD 1-4 and converted one of SD 5-7 into a new SD 1, they will only have access to 3 shards in total -->
<template>
  <div class="page">
    <header>
    </header>
    <div v-if="this.currentSD == 1 && this.numberToRecover == 5" class="btn_container">
      <h1>In order to manually recover you will need access to 2-3 additional SD cards.</h1>
        <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <!-- Eventually every option below this point needs to be fetching privacy keys from blockchain and adding them to shards dir -->
    <div v-else-if="this.currentSD == 1 && this.numberToRecover == 4" class="btn_container"> 
      <h1>In order to manually recover you will need access to 1-2 additional SD cards.</h1>
      <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <div v-else-if="this.currentSD == 1 && this.numberToRecover == 3" class="btn_container">
      <h1>In order to manually recover you will need access to 1 additional SD card.</h1>
        <button @click="acknowledge()" class="btn">Proceed</Button>
    </div>
    <div v-else-if="this.currentSD == 1 && this.numberToRecover <= 2" class="btn_container">
      <h1>Enough of your privacy keys have decayed that you may login without a passphrase.</h1>
        <button @click="login()" class="btn">Login</Button>
    </div>
    <div v-else-if="this.currentSD != 1" class="btn_container">
      <h1>In order to begin manual recovery you must be on SD 1.</h1>
    </div>

  
  </div>
</template>

<script>
  import store from '../../store.js'
  
  export default {
    name: 'Recovery',
      methods: {
          acknowledge(){
              this.$router.push({ name: 'RecoveryInitiate' })
          },
          login(){
            //nothing here yet until numbertorecover <=2 threshold is achievable, this will not happen until BPS publishes privacy keys according to decay schedule
          }
      },
      computed: {
        numberToRecover(){
          return store.getters.getNumberToRecover
        },
        currentSD(){
          return store.getters.getCurrentSD
        }
      }
    }
  </script>


