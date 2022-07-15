<template>
<div class="page">
    <header>
        <h1>4 of 5 Signing Successful</h1>
        <h2>Please power off this device. Swap SD 4 for SD 5 and reboot this machine.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
            <!-- <button @click="debug()" class="btn2">Debug - proceed</Button> -->
        </div>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '4of5success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
        // debug(){
        //     console.log('debug proceed moving to 5 of 5')
        //     if(this.currentSD != 'one' && this.currentSD != 'none' && this.psbtFound == true){
        //         this.$router.push({ name: 'sign5of5' })
        //     }
        // }

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
