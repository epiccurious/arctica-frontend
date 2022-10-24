<!-- user returns to primary machine at point -->

<template>
<div class="page">
    <header>
        <h1>SD 7 creation complete</h1>
        <h2>Please return to your primary machine, power it  off, insert SD 1 and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup20',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
    },
    mounted(){
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            console.log('success')
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
        //need to create bitcoin wallets here for SD 7 and export all pubkeys onto setup CD                 

    },
    data(){
        return{
            setupStep: '14',
        }
    },
    computed: {
        test(){
      return store.getters.getTest
    }
    },
}
</script>

