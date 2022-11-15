<template>
<div v-if="this.loading == true">
  <Loader/>
</div>

  <div v-else class="page">
    <header>
      <h1>Manual Recovery Success.</h1>
      <h2>You may now log in to your account without the use of a BPS.</h2>
      <h2>Your transfer CD will hold your masterkey for login. Keep it safe.</h2>
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
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'RecoverySuccess',
  components: {
    Loader
  },
    methods: {
        acknowledge(){
            console.log('user ack')
        },
        help(){
            console.log('fetching help')
        }
    },
    mounted(){
      //copying recovery cd to ramdisk
      invoke('copy_recovery_cd').then((res)=>{
        store.commit('setTest', `copying recovery cd ${res}`)
        //combine shards into masterkey
        invoke('combine_shards').then((res)=>{
            store.commit('setTest', `combining shards in ramdisk ${res}`)
            //refresh cd with masterkey and a new config designator: transfercd
            invoke('convert_to_transfer_cd').then((res)=>{
              store.commit('setTest', `converting cd to a transfer cd: ${res}`)
              this.loading=false
            })
            .catch((e)=>{
              store.commit('setTest', `error converting to transfer cd ${e}`)
            })
          })
          .catch((e)=>{
            store.commit('setTest', `error combining shards ${e}`)
          })
      })
      .catch((e)=>{
        store.commit('setTest', `error copying recovery cd ${e}`)
      })
    },
    data() {
    return {
    loading: true
    }
  },
  }
</script>

