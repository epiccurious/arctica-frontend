<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->

<template>
  <div class="page">
<Header title="How many SD cards do you have access to?"/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">I have 3 SD cards</Button>
        <button class="btn3">I have 2 SD cards</button>
        <h3>Unlocks in 27 days.</h3>
        <button class="btn3">I have 1 SD card</button>
        <h3>Unlocks in 57 days.</h3>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Recovery',
  components: {
    Header,
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing the application')
            this.$router.push({ path: '/login/recovery_initiate' })
        },
    },
}
</script>

