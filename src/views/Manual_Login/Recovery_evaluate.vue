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
  name: 'RecoveryEvaluate',
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
        invoke('calculate_number_of_shards_ramdisk').then((res)=> {
          store.commit('setTest', `calculating number of shards on recovery cd: number = ${res}`)
          store.commit('setTest', `number to recover is: ${this.numberToRecover}`)
          //send the user to recovery_additional if they have not yet met numbertorecover threshold
          if(this.numberToRecover <= res){
            store.commit('setTest', 'shard threshold met, sending to recovery success')
            this.loading = false
            this.$router.push({ name: 'recoverySuccess' })
          }
          //if the number of shards exceeds the decryption threshold, send user to success screen
          //combine shards at recovery success screen
          else{
            store.commit('setTest', 'more shards needs, instructing user to proceed to next SD')
            this.loading = false
          }
        })
        .catch((e) => {
          store.commit('setTest', `error calculating shards on recovery cd: ${e}`)
        })
      },
    data() {
    return {
    loading: true
    }
  },
  }
</script>

