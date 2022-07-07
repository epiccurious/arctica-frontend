<template>
  <div class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Let's beging the setup process.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Get Started</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setup1',
    methods: {
        acknowledge(){
            console.log('user ack, starting setup')
            this.$router.push({ name: 'Setup2' })
        },
    },
    data(){
        return{
        }
    }
}
</script>

