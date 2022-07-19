<template>
<div class="page">
    <header>
        <h1>CD 5 Backup</h1>
        <h2>Please remove the Setup CD and insert CD 5.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 5.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'five' && checkbox && this.setupCD == false" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup39b',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 5 to CD 5')
            this.$router.push({ name: 'Setup40' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        store.commit('setSetup12', false) //eventually change this to remove virtual label
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

