<template>
<div class="page">
    <header>
        <h1>5 of 5 Signing Successful</h1>
        <h2>Please power off this machine. Return to your primary machine, insert SD 1 & the Transfer CD and power on the primary machine.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        </div>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '5of5success',
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
        },
        timeLock(){
            return store.getters.getTimeLock
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
