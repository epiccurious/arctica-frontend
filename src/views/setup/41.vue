<template>
<div class="page">
    <Header title="SD card 6" subtitle="Please remove SD card 5 and insert SD card 6."/>
    
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
  name: 'Setup41',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 5 completed')
            this.$router.push({ path: '/setup/42' })
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

