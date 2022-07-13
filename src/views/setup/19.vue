<template>
<div class="page">
    <header>
        <h1>SD 6 creation complete</h1>
        <h2>Please insert SD 7 and reboot this machine.</h2>
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
  name: 'Setup19',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 19, added in step 9
            //eventually only allow the user to proceed here if primary machine boolean is true
        },
        proceed(){
            console.log('debug proceed')
            if(this.currentSD == 'seven'){
                this.$router.push({ name: 'Setup20' })
            }

    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
}
</script>

