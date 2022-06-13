  <template>
<div class="page">
    <NavImmediate/>
    <div class="outer_container">
        <div class="head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <form>
            <label>Description (optional)</label>
            <br><input v-model="description" type="text" placeholder="What is this transaction for?">

            <br><label>Address</label>
            <br><input v-model="address" type="text" required placeholder="Enter Address"> 

            <br><label>Amount</label>
            <br><input v-model="amount" type="float" required placeholder="₿ 0.00">

            <div class="balance_calculator">
                <div class="balance_left">
                <h3>Your Balance</h3>
                <h4>₿ {{ immediateBalance }}</h4>
                </div>
                <div class="balance_right">
                    <button @click="selectMax()" class="btn4">Select Max</button>
                </div>
            </div>
            
            <br><label>Fee</label>
            <br><select name="fee" id="fee">
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
                <option value="custom">Custom (Advanced)</option>
            </select>

        </form>
    </div>
        <div class="button_container">
            <button @click="addRecipient()" class="btn2">Add another recipient</button>
            <button @click="continueFn()" class="btn">Continue</Button>
        </div>
    </div>        
</div>
</template>


<script>
import NavImmediate from '@/components/NavImmediate'

export default {
  name: 'immediateSend',
  components: {
    NavImmediate
  },
    methods: {
        continueFn(){
            console.log('Continue clicked')
        },
        addRecipient(){
            console.log('Add recipient clicked')
        },
        selectMax(){
            console.log('Select max clicked')
        },
    },
   data(){
     return{
         description: '',
         address: '',
         amount: '',
     }
 },
 inject: ['immediateBalance'],
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
    padding:15px;
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
  width: 30%;
}
form{
    max-width:70%;
    width: 60%;
    margin: 10px auto;
    text-align: left;
    padding:15px;
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
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius:5px; */
  color: #000000;
  width: 150px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  margin-right: 10px;
}
  </style>