<template>
  <div v-if="this.loading == true">
  <Loader/>
</div>
<div v-else class="page">
    <header>
        <h1>Hardware Wallet 1 creation complete</h1>
        <h2>Please power off this machine, remove HW 1, insert HW 2, and power on the machine.</h2>
    </header> 

</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup13',
  components: {
    Loader,
  },
    mounted(){
      this.loading = true
      store.commit('setLoadMessage', 'Packing up sensitive info...')
      invoke('packup').then((res)=>{
        store.commit('setDebug', `invoking packup: ${res}`)
        invoke('stop_bitcoind').then((res) =>{
            store.commit('setDebug', `stopping bitcoin daemon ${res}`)
            this.loading = false
        }).catch((e)=>{
            store.commit('setDebug', `error stopping bitcoin daemon: ${e}`)
            store.commit('setErrorMessage', `Error with stopping bitcoin daemon Error Code: Setup13-2 Response: ${e}`)
            this.$router.push({ name:'Error' })
        })
      }).catch((e)=>{
        store.commit('setDebug', `error with pack up: ${e}`)
        store.commit('setErrorMessage', `Error packing up Error code: Setup13-1 Response: ${e}`)
        this.$router.push({ name:'Error' })
      })
    },
    data(){
      return{
        loading: false,
      }
    }
}
</script>

