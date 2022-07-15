<template>
<div class="page">
    <header>
        <h1>1 of 2 Signing Successful</h1>
        <h2>Please power off this device. Swap SD 1 for SD 2 and power back on.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (this will close the application)</Button>
            <button @click="debug()" class="btn2">Debug - proceed</Button>
        </div>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '1of2success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
        debug(){
            console.log('debug proceed')
            if(this.currentSD != 'one' && this.currentSD != 'none' && this.psbtFound == true){
                this.$router.push({ name: 'sign2of2' })
            }
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
