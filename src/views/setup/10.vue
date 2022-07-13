<template>
<div class="page">
    <header>
        <h1>SD Card 7</h1>
        <h2>Please remove SD card 6 & insert SD card 7.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox" @click="currentSDToggle()">
                <label for="checkbox">I have inserted SD card 7.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'seven'" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup10',
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 7')
            this.$router.push({ name: 'Setup11' })
            //eventually need to electronically mark SD 2 with a text file label here
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        currentSDToggle(){
            store.commit('setCurrentSD', 'seven')
            this.currentSD = store.getters.getCurrentSD
        }

    },
    data(){
        return{
            currentSD: store.getters.getCurrentSD
        }
    }
}
</script>

