<template>
<div class="page">
        <header>
        <h1>SD Card 2</h1>
        <h2>Please remove SD card 1 & insert SD card 2.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 2.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'two' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup5',
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 2')
            this.$router.push({ name: 'Setup6' })
            //eventually need to electronically mark SD 2 with a text file label here and after doing so update global state
            store.commit('setSetup2', true) //eventually replace this with virtual label
            //eventually need to mark SD 2 with a text file label here that directs secondary machine to jump to step 14 of setup

        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
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

