<template>
  <div class="login">
<Header title="Your Time Machine request is processing" subtitle="We've contacted time machine operators. Check back in 24 hours."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TimeMachine3',
  components: {
    Header,
    },
    methods: {
        acknowledge(){
            console.log('user ack')
            this.$router.push({ path: '/wallets' })
        },

    },
}
</script>

