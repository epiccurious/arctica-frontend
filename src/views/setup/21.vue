<!-- This page is redundant with the instructions on step 20 and can probably be removed -->

<template>
<div class="page">
    <header>
        <h1>SD Card 1</h1>
        <h2>Please insert SD card 1.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 1.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
export default {
  name: 'Setup21',
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from setup CD to SD 1')
            this.$router.push({ name: 'Setup22' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

