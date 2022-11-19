<template>
  <div v-if="this.loading == true">
  <Loader/>
</div>
<div v-else class="page">
    <header>
        <h1>SD 1 creation complete</h1>
        <h2>Please power off this machine, remove SD 1, insert SD 2, and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

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
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
      },
    mounted(){
      this.loading = true
      store.commit('setLoadMessage', 'Packing up sensitive info...')
      invoke('packup').then((res)=>{
        store.commit('setTest', `invoking packup: ${res}`)
        this.loading = false
      }).catch((e)=>{
        store.commit('setTest', `error with pack up: ${e}`)
      })
    },
    data(){
      return{
        loading: false,
      }
    }
}
</script>

