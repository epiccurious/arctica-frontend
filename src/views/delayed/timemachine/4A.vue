<!-- This screen will automatically show when the user does not have sufficient funds in their immediate account to proceed -->

<!-- This screen is currently not displayed anywhere because we need a live price API for it to work-->

<template>
  <div class="login">
<Header title="Insufficient Funds" subtitle="In order to proceed you must have atleast $10,000 in your immediate account."/>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TimeMachine4A',
  components: {
    Header,
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceeding to immediate receive tab')
            this.$router.push({ path: '/wallets/immediate/receive' })
        },

    },
}
</script>

