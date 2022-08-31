<template>
  <div class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Let's begin the set up process.</h2>
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
            console.log('user ack, starting set up')
            this.$router.push({ name: 'Setup2' })
            //eventually label the users machine with a text file that designates it as the primary machine here
        },
    },
    data(){
        return{
        }
    }
}
</script>

