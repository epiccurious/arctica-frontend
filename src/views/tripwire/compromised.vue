<!-- This screen will function as a popup that displays upon login if the user has a compromised tripwire -->

<template>
<div class="page">
    <header>
        <h1>Someone has performed a quick withdrawal from SD 5</h1>
        <h2>If you did not spend this money, you should assume envelope 5 is compromised.</h2> 
        <h2>All of your funds should now be moved to a fresh Arctica wallet.</h2> 
    </header>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I understand my security may be compromised</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>

export default {
  name: 'Compromised',
  components: {
    },
    methods: {
            acknowledge(){
            console.log('user ack, tripwire compromised')
            this.$router.push({ path: '/wallets' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
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
form{
    max-width:420px;
    margin: 10px auto;
    text-align: left;
    padding:10px;
}
</style>
