<template>
<div class="page">
    <header>
        <h1>2 of 2 Signing Successful</h1>
        <h2>Please power off this device. Swap SD 2 for SD 1 and power back on.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
            <button @click="debug()" class="btn2">Debug - proceed</Button>
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
        debug(){
            console.log('debug proceed moving to broadcast')
            if(this.currentSD == 'one' && this.psbtFound == true)
            this.$router.push({ name: 'immediateBroadcast' }) 

        }

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
