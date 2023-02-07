<template>
    <DelayWarning v-if="warning" v-on:ackWarning="ackWarning"/>
    <div v-else class="page">
        <NavDelayed/>
        <div class="outer_container">
            <div class="send_head_container">
            <h1>Send Bitcoin</h1>
            </div>
        <div class="send_container">
            <div class="send_form">
                <label>Description</label>
                <br><input v-model="description" type="text" placeholder="What is this transaction for?">

                <br><label>Address</label>
                <br><input v-model="address" type="text" required placeholder="Enter Address"> 

                <br><label>Amount</label>
                <br><input v-model="balance" type="float" required placeholder="₿ 0.00">
                <!-- Need to implement a 2 way bind here and reference it against an exchange API so we can dynamically calucate the BTC or Fiat amount against whatever the user inputs -->

                <div class="balance_calculator">
                    <div class="balance_left">
                    <h2>Your Balance</h2>
                    <h3>₿ {{ delayedBalance }}</h3>
                    </div>
                    <div class="balance_right">
                        <button @click="selectMax()" class="btn4">Select Max</button>
                    </div>
                </div>
                
                <br><label>Fee</label>
                <br><select v-model="fee" name="fee" id="fee" required>
                    <option @click="customDisable()" value="high">High Priority {{ highFee }} sat/Byte</option>
                    <option @click="customDisable()" value="medium">Medium Priority {{ mediumFee }} sat/Byte</option>
                    <option @click="customDisable()" value="low">Low Priority {{ lowFee }} sat/Byte</option>
                    <option @click="customEnable()" value="custom">Custom (Advanced)</option>
                </select>
                <br><label v-if="custom == true">Sats per Byte</label>
                <br><input v-if="custom == true" v-model="customFee" type="integer" placeholder="Sats per Byte">

            </div>
        </div>
            <div class="send_button_container">
                <button @click="addRecipient()" class="btn2">Add another recipient</button>
                <button @click="continueFn(description, address, balance, fee, customFee)" class="btn">Continue</Button>
            </div>
        </div>        
    </div>
</template>


<script>
import NavDelayed from '@/components/NavDelayed'
import DelayWarning from './DelayWarning'
import store from '../../store.js'

export default {
  name: 'delayedSend',
  components: {
    NavDelayed,
    DelayWarning
  },
    methods: {
        continueFn(description, address, balance, fee, customFee){
            store.commit('setTxId', this.id)
            store.commit('setTxDescription', description)
            store.commit('setTxAddress', address)
            store.commit('setTxBalance', balance)
            store.commit('setTxFiat', this.fiat_currency)
            store.commit('setTxDateTime', this.datetime)
            store.commit('setTxFee', fee)
            store.commit('setTxCustomFee', customFee)
            store.commit('setTxStatus', 'unconfirmed')
            this.transaction = store.getters.getTransaction
            this.$router.push({ name: 'delayedTransfer' })        
        },
        txConstructed(transaction){
            this.constructed = transaction
        },
        addRecipient(){
            this.multiOutput = true
        },
        selectMax(){
            this.balance = this.delayedBalance
        },
        customEnable(){
            this.custom = true
        },
        customDisable(){
            this.custom = false
        },
        closeOut(){
          this.constructed = false
      },
        ackWarning(){
        this.warning = false
      },
    },
   data(){
     return{
         id: null,
         datetime: null,
         highFee: 12,
         mediumFee: 5,
         lowFee: 1,
         description: '',
         address: '',
         balance: '',
         fiat_currency: 'NaN', //this eventually needs to utilize a live exchange API 
         fee: 'high',
         customFee: '',
         custom: false,
         transaction: {},
         constructed: false,
         multiOutput: false,
         timeLock: null,
         warning: null
     }
    //  Need a function to deliver dynamic fee estimates for the above data
 },
 computed:{
    delayedBalance(){
        return store.getters.getDelayedBalance
    },

 },
 mounted(){
    this.timeLock = store.getters.getTimeLock
    this.transaction = store.getters.getTransaction
    if(this.timeLock == true){
        this.warning = true
    }else{this.warning = false}
    //get a new internal id for the bitcoin tx about to be created
    this.id = store.getters.getDelayedTransactions.length + 1

    //set current datetime
 }

    //  Need a function to deliver dynamic fee estimates for the above data
 }

</script>


<style>
  </style>




<style scoped>
h2{
    font-size:15px;
    line-height: 18px;
}
  </style>