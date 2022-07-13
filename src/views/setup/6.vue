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
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
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
            //update state with current SD, once the SD is marked electronically with a txt file this can be replaced with logic that updates state dynamically
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        currentSDToggle(){
            store.commit('setCurrentSD', 'three')
        }        

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

