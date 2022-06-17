<template>
  <div class="login">
<Header title="Welcome to Arctica" subtitle="Let's begin the setup process."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Get Started</Button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup1',
  components: {
    Header,
    },
    methods: {
        acknowledge(){
            console.log('user ack')
            this.$router.push({ path: '/setup/2' })
        },
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
</style>
