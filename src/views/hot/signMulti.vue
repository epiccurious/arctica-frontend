<template>
<div class="page">
    <div class="display_block">
        <h1>Approve Transaction for Signing</h1>
        <div class="output_wrap">
            <div class="output_multi" v-for="tx in transaction" :key="tx.id">
                <img v-if="this.x == tx.id - 1" class="selected" src="@/assets/checkmark_grey.png">
                <img v-else src="@/assets/checkmark_grey.png">
            </div>
        </div>
        <div class="tx_block">
            <h2>To</h2>
            <h3>{{ this.transaction[x].address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ {{ this.transaction[x].balance / 100000000 }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ {{ this.transaction[x].fee }}</h3>
        </div>

        <div class="horizontal_btn_container">
            <button v-if="this.x == 0" class="btn8"><img src="@/assets/carat_left.png"></button>
            <button v-else @click="backward()" class="btn7"><img src="@/assets/carat_left.png"></button>
            <div>
                <button @click="sign()" class="btn"><img src="@/assets/checkmark_button.png">Approve</button>
                <button @click="discard()" class="btn2">Discard</button>
            </div>
            <button v-if="this.x == this.transaction.length - 1" class="btn8"><img src="@/assets/carat_right.png"></button>
            <button v-else @click="forward()" class="btn7"><img src="@/assets/carat_right.png"></button>
            
        </div>
        
    </div>
</div>
</template>


<script>
import store from '../../store.js'

export default {
    name: 'hotSignMulti',
    methods: {
        sign(){
            console.log('signing...')
            this.signed = true
            this.$router.push({ name: 'hotBroadcast' })
        },
        discard(){
            console.log('discarding PSBT')
            store.commit('clearTransaction')
            this.$router.push({name: 'hot'}) 
        },
        forward(){
            this.x = this.x + 1
        },
        backward(){
            this.x = this.x - 1
        }
    },
    data(){
        return{
            transaction: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000987, status: 'Confirmed', description: ''},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed', description: ''},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed', description: ''}
    ],
            x: 0
        }
    }
}
</script>

<style scoped>
.btn{
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.horizontal_btn_container{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.btn7{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:5px;
}
.btn8{
    background: #DEDEDE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:5px;  
}
.output_wrap{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content:space-between; 
    
}
.output_multi{
    padding-left: 3px;
    padding-right: 3px;
}
.selected{
    border: 2px solid #009DE0;
    border-radius: 25px;
}
</style>