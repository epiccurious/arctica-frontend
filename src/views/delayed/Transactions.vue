<template>
<div class="page">
    <NavDelayed />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transaction History</h1>
        </div>
        <div @click="transactionDetail(transaction.id)" v-for="transaction in delayedTransactions.slice().reverse()" :key="transaction.id" class="transaction_container">
          <div class="transaction_container_left">
          <h2>{{ truncateString(transaction.address) }}</h2>
          <h3>{{ transaction.datetime }}</h3>
          </div>
          <div class="transaction_container_right">
            <h2 class="balance">- ₿ {{ transaction.balance.toLocaleString('en-US') }} sats</h2>
            <h3 class="fiat_currency">- $ {{ transaction.fiat_currency.toLocaleString('en-US') }}</h3>
          </div>
        </div>
      </div>
</div>
</template>

<!-- Need search and filter component -->


<script>
import NavDelayed from '@/components/NavDelayed'
import store from '../../store.js'

export default {
  name: 'delayed',
  components: {
    NavDelayed,
  },
    methods: {
      transactionDetail(transactionId){
        this.$router.push({ path: `/wallets/delayed/${transactionId}` })

      },
  },
    computed:{
    truncateString(){
      return (str)=>{
        return str.slice(0,18) + '...'
      }
      },
      delayedTransactions(){ 
        return store.getters.getDelayedTransactions
        }
  }
}
</script>

<style scoped>
h2{
  color:#000000;
}
h3{
  font-family: 'Inter';
  color: #777777;
}
</style>