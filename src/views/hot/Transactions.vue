<template>
<Transaction v-if="transactionView" v-on:closeOut="closeOut" :transaction="hotTransactions[transactionView - 1]" />
<div v-else class="page">
    <NavHot />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transaction History</h1>
        </div>
        <div @click="transactionDetail(transaction.id)" v-for="transaction in hotTransactions" :key="transaction.id" class="transaction_container">
          <div class="transaction_container_left">
          <h2>{{ truncateString(transaction.address) }}</h2>
          <h3>{{ transaction.datetime }}</h3>
          </div>
          <div class="transaction_container_right">
            <h2 class="balance">₿ -{{ transaction.balance.toLocaleString('en-US') }} sats</h2>
            <h3 class="fiat_currency">$ -{{ transaction.fiat_currency.toLocaleString('en-US') }}</h3>
          </div>
        </div>
      </div>
</div>
</template>

<!-- Need search and filter component -->


<script>
import NavHot from '@/components/NavHot'
import Transaction from '@/components/Transaction.vue'

export default {
  name: 'hot',
  components: {
    NavHot,
    Transaction
  },
  data() {
      return{
        // this is hardcoded dummy data, remove once the getTransactions script fetches from backend
          hotTransactions: [
              {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-10T12:00:00-04:10' , fee: 0.00000987, status: 'Unconfirmed'},
              {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs3pp7d0hhxesvwq88ecfp', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
              {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3gkd5ut920tw7mq2j9ldh', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000408, status: 'Confirmed'}
          ],
          transactionView: false
          
          
      }
  },
    methods: {
      transactionDetail(transactionId){
          console.log(`transaction ${transactionId} clicked`)
          this.transactionView = transactionId
      },
      closeOut(){
          console.log('detail window closed')
          this.transactionView = false
      },
  },
    computed:{
    truncateString(){
      return (str)=>{
        return str.slice(0,18) + '...'
      }
      }
  }
}
</script>

<style scoped>
.dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width:60%;
  margin-left:20%;
}
h1{
  margin-top: 50px;
  padding:0px;
}
h2{
  color:#000000;
}
h3{
  font-family: 'Inter';
  color: #777777;
}
.head_container{
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.transaction_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.transaction_container:hover{
    cursor:pointer
}
.transaction_container_left{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  width:50%;
}
.transaction_container_right{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
  align-content:center;
  width:50%;
}
</style>