<!-- User returns to primary machine for this step, currently on primary consider changing step 20-->

<template>
<div class="page">
    <header>
        <h1>Initial Sync Complete</h1>
        <h2>You may now log in to your wallet.</h2>
    </header>
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
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
            console.log('user ack, proceeding to login')
            this.$router.push({ name: 'welcome' })

            store.commit('setDuressSetup', false)
            store.commit('setRecoverySetup', false)
            store.commit('setTripwireSetup', false)
        },

    },
    computed:{
        primaryMachine(){
            return store.getters.getPrimaryMachine
        }
    }
}
</script>

