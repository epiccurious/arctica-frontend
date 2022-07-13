<!-- User returns to primary machine for this step, currently on primary consider changing step 20-->

<template>
<div class="page">
    <header>
        <h1>Initial Sync Complete</h1>
        <h2>Reboot from SD 1 to log in to your wallet.</h2>
    </header>
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup51',
  components: {},
    methods: {
        acknowledge(){
            console.log('user ack, proceed, close application')
        },
        proceed(){
            console.log('debug proceed')
            if(this.currentSD == 'one' && this.primaryMachine == true){
                this.$router.push({ name: 'welcome' })
            }
        }

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

