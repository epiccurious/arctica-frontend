<template>
<div class="page">
    <header>
        <h1>2 of 2 Signing Successful</h1>
        <h2>Please power off this device. Swap SD 2 for SD 1 and reboot this machine.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        </div>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '2of2success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
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
