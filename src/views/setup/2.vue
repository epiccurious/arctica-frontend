<template>
<Setup2A v-if="passwordSetup" :password="password2"/>


  <header v-else>
<h1>Let's setup your password</h1>
 <h2>Select two words which are easy for you to remember, such as an adjective and a noun.</h2> 
 <h2>You should not write these words down.</h2> 
     <h2>below is an example which you can use if you like</h2>
     <h3>Granite Sparkle</h3> <!-- this needs to eventually come from a word list -->

            <div class="form_container">
                <form>
                    <label>Enter Password</label>
                   <br><input v-model="password1" type="password" required placeholder="Your secret password">

                    <br><label>Confirm Password</label>
                   <br><input v-model="password2" type="password" required placeholder="Your secret password">
                </form>
                <div class="btn_container"> 
                    <button v-if="password1 == password2 && password1 != '' && password2 != '' " @click="acknowledge()" class="btn">Continue</Button>
                    <button v-else @click="warn()" class="btn3">Continue</Button>
                </div>
                </div>
    </header>

  
</template>

<script>
import Setup2A from './2A'

export default {
  name: 'Setup2',
  components: {
      Setup2A
    },
    methods: {
        acknowledge(){
            console.log('user ack')
            this.passwordSetup = true
        },
        warn(){
            console.log('user trying to proceed without password match, need form correction')
        },
    },
     data(){
     return{
         password1: '',
         password2: '',
         passwordSetup: false
     }
 }
}
</script>

<style scoped>
header{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 25px;
    margin: 0 auto;
    margin-top: 5%;
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
    font-size: 20px;

}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    
}
</style>
