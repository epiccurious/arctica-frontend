<template>
  <div class="login">
<header>
  <h1>Welcome to Arctica</h1>
  <h2>Please insert SD 1 and reboot this machine.</h2>
</header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        <button @click="help()" class="btn2">I need help</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boot',
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

