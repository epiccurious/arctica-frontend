<template>
<div class="page">
    <header>
        <h1>SD 3 creation complete</h1>
         <h2>Please remove SD 3 and remove the setup CD.</h2>
        <h2>Please move to your secondary machine, insert SD 4 and reboot.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup15',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 15, added in step 6
            //eventually only allow the user to proceed here if primary machine boolean is false
        },
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    },
    data(){
        store.commit('setSetup3', false) //eventually change this to remove virtual label
        store.commit('setSetup10', true) //eventually change this to add virtual label
        return{}
    }
}
</script>

