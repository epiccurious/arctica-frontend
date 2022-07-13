<template>
<div class="page">
    <header>
        <h1>SD 5 creation complete</h1>
        <h2>Please insert SD 6 and reboot this machine.</h2>
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
  name: 'Setup18',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 18, added in step 8
            //eventually only allow the user to proceed here if primary machine boolean is true

        },
        proceed(){
            console.log('debug proceed')
            store.commit('setCurrentSD', 'six')
            this.$router.push({ name: 'Setup19' })
        },

    },
}
</script>

