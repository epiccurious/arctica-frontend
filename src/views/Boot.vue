<template>
  <div class="login">
<Header title="Welcome to Arctica" subtitle="Please insert SD 1 and reboot."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'

export default {
  name: 'Boot',
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

