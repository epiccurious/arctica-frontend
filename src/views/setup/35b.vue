<template>
<div class="page">
    <header>
        <h1>CD 4 Backup</h1>
        <h2>Please insert CD 4.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 4.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'four' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup35b',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 4 to CD 4')
            this.$router.push({ name: 'Setup36' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        store.commit('setSetup11', false) //eventually change this to remove virtual label
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

