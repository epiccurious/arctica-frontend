<!-- User returns to primary machine for this step -->

<template>
<div class="page">
    <header>
        <h1>Please insert the setup CD</h1>
        <h2>Insert the disc labelled 'Setup'.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup17',
    methods: {
        acknowledge(){
            console.log('user ack, proceed, consider checkbox here?')
            if(this.setupCD == true){
                this.$router.push({ name: 'Setup18' })
            }
            //eventually need a step here to check for the electronic label on the setupCD, and update global state, and only allow user to proceed if check successful
            //eventually only allow the user to proceed here if primary machine boolean is true
        },

    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        }
    }
}
</script>

