<template>
<Broadcast v-if="signed" v-on:closeOut="closeOut" :transaction="transaction" />
<div v-else class="page">
    <div id="back_button">
        <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/carat_left.png">Back</button>
    </div>
    <div class="display_block">
        <h1>Approve Transaction for Signing</h1>
        <img src="@/assets/checkmark_grey.png">
        <div class="tx_block">
            <h2>To</h2>
            <h3>{{ this.transaction.address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ {{ this.transaction.amount }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ {{ this.transaction.fee }}</h3>
        </div>

        <div class="btn_container">
            <button @click="sign()" class="btn"><img src="@/assets/checkmark_button.png">Approve</button>
            <button @click="$emit('closeOut')" class="btn2">Discard</button>
        </div>
        

    </div>
</div>
</template>


<script>
import Broadcast from '@/components/Broadcast'

export default {
    props: ['transaction'],
    components: {
    Broadcast
  },
    methods: {
        sign(){
            console.log('signing...')
            this.signed = true
        }
    },
    data(){
        return{
            signed: false
        }
    }
}
</script>

<style scoped>
.btn_container{
    margin-top: 2%;
}
.btn{
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.btnclose{
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    font-weight:500;
    font-size:18px;
    line-height: 18px;
}
</style>