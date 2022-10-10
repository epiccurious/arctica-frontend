<template>
<div class="page">
    <header>
        <h1>3 of 5 Signing Successful</h1>
        <h2>Please power off this machine. Switch to your secondary, offline machine, power it off, and insert SD 4 & the Transfer CD and power on the machine.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        </div>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '3of5success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
    },
    computed:{
        psbtFound(){
            return store.getters.getPSBTFound
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
