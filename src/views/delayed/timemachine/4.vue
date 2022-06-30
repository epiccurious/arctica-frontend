<!-- This screen will proceed to TimeMachine4A if the user has insufficient funds in immediate account for payment -->



<template>
<div class="page">
    <header>
        <h1>Your first Time Machine Operator is ready to assist.</h1>
        <h2>Please confirm you are ready to pay this operator $10,000 from your immediate wallet.</h2> 
        <h4>Are you sure you wish to proceed?</h4>
    </header>
    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I acknowledge these costs.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
            <button @click="goBack()" class="btn2">Nevermind</button>
            <!-- This button needs to eventually cancel the pending time machine request and update the global variable -->
        </div>
    </div> 


</div>

</template>

<script>

export default {
  name: 'TimeMachine4',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceeding to immediate signing flow')
            // this.$router.push({ path: '/' })
            // this button needs to send the user to a preconstructed transaction which they then sign
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
