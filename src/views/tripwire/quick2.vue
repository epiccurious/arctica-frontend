  <template>
  <Sign v-if="constructed" v-on:closeOut="closeOut" :transaction="transaction" />
<div v-else class="page">
    <div class="outer_container">
        <div class="head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <form class="send_form">
            <label>Description</label>
            <br><input v-model="description" type="text" placeholder="What is this transaction for?">

            <br><label>Address</label>
            <br><input v-model="address" type="text" required placeholder="Enter Address"> 

            <br><label>Amount</label>
            <br><input v-model="amount" type="float" required placeholder="₿ 0.00">
            <!-- Need to implement a 2 way bind here and reference it against an exchange API so we can dynamically calucate the BTC or Fiat amount against whatever the user inputs -->

            <div class="balance_calculator">
                <div class="balance_left">
                <h2>Your Balance</h2>
                <h3>₿ {{ quickBalance }}</h3>
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
            <button @click="goBack()" class="btn2">Go back</button>
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
              goBack(){
            this.$router.push({ path: '/' })
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
h1{
  margin-top: 50px;
  padding:10px;
}
.head_container{
margin: 0 auto;
width: 44%;
}
  </style>