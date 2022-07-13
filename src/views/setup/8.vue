<template>
<div class="page">
        <header>
        <h1>SD Card 5</h1>
        <h2>Please remove SD card 4 & insert SD card 5.</h2>
        </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox" @click="checkSD()">
                <label for="checkbox">I have inserted SD card 5.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'five' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup8',
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 5')
            this.$router.push({ name: 'Setup9' })
            //eventually need to electronically mark SD 5 with a text file label here
            //eventually need to mark SD 5 with a text file label here that directs primary machine to jump to step 18 of setup
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        checkSD(){
            this.currentSD = store.getters.getCurrentSD
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

