<template>
<div class="page">
        <header>
        <h1>SD Card 3</h1>
        <h2>Please remove SD card 2 & insert SD card 3.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox" @click="currentSDToggle()">
                <label for="checkbox">I have inserted SD card 3.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'three' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup6',
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 3')
            this.$router.push({ name: 'Setup7' })
            //eventually need to electronically mark SD 3 with a text file label here
            //eventually need to mark SD 3 with a text file label here that directs secondary machine to jump to step 15 of setup

        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        currentSDToggle(){
            store.commit('setCurrentSD', 'three')
            this.currentSD = store.getters.getCurrentSD
            //this function should not be removed as this is the first time setup of SD 3
        }        

    },
    data(){
        return{
            checkbox: false,
            currentSD: store.getters.getCurrentSD
        }
    }
}
</script>

