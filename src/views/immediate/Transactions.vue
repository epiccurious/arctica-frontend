<template>
<Transaction v-if="transactionView == true" v-on:closeOut="closeOut"/>
  <div v-else class="page">
    <NavImmediate />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transaction History</h1>
        </div>
        <div @click="transactionDetail()" v-for="transaction in transactions" :key="transaction.id" class="transaction_container">
          <div class="transaction_container_left">
          <h2>{{ transaction.address }}</h2>
          <h3>{{ transaction.datetime }}</h3>
          </div>
          <div class="transaction_container_right">
            <h2 class="balance">₿ -{{ transaction.balance.toLocaleString('en-US') }} sats</h2>
            <h2 class="fiat_currency">$ -{{ transaction.fiat_currency.toLocaleString('en-US') }}</h2>
          </div>
        </div>
      </div>
  </div>
</template>

<!-- Need search and filter component -->


<script>
import NavImmediate from '@/components/NavImmediate'
import Transaction from '@/components/Transaction.vue'

export default {
  name: 'immediate',
  components: {
    NavImmediate,
    Transaction
  },
  data() {
      return{
          transactions: [
              {id: 1, address: '1231i2nd23in43if', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-09T12:00:00-06:30'},
              {id: 2, address: '134jfni348f44523', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-06:30'},
              {id: 3, address: '158jgj58jj85449j', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-09T12:00:00-06:30'}
          ],
          transactionView: false,
      }
  },
    methods: {
      transactionDetail(){
          console.log(`transaction ${this.transactions.id} clicked`)
          this.transactionView = true
      },
      closeOut(){
          console.log('detail window closed')
          this.transactionView = false
      },
  },
}
</script>

<style scoped>
.dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width:100%;
}
h1{
  margin-top: 50px;
  padding:10px;
  font-weight:600;
  font-size:21px;
  line-height: 25px;
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
.fiat_currency{
    color: #777777;
}

</style>