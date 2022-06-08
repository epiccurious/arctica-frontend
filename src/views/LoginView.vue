<template>
  <div class="login">
<Header title="Welcome to Arctica" subtitle="Everything looks good. Glad to have you back."/>
    <div class="btn_container"> 
        <Button_primary text="Log in"/>
        <Button_secondary text="Quick Withdrawal - $500"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Button_primary from '@/components/Button_primary'
import Button_secondary from '@/components/Button_secondary.vue'

export default {
  name: 'LoginView',
  components: {
    Header,
    Button_primary,
    Button_secondary,
    },
}
</script>

