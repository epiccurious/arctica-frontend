<template>
  <header>
<h1>Let's double check your password.</h1>
 <h2>Confirm the password that you created on the previous screen.</h2> 
            <div class="form_container">
                <form>
                    <label>Enter Password</label>
                   <br><input v-model="password1" type="password" required placeholder="Your secret password">
                </form>
                <div class="btn_container"> 
                    <button v-if="password1 == this.password" @click="acknowledge()" class="btn">Continue</Button>
                    <button v-else @click="warn()" class="btn3">Continue</Button>
                    <button @click="$emit('goBack')" class="btn2">New Password</button>
                </div>
                </div>
    </header>
</template>

<!-- 
this component needs a fail condition -->

<script>

export default {
  name: 'Setup2A',
  props: ['password'],
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack')
        },
        warn(){
            console.log('user trying to proceed without password match, need form correction')
        },
    },
     data(){
     return{
         password1: '',
         password2: ''
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
