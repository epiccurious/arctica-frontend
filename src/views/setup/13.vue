<template>
<div class="page">
    <Header title="SD 1 creation complete" subtitle="Please insert SD 2 and reboot this machine."/>

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup13',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ path: '/setup/14' })
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

