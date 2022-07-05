<template>
<div class="page">
    <div class="display_block">
        <h1>Approve Transaction for Signing (2 of 2)</h1>
        <img src="@/assets/checkmark_grey.png">
        <div class="tx_block">
            <!-- <h2>To</h2>
            <h3>{{ this.transaction.address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ {{ this.transaction.amount }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ {{ this.transaction.fee }}</h3> -->
        </div>

        <div class="horizontal_btn_container">
            <button @click="sign()" class="btn"><img src="@/assets/checkmark_button.png">Approve</button>
            <button @click="discard()" class="btn2">Discard</button>
        </div>
        

    </div>
</div>
</template>


<script>

export default {
    name: 'sign2of2',
    props: [],
    //import PSBT eventually...
    methods: {
        sign(){
            console.log('signing...')
            this.signed = true
            this.$router.push({ path: '/wallets/immediate/2of2success' })
        },
        discard(){
            console.log('discarding PSBT')
            this.$router.push({path: '/wallets/immediate'})
        }
    },
}
</script>

<style scoped>
.btn{
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>