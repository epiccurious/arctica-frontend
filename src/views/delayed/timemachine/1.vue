<template>
<div class="page">
    <header>
        <h1>Initiating this process is irreversible.</h1>
        <h2>To proceed you must release the information provided in your Personally Identifiable Information folder.</h2> 
        <h2>This information will be released to anonymous Time Machine Operators.</h2> 
        <h2>Additionally, this process will take several weeks and cost you approximately $20,000.</h2>
        <h2>Are you sure you wish to proceed?</h2>
    </header>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I acknowledge these costs.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Release my information</Button>
            <button v-else @click="warn()" class="btn3">Release my information</Button>
            <button @click="goBack()" class="btn2">Nevermind</button>
        </div>
    </div> 


</div>

</template>

<script>

export default {
  name: 'TimeMachine1',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, initiating time machine protocol')
            this.$router.push({ path: '/delayed/timemachine/2' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        goBack(){
            console.log('user aborting time machine protocol')
            this.$router.push({ path: '/wallets' })
        }

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

<style scoped>
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
