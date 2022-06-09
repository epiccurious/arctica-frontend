<template>
  <div class="login">
<Header title="Welcome to Arctica" subtitle="Everything looks good. Glad to have you back."/>
    <div class="btn_container"> 
        <button @click="onClick()" class="btn">Log in</Button>
        <button @click="onClick2()" class="btn2">Quick Withdrawal - $500</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'

export default {
  name: 'LoginView',
  components: {
    Header,
    },
    methods: {
        onClick(){
            console.log('login clicked')
        },
        onClick2(){
            console.log('quick withdrawal clicked')
        }
    },
}
</script>

