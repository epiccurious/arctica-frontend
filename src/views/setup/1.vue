<template>
  <div v-if="this.installing == false" class="login">
<Header title="Welcome to Arctica" subtitle="The first step is for us to install the Bitcoin Software."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Install</Button>
    </div>
  </div>
  
  <div v-else class="installing">
<Header title="Welcome to Arctica" subtitle="Please wait...Installing Bitcoin Core"/>
    <div class="btn_container"> 
        <button class="btn3">Install</Button>
        <button @click="debug()" class="btn2">Debug - proceed</button>
        <!-- this is useful for testing if core is already installed or if the installation button still doesn't do anything -->
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
            console.log('installing bitcoin core')
            this.installing = true
        },
        debug(){
            console.log('debug clicked')
            this.$router.push({ path: '/setup/2' })
        }
    },
    data(){
        return{
            installing: false
        }
    }
}
</script>

<style scoped>
.installing{
    cursor:wait;
}
.btn3{
    cursor:wait;
}
</style>
