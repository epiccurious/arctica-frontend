<template>
<div class="page">
    <header>
        <h1>3 of 5 Signing Successful</h1>
        <h2>Please power off this device. Swap SD 3 for SD 4 and power back on.</h2>
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
  name: '3of5success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
        debug(){
            console.log('debug proceed moving to 4 of 5')
            if(this.currentSD != 'one' && this.currentSD != 'none' && this.psbtFound != 'none'){
                this.$router.push({ name: 'sign4of5' })
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
