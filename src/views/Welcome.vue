<template>
  <div class="login">
<Header title="Welcome to Arctica" subtitle="Everything looks good. Glad to have you back."/>
    <div class="btn_container"> 
        <button @click="login()" class="btn">Log in</Button>
        <button @click="quickWithdrawal()" class="btn2">Quick Withdrawal - $500</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'

export default {
  name: 'Welcome',
  components: {
    Header,
    },
    methods: {
        login(){
            this.$router.push({ path: '/login' })
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
        }
    },
}
</script>

