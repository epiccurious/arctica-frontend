<template>
<div class="page">
    <NavImmediate/>
    <div class="outer_container">
        <div class="send_head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <div class="send_form">
            <label>Description (disabled)</label>
            <br><input v-model="description" type="text" placeholder="What is this transaction for?" disabled="disabled">

            <br><label>Address</label>
            <br><input v-model="address" type="text" required placeholder="Enter Address"> 

            <br><label>Amount</label>
            <br><input v-model="balance" type="float" required placeholder="₿ 0.00">
            <!-- Need to implement a 2 way bind here and reference it against an exchange API so we can dynamically calucate the BTC or Fiat amount against whatever the user inputs -->

            <div class="balance_calculator">
                <div class="balance_left">
                <h2>Your Balance</h2>
                <h3>₿ {{ immediateBalance }}</h3>
                </div>
                <div class="balance_right">
                    <button @click="selectMax()" class="btn4">Select Max (disabled)</button>
                </div>
            </div>
            
            <br><label>Fee (Sats per Byte) [disabled]</label>
            <br><input v-if="custom == false" v-model="fee" type="integer" placeholder="Sats per Byte" disabled="disabled">
            <div class="checkbox_container">
                    <input type="checkbox" v-model="custom" name="checkbox">
                    <label for="checkbox">Use a reccomended fee (fee estimates are placeholders)</label>
                </div>
            <br><select v-if="custom == true" v-model="fee" name="fee" id="fee" required>
                <option @click="setFee(highFee)" value="high">High Priority {{ highFee }} sat/Byte</option>
                <option @click="setFee(mediumFee)" value="medium">Medium Priority {{ mediumFee }} sat/Byte</option>
                <option @click="setFee(lowFee)" value="low">Low Priority {{ lowFee }} sat/Byte</option>
            </select>


        </div>
    </div>
        <div class="send_button_container">
            <button @click="addRecipient()" class="btn2">Add another recipient (disabled)</button>
            <button @click="continueFn(address, balance, fee)" class="btn">Continue</Button>
        </div>
    </div>        
</div>
</template>


<script>
import NavImmediate from '@/components/NavImmediate'
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'immediateSend',
  components: {
    NavImmediate,
  },  
    methods: {
        continueFn(address, balance, fee){
            invoke('generate_psbt', {walletname:"immediate", hwnumber: "1", recipient: address, amount: Number(balance), fee: Number(fee)}).then((res) => {
                store.commit('setDebug', `Generating PSBT: ${res}`)
                this.$router.push({name: 'sign1of2'})
            })
            .catch((e) => {
                //eventually need to add front end feedback here rather than send to fatal error screen
                store.commit('setDebug', `Error generating PSBT: ${e}`)
                store.commit('setErrorMessage', `Error generating PSBT. Error code: ImmediateSend1 Response: ${e}`)
                this.$router.push({ name: 'Error' })
            })

        },
        // eventually the continueFn() should construct and return the PSBT
        addRecipient(){
            this.multiOutput = true
        },
        selectMax(){
            this.balance = this.immediateBalance
        },
        //real time fee estimates currently disabled, hard coded values provided below
        setFee(input){
            this.fee = input
        }
    },
   data(){
     return{
         id: null,
         datetime: null,
         highFee: 12,
         mediumFee: 5,
         lowFee: 1,
         description: '',
         fiat_currency: 'NaN', //this eventually needs to utilize a live exchange API 
         address: '',
         balance: null,
         fee: null,
         custom: false,
         multiOutput: false,
         checkbox: true,
     }
    //  Need a function to deliver dynamic fee estimates for the above data
 },
 computed:{
    immediateBalance:{
        get(){
                return store.getters.getImmediateBalance
            }
    }
 },
 mounted(){
    this.immediateBalance = store.getters.getImmediateBalance
 }
}
</script>



<style scoped>
h2{
    font-size:15px;
    line-height: 18px;
}
  </style>