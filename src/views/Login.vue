<template>
<div class="page">
        <Header title="Log in" subtitle="Please enter your password below."/>
            <div class="form_container">
                <form>
                    <label>Enter Password</label>
                   <br><input v-model="password1" type="password" required placeholder="Your secret password">

                    <br><label>Confirm Password</label>
                   <br><input v-model="password2" type="password" required placeholder="Your secret password">
                </form>
                <div class="btn_container"> 
                    <button v-if="password1 == password2 && password1 != '' && password2 != '' " @click="login()" class="btn">Continue</Button>
                    <button v-else @click="warn()" class="btn3">Continue</Button>
                    <button @click="passwordRecovery()" class="btn2">I Forgot my Password</button>
                </div>
            </div>
            
</div>  
</template>

<!-- Currently, the two passwords inputs just need to match in order for the user to login -->

<script>
import Header from '@/components/Header'

export default {
  name: 'Login',
  components: {
    Header,
    },
    methods: {
        login(){
            this.$router.push({ path: '/wallets' })
        },
        passwordRecovery(){
            console.log('Password Recovery Clicked')
            this.$router.push({ path: '/login/recovery' })
        },
        warn(){
            console.log('user trying to proceed without password match, need form correction')
        },
    },
 computed: {},
 data(){
     return{
         password1: '',
         password2: ''
     }
 }
}
</script>


