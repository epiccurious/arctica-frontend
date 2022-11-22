<template>
  <div v-if="this.loading == true">
  <Loader/>
</div>

  <div v-else class="page">
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
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'RecoveryAdditional',
  components: {
    Loader
  },
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
      
    },
    mounted(){
      //collecting shards and refreshing recovery cd
      store.commit('setLoadMessage', 'collecting privacy key shards...')
      invoke('collect_shards').then((res)=>{
        store.commit('setTest', `collecting shards and refreshing recovery cd: ${res}`)
        store.commit('setLoadMessage', 'calculating target number of shards...')
        invoke('calculate_number_of_shards').then((res)=> {
          store.commit('setTest', `calculating number of shards on recovery cd: number = ${res}`)
          //send the user to recovery_additional if they have not yet met numbertorecover threshold
          if(this.numberToRecover > res){
            this.loading = false
          }
          //if the number of shards exceeds the decryption threshold, send user to success screen
          //combine shards at recovery success screen
          else{
            this.loading = false
            this.$router.push({ name: 'recoverySuccess' })
          }
        })
        .catch((e) => {
          store.commit('setTest', `error calculating shards on recovery cd: ${e}`)
        })
      })
      .catch((e)=>{
        store.commit('setTest', `error collecting shards ${e}`)
      })
      //calculate numbertorecover differential
      //either instruct user to insert next card or send user to success screen
    },
    data() {
    return {
    loading: true
    }
  },
  }
</script>

