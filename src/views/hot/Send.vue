  <template>
<div class="page">
    <NavHot/>
    <div class="outer_container">
        <div class="send_head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <form class="send_form">
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
                <h3>₿ {{ hotBalance }}</h3>
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

        </form>
    </div>
        <div class="send_button_container">
            <button @click="addRecipient()" class="btn2">Add another recipient</button>
            <button @click="continueFn(description, address, balance, fee, customFee)" class="btn">Continue</Button>
        </div>
    </div>        
</div>
</template>


<script>
import NavHot from '@/components/NavHot'
import store from '../../store.js'

export default {
  name: 'hotSend',
  components: {
    NavHot,
  },  
    methods: {
        continueFn(description, address, balance, fee, customFee){
            console.log('Continue clicked')
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
            this.$router.push({name: 'hotSign'})

        },
        // eventually the continueFn() should construct the PSBT
        addRecipient(){
            console.log('Add recipient clicked')
            this.multiOutput = true
        },
        //there is currently a bug where this function (clicking the button) reloads the page (remounts the app?) whenever there is data in one of the 
        //other forms
        selectMax(){
            console.log('Select max clicked')
            this.balance = this.hotBalance
        },
        customEnable(){
            console.log('Custom Fee Selected')
            this.custom = true
        },
        customDisable(){
            console.log('Custom Fee Deselected')
            this.custom = false
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
         fiat_currency: 'NaN', //this eventually needs to utilize a live exchange API 
         address: '',
         balance: '',
         fee: 'high',
         customFee: '',
         custom: false,
         transaction: {},
         constructed: false,
         multiOutput: false,
     }
    //  Need a function to deliver dynamic fee estimates for the above data
 },
 mounted(){
    this.transaction = store.getters.getTransaction

    //get a new internal id for the bitcoin tx about to be created
    this.id = store.getters.getHotTransactions.length + 1

    //set current datetime
 },
 computed:{
    hotBalance(){
        return store.getters.getHotBalance
    },
 },
}
</script>



<style scoped>
h2{
    font-size:15px;
    line-height: 18px;
}
  </style>