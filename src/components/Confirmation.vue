<template>
<div class="page">
    <div class="display_block">
        <img src="@/assets/Circle_arrow_up.png">
        <h1>Transaction Sent. </h1>
        <h2>It usually takes about 30 minutes to be finalized.</h2>
        <div class="horizontal_btn_container">
            <button @click="viewTx()" class="btn2">View Transaction</button>
            <button @click="back()" class="btn">Back to Wallet</button>
        </div>
    </div>
</div>

</template>


<script>
export default{
    methods:{
        back(){
            if(this.$route.name === 'immediateSend'){
                this.$router.push({ path: '/wallets/immediate' })
            }
            else if(this.$route.name === 'delayedSend'){
                this.$router.push({ path: '/wallets/delayed' })
            }
            else if(this.$route.name ==='hotSend'){
                this.$router.push({ path: '/wallets/hot' })
            }
            else{this.$router.push({ path: '/wallets' })}
        },
        viewTx(){
            console.log('view tx clicked')
        }
    }
}
</script>
