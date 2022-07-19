<template>
<div class="page">
    <header>
        <h1>Remove the 'Setup' CD</h1>
        <h2>Please remove the Setup CD at this time.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup22',
    methods: {
        acknowledge(){
            console.log('user ack, proceed')
            if(this.setupCD == false){
                this.$router.push({ name: 'Setup23' })
            }
        },
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        }
    }
}
</script>

