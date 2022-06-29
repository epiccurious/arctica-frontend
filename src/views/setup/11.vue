<template>
<div class="page">
    <Header title="SD creation successful" subtitle="Please insert SD 1 into your secondary machine and reboot the device."/>

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
           <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup11',
  components: {
      Header
    },
    methods: {
        proceed(){
            console.log('user ack, close application')
            this.$router.push({ path: '/setup/12' })
        },
        acknowledge(){
            console.log('user ack, closing application')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

