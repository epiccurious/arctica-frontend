<template>
<Duress2 v-if="passwordSetup" v-on:goBack="goBack" :password="password2"/>
<div v-else class="page">
<header>
    <h1>Let's create a duress password</h1>
    <h2>When you attempt to login with this password, it will activate Arctica's <a href="#">Duress Protocol</a>.</h2>
    <h3>Entering your Duress Password at the Login screen will automatically send Bitcoin.</h3>
 </header>
      <div class="form_container">
        <form>
                    <label>Enter Duress Password</label>
                   <br><input v-model="password1" type="password" required placeholder="Your duress password">

                    <br><label>Confirm Duress Password</label>
                   <br><input v-model="password2" type="password" required placeholder="Your duress password">

            <div id="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have read and understand the <a href="#">Duress Protocol</a>.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox && password1 == password2 && password1 != '' && password2 != '' " @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 

</div>

</template>

<script>
import Duress2 from './duress2'

export default {
  name: 'duressPostSetup1',
  components: {
      Duress2
    },
    methods: {
        acknowledge(){
            console.log('user ack, initiating duress password')
            this.passwordSetup = true
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        goBack(){
            console.log('user wants new password')
            this.passwordSetup = false
            this.password1 = ''
            this.password2 = ''
        }

    },
    data(){
        return{
            checkbox: false,
            password1: '',
            password2: '',
            passwordSetup: false
        }
    }
}
</script>

<style scoped>
a{
    color:#2D9CDB;
}
h1{
    font-size: 21px;
    font-weight:600;
    line-height: 25px;
}
h2{
    font-size: 18px;
    color: #777777;
    font-weight: 400;
}
h3{
    font-weight:800;
}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    
}
#checkbox_container{
    display:flex;
    flex-direction: row;
}
input[type="checkbox"]{
    max-width:16px;
}
</style>