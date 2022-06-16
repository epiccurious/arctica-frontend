<template>
  <div class="login">
<Header title="Bitcoin Core Successfully Installed" subtitle="Now that the Bitcoin Software is installed, we need to download and sync the blockchain. This can take anywhere from a few days to several weeks."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Install</Button>
    </div>
  </div>
  
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup2',
  components: {
    Header,
    },
    methods: {
        acknowledge(){
            console.log('user ack')
        },
    },
}
</script>

<style scoped>

</style>
