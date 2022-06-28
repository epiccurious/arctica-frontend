<!-- This page will dynamically display the current number of SD cards needed to decrypt as well as a countdown to the remaining priacy key decay schedules -->

<template>
  <div class="page">
<Header title="How many SD cards do you have access to?"/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        <button @click="help()" class="btn2">I need help</button>
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
        },
        help(){
            console.log('fetching help')
        }
    },
}
</script>

