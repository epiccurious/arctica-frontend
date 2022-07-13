<template>
<div class="page">
    <header>
        <h1>SD Card 2</h1>
        <h2>Please remove SD card 1 and insert SD card 2.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 2.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'two' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup25',
    methods: {
        acknowledge(){
            console.log('user ack, loading descriptor from DVD 1 onto SD 2')
            this.$router.push({ name: 'Setup26' })
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

