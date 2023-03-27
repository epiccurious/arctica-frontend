<template>
<div class="page">
    <NavImmediate />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transaction History</h1>
        </div>
        <div @click="transactionDetail(transaction.info.txid)" v-for="transaction in this.immediateTransactions" :key="transaction.info.time" class="transaction_container">
          <div class="transaction_container_left">
          <h2>{{ truncateString(transaction.detail.address) }}</h2>
          <h3>{{ transaction.info.time }}</h3>
          </div>
          <div class="transaction_container_right">
            <h2 class="balance">₿ {{ transaction.info.amount }} BTC</h2>
            <h3 class="fiat_currency"> $ 0.00</h3>
          </div>
        </div>
      </div>
</div>
</template>

<!-- Need search and filter component -->


<script>
import NavImmediate from '@/components/NavImmediate'
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'immediate',
  components: {
    NavImmediate,
  },
    methods: {
      transactionDetail(transactionId){
        this.$router.push({ path: `/wallets/immediate/${transactionId}` })

      },
  },
    computed:{
    truncateString(){
      return (str)=>{
        return str.slice(0,18) + '...'
      }
      },
      immediateTransactions:{ 
        get(){
          return store.getters.getImmediateTransactions
        }
        },
        sdCard:{
            get(){
                return store.getters.getCurrentSD
            },

        },
  },
  mounted(){
    invoke('get_transactions', {wallet: "immediate", sdcard: this.sdCard.toString()}).then((res)=>{
                //modify the json to remove the ListTransactionResult identifier
                // let modified = res.replace(/ListTransactionResult/g, '')
                console.log(`result: ${res}`)
                store.commit('setDebug', `obtaining transaction history JSON for immediate wallet: ${res}`)
                // let arr = JSON.parse(modified)
                // console.log(`arr ${arr}`)
                // console.log(`time from tx index 0 ${arr[0].info.time}`)
                store.commit('setImmediateTransactions', `${res}`)
            })
            .catch((e)=>{
                store.commit('setDebug', `error obtaining transactions for immediate wallet: ${e}`)
            })

  },
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