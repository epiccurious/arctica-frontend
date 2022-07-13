<template>
<div class="page">
    <header>
        <h1>SD Card 7</h1>
        <h2>Please remove SD card 6 and insert SD card 7.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 7.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'seven' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup45',
    methods: {
        acknowledge(){
            console.log('user ack, package 6 completed')
            this.$router.push({ name: 'Setup46' })
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

