<template>
<div class="page">
    <header>
        <h1>SD Card 2</h1>
        <h2>Please power off this machine, remove SD 1 & insert SD 2 and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (this will close the application)</Button>
        </div>
</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup26',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    mounted(){
        //update the setup step
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then((res) => {
            store.commit('setTest', `async writing setupstep ${this.setupStep}: ${res} `)
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
    },
    data(){
        return{
            setupStep: 15,
        }
    },
    }
</script>

