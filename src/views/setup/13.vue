<template>
<div class="page">
    <header>
        <h1>SD 1 creation complete</h1>
        <h2>Please insert SD 2 and reboot this machine.</h2>
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
  name: 'Setup13',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 12, added in step 4
            //eventually need a step here to add an electronic label that redirects user to step 22
            //eventually only allow the user to proceed here if primary machine boolean is false
        },
        proceed(){
            console.log('debug proceed')
            if(this.currentSD == 'two'){
                this.$router.push({ name: 'Setup14' })
            }
            
        },

    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

