<template>
<div class="page">
    <Header title="SD card 7" subtitle="Please remove SD card 6 and insert SD card 7."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted SD card 6.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup45',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 6 completed')
            this.$router.push({ path: '/setup/46' })
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

