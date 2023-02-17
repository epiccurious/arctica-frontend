<template>
  <div v-if="this.loading== true" class="page">
    <header>
      <h1>Manual Recovery In Progress.</h1>
      <h2>Please Wait...</h2>
    </header>
  </div>

  <div v-else class="page">
    <header>
      <h1>Please remove your recovery CD and reboot from your next available SD card</h1>
    </header>

  </div>
</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'RecoveryAdditional',
    methods: {
        acknowledge(){
        },
    },
    computed: {
      numberToRecover(){
        return store.getters.getNumberToRecover
      },
      
    },
    mounted(){
      // collecting shards from $HOME on current SD and adding them to /mnt/ramdisk/CDROM/shards
      store.commit('setLoadMessage', 'collecting privacy key shards...')
      invoke('collect_shards').then((res)=>{
        store.commit('setDebug', `collecting shards: ${res}`)
        store.commit('setLoadMessage', 'calculating differential...')
        //calculate numbertorecover differential based on how many shards are present on recoverycd
        invoke('calculate_number_of_shards').then((res)=> {
          store.commit('setDebug', `calculating number of shards in ramdisk: number = ${res}`)
          store.commit('setLoadMessage', 'refreshing Recovery CD...')
          //if numbertorecover threshold is not yet met
          if(this.numberToRecover > res){
            store.commit('setDebug', `Need more shards to complete recovery. obtained ${res} of ${this.numberToRecover}`)
            invoke('refresh_cd').then((res)=>{
              store.commit('setDebug', `refreshing recovery CD with the contents of /mnt/ramdisk/CDROM: ${res}`)
              this.loading = false
            })
            .catch((e)=>{
              store.commit('setDebug', `error refreshing recovery cd: ${e}`)
              store.commit('setErrorMessage', `Error refreshing recovery cd Error code: RecoveryAdditional2 Response: ${e}`)
              this.$router.push({ name: 'Error' })
            })
          }
          //if the numbertorecover threshold is met
          else{
            store.commit('setDebug', `shard threshold met, obtained ${res} of ${this.numberToRecover}`)
            //else{recoveryfinish: reconstitute masterkey, genisoimage, blank inserted disc, burn new iso}

          }
      })
      .catch((e) => {
        store.commit('setDebug', `error calculating shards on recovery cd: ${e}`)
        store.commit('setErrorMessage', `Error calculating shard count on disk Error code: RecoveryAdditional1 Response: ${e}`)
        this.$router.push({ name: 'Error' })
      })
      })
      .catch((e)=>{
        store.commit('setDebug', `error collecting shards ${e}`)
        store.commit('setErrorMessage', `Error calculating shard count on disk Error code: RecoveryAdditional2 Response: ${e}`)
        this.$router.push({ name: 'Error' })
      })      
      
    },
    data() {
    return {
    loading: true,
    }
  },
  }
</script>

