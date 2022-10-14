<template>
<div class="page">
    <header>
        <h1>SD 2 creation complete</h1>
        <h2>Please power off this machine, remove SD 2, insert SD 3, and power on the machine.</h2>
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
  name: 'Setup14',
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
    },
    data(){
        return{
            setupStep: '9',
        }
    }
}
</script>

