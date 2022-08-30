<template>
<div class="page">
    <header>
        <h1>CD 6 Backup</h1>
        <h2>Please remove the Set up CD and insert CD 6.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'six' && checkbox && this.setupCD == false" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup43b',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 6 to CD 6')
            this.$router.push({ name: 'Setup44' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        store.commit('setSetup13', false) //eventually change this to remove virtual label
        return{
            checkbox: false,
        }
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        setupCD(){
            return store.getters.getSetupCD
        }
    }
}
</script>

