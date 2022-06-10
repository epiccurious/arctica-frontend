<template>
<div class="page">
        <Header title="Log in" subtitle="Please enter your password below."/>
            <div class="form_container">
                <form>
                    <label>Enter Password</label>
                   <br><input type="password" required placeholder="Your secret password">

                    <br><label>Confirm Password</label>
                   <br><input type="password" required placeholder="Your secret password">
                </form>
                <div class="btn_container"> 
                    <button @click="login()" class="btn">Continue</Button>
                    <button @click="passwordRecovery()" class="btn2">I Forgot my Password</button>
                </div>
            </div>
            
</div>  
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Login',
  components: {
    Header,
    },
    methods: {
        login(){
            console.log('Login Clicked')
        },
        passwordRecovery(){
            console.log('Password Recovery Clicked')
        },
    },
}
</script>

<style scoped>
.form_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}
form{
    max-width:420px;
    margin: 30px auto;
    text-align: left;
    padding:40px;
}
label{
    display:inline-block;
    margin: 25px 0 15px;

}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    
}
</style>

