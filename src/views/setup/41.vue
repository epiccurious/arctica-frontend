<template>
<div class="page">
    <header>
        <h1>SD Card 6</h1>
        <h2>Please remove SD card 5 and insert SD card 6.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'six' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup41',
    methods: {
        acknowledge(){
            console.log('user ack, package 5 completed')
            this.$router.push({ name: 'Setup42' })
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

