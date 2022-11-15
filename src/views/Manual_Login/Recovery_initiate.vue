<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->
<template>
  <div class="page">
    <header>
      <h1>Manual Recovery Initiated.</h1>
      <h2>Please insert a transfer CD.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>
</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'RecoveryInitiate',
    methods: {
        acknowledge(){
          //creating recovery cd
          invoke('create_recovery_cd').then((res)=>{
            store.commit('setTest', `creating recovery cd ${res}`)
          })
          .catch((e)=>{
            store.commit('setTest', `error creating recovery cd ${e}`)
          })
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

