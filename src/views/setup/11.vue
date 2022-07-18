<template>
<div class="page">
    <header>
        <h1>SD creation successful</h1>
        <h2>Please power off this machine, insert SD 1, and reboot the device.</h2>
    </header>   
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
           <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup11',
    methods: {
        proceed(){
            console.log('user ack, close application')
            if(this.currentSD == 'one' && this.primaryMachine == false){
                this.$router.push({ name: 'Setup12' })
            }
        },
        acknowledge(){
            console.log('user ack, closing application')
        },

    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        primaryMachine(){
            return store.getters.getPrimaryMachine
        }
    }
}
</script>

