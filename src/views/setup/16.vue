<template>
<div class="page">
<header>
<h1>SD 4 creation complete</h1>
 <h2>Please remove SD 4 and remove the setup CD.</h2>
 <h2>Return to your primary machine, insert SD 5, and reboot the machine.</h2> 
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
  name: 'Setup16',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
            //eventually need a step here to remove the electronic label that redirected user to step 16, added in step 7
            //eventually only allow the user to proceed here if primary machine boolean is true
        },
        proceed(){
            console.log('debug proceed')
            if(this.currentSD == 'five' && this.primaryMachine == true && this.setupCD == false){
                this.$router.push({ name: 'Setup17' })
            }
        },

    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        primaryMachine(){
            return store.getters.getPrimaryMachine
        },
        setupCD(){
            return store.getters.getSetupCD
        }
    },
    data(){
        store.commit('setSetup4', false) //eventually change this to remove virtual label
        return{}
    }
}
</script>
