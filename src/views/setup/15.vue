<template>
<div class="page">
    <header>
        <h1>SD 3 creation complete</h1>
         <h2>Please remove SD 3 and remove the set up CD.</h2>
        <h2>Please move to your secondary machine and power it off, insert SD 4 and power on the machine.</h2>
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
  name: 'Setup15',
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
            setupStep: '10',
        }
    }
}
</script>

