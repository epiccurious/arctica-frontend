<template>
<div class="page">
    <header>
        <h1>CD 3 Backup</h1>
        <h2>Please remove the Setup CD and insert CD 3.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 3.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'three' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup31b',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 3 to CD 3')
            this.$router.push({ name: 'Setup32' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        store.commit('setSetup10', false) //eventually change this to remove virtual label
        return{
            checkbox: false,
        }
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

