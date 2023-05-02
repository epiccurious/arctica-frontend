<template>
<div v-if="this.loading == true">
    <Loader/>
</div>
<div v-else class="page">
    <header>
        <h1>1 of 2 Signing Successful</h1>
        <h2>Please power off this machine. Swap HW 1 for HW 2 and power on this machine.</h2>
    </header>
    

</div>

</template>

<script>
import store from '../../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: '1of2success',
  components: {
    Loader,
    },
    computed:{
    },
    mounted(){
        //note: only necessary to packup on HW 1
        invoke('packup').then((res)=>{
            store.commit('setDebug', `packing up sensitive ${res}`)
            invoke('stop_bitcoind').then((res) =>{
                store.commit('setDebug', `stopping bitcoin daemon ${res}`)
                this.loading=false
            }).catch((e)=>{
                store.commit('setDebug', `error stopping bitcoin daemon: ${e}`)
                store.commit('setErrorMessage', `Error with stopping bitcoin daemon Error Code: 1of2success-1 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
        }).catch((e)=>{
            store.commit('setDebug', `error packing up sensitive ${e}`)
            store.commit('setErrorMessage', `Error with packing up sensitive: 1of2success-2 Response: ${e}`)
            this.$router.push({ name:'Error' })
        })
    }, 
    data(){
        return{
            loading: true,
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
