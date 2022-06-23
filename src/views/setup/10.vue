<template>
<div class="page">
    <Header title="SD Card 7" subtitle="Please remove SD card 6 & insert SD card 7."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted SD card 7.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup10',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, flashing SD 7')
            this.$router.push({ path: '/setup/11' })
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

