<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->
<!-- Need to add screens to this flow prompting for each SD required to decrypt, then toggle manual decrypt state variable once complete to allow hard login -->
<template>
  <div class="page">
    <header>
      <h1>Manual Recovery In Progress.</h1>
      <h2>Please insert your next available SD card.</h2>
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
  name: 'Recovery5',
    methods: {
        acknowledge(){
            console.log('user ack, recovery initiating')
            //here we need to append the key shard to the transfer CD as well as a config var that instructs the next SD card how many key shards we have collected 
            //eventually add logic to auto redirect arctica when config var is found on transfer cd
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

