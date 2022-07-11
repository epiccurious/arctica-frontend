<template>
<div class="page">
        <header>
            <h1>Log in</h1>
            <h2>Please enter your password below.</h2>
        </header>
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
export default {
  name: 'Login',
    methods: {
        login(){
            this.$router.push({ name: 'dashboard' })
        },
        passwordRecovery(){
            console.log('Password Recovery Clicked')
            this.$router.push({ name: 'Recovery' })
        },
        warn(){
            console.log('user trying to proceed without password match, need form correction')
        },
    },
 computed: {},
 data(){
     return{
         password1: '',
         password2: '',
     }
 },
}
</script>


