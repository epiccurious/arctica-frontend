  <template>
  <Sign v-if="constructed" v-on:closeOut="closeOut" :transaction="transaction" />
<div v-else class="page">
    <div class="outer_container">
        <div class="head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <form>
            <label>Description</label>
            <br><input v-model="description" type="text" placeholder="What is this transaction for?">

            <br><label>Address</label>
            <br><input v-model="address" type="text" required placeholder="Enter Address"> 

            <br><label>Amount</label>
            <br><input v-model="amount" type="float" required placeholder="₿ 0.00">
            <!-- Need to implement a 2 way bind here and reference it against an exchange API so we can dynamically calucate the BTC or Fiat amount against whatever the user inputs -->

            <div class="balance_calculator">
                <div class="balance_left">
                <h3>Your Balance</h3>
                <h4>₿ {{ quickBalance }}</h4>
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
        <div class="button_container">
            <button @click="addRecipient()" class="btn2">Add another recipient</button>
            <button @click="continueFn(description, address, amount, fee, customFee)" class="btn">Continue</Button>
        </div>
    </div>        
</div>
</template>


<script>
import Sign from '@/components/Sign'

export default {
  name: 'quick2',
  components: {
    Sign
  },
    methods: {
        continueFn(description, address, amount, fee, customFee){
            console.log('Continue clicked')
            this.transaction = {id:100, description:description, address:address, amount:amount, fiat_currency:(20000*amount), datetime:'07oct20221000', fee:fee, customFee:customFee, status: 'unconfirmed'}
            this.txConstructed(this.transaction)
        },
        // eventually the continueFn() should construct and return the PSBT
        txConstructed(transaction){
            this.constructed = transaction
        },
        addRecipient(){
            console.log('Add recipient clicked')
        },
        // selectMax(){
        //     console.log('Select max clicked')
        //     this.amount = this.immediateBalance
        // },

        //selectMax() is currently disabled because there is a bug where it reloads the page when clicked...
        customEnable(){
            console.log('Custom Fee Selected')
            this.custom = true
        },
        customDisable(){
            console.log('Custom Fee Deselected')
            this.custom = false
        },
        closeOut(){
          console.log('sign window closed')
          this.constructed = false
      },
    },
   data(){
     return{
         highFee: 12,
         mediumFee: 5,
         lowFee: 1,
         description: '',
         address: '',
         amount: '',
         fee: 'high',
         customFee: '',
         custom: false,
         transaction: {},
         constructed: false,
     }
    //  Need a function to deliver dynamic fee estimates for the above data
 },
 inject: ['quickBalance'],
}
</script>


<style>
  </style>




<style scoped>
.outer_container{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.send_container{
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width:70%;
    margin: 0 auto;
}
.balance_left{
    display:flex;
    flex-direction: column;
    align-items:flex-start;
}
.balance_calculator{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items:center;
}
h1{
  margin-top: 50px;
  padding:10px;
  text-align:left;
  font-weight:600;
  font-size:21px;
  line-height:25px
}
h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight:400;
    font-size:15px;
    line-height: 18px;
    color: #777777;
}
h4{
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color:#000000;
}
.head_container{
margin: 0 auto;
width: 44%;
}
form{
    max-width:70%;
    width: 60%;
    margin: 10px auto;
    text-align: left;
    padding-top:5px;
    padding-left:15px;
    padding-right:15px;
    padding-bottom:15px;
}
label{
    display:inline-block;
    margin: 25px 0 15px;
    font-size: 20px;

}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    font-size: 18px;
    font-weight:400;
    line-height:140%;
    
}
select{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    background-color:#FFFFFF;
    
}
.button_container{
    display:flex;
    flex-direction: row;
}

.btn {
  background: #F7931A;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  margin-left: 10px;
  
}
.btn2 {
  background: #FFFFFF;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #000000;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  margin-right: 10px;
}
.btn4 {
  background: #FFFFFF;
  color: #000000;
  width: 150px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  margin-right: 10px;
}
  </style>