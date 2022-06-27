<!-- This screen will automatically show when the user navigates to the delayed wallet while they have an open Time Machine Request -->

<!-- This screen is currently not displayed anywhere -->

<template>
  <div class="login">
<Header title="Your Time Machine request is still processing" subtitle="We are still waiting on Time Machine Operators. Check back in 24 hours."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TimeMachine3A',
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

