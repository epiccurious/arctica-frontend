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
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
export default {
  name: 'Setup5',
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 2')
            this.$router.push({ name: 'Setup6' })
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

