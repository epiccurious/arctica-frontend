<template>
  <div v-if="this.loading == true">
  <Loader/>
</div>
  <div v-else class="page">
    <header>
      <h1>Manual Recovery</h1>
      <h2>Please remove your recovery CD and reboot with your next available Hardware Wallet</h2>
    </header>

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
    computed: {
      numberToRecover(){
        return store.getters.getNumberToRecover
      },
    },
    mounted(){
      // collecting shards from $HOME on current HW and adding them to /mnt/ramdisk/CDROM/shards
      store.commit('setLoadMessage', 'collecting privacy key shards...')
      invoke('collect_shards').then((res)=>{
        store.commit('setDebug', `collecting shards: ${res}`)
        store.commit('setLoadMessage', 'calculating differential...')
        //calculate numbertorecover differential based on how many shards are present on recoverycd
        invoke('calculate_number_of_shards').then((res)=> {
          store.commit('setDebug', `calculating number of shards in ramdisk: number = ${res}`)

          //if numbertorecover threshold is not yet met
          if(this.numberToRecover > res){
            store.commit('setLoadMessage', 'refreshing Recovery CD...')
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
            store.commit('setLoadMessage', 'Reconstituting Masterkey...')
            invoke('combine_shards').then((res)=>{
              store.commit('setDebug', `reconstituting masterkey ${res}`)
              store.commit('setLoadMessage', 'Converting CD Config...')
              invoke('convert_to_transfer_cd').then((res)=>{
                store.commit('setDebug', `converting CD config from recoverycd to transfercd ${res}`)
                store.commit('setLoadMessage', 'Refreshing CD...')
                invoke('refresh_cd').then((res)=>{
                  store.commit('setDebug', `refreshing CD: ${res}`)
                  this.loading = false
                  this.$router.push({ name: 'RecoverySuccess' })
                }) .catch((e)=>{
                    store.commit('setDebug', `error refreshing cd: ${e}`)
                    store.commit('setErrorMessage', `Error refreshing cd Error code: RecoveryAdditional3 Response: ${e}`)
                    this.$router.push({ name: 'Error' })
              }) .catch((e)=>{
                store.commit('setDebug', `error converting cd: ${e}`)
                store.commit('setErrorMessage', `Error converting cd Error code: RecoveryAdditional4 Response: ${e}`)
                this.$router.push({ name: 'Error' })
            }) .catch((e)=>{
                store.commit('setDebug', `error combining shards: ${e}`)
                store.commit('setErrorMessage', `Error combining shards Error code: RecoveryAdditional5 Response: ${e}`)
                this.$router.push({ name: 'Error' })
              })
              })
            })
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

