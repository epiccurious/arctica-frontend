<template>
<div class="page">
    <div class="display_block">
        <img src="@/assets/Circle_arrow_up.png">
        <h1>Transaction Sent. </h1>
        <h2>It usually takes about 30 minutes to be finalized.</h2>
        <h2>You should now <a href="#">destroy</a> your transfer CD.</h2>
        <div class="horizontal_btn_container">
            <button @click="viewTx()" class="btn2">View Transaction</button>
            <button @click="back()" class="btn">Back to Wallet</button>
        </div>
    </div>
</div>

</template>


<script>
import store from '../../../store.js'
export default{
    name: 'immediateConfirmation',
    methods:{
        back(){
            this.$router.push({ name: 'immediate' })
        },
        viewTx(){
            this.$router.push({path: `${this.id}`})
        }
    },
    computed:{
        id(){
           let immediateTransactions = store.getters.getImmediateTransactions
           return immediateTransactions.length

        }
    },
}
</script>
