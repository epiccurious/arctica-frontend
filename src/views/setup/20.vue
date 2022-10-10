<!-- user returns to primary machine at this point -->

<template>
<div class="page">
    <header>
        <h1>SD 7 creation complete</h1>
        <h2>Please return to your primary machine, power it  off, insert SD 1 and power on themachine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup20',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 20, added in step 10
            //eventually only allow the user to proceed here if primary machine boolean is true
        },
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    },
    data(){
        store.commit('setSetupStep', 14) //eventually change this to add virtual label
        return{}
    }
}
</script>

