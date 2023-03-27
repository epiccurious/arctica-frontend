<template>
<div class="page">
    <NavImmediate />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transaction History</h1>
        </div>
        <div v-if="txHistory == false">
        <h2>You don't have any transactions yet.</h2></div>
        <div v-else @click="transactionDetail(transaction.info.txid)" v-for="transaction in this.immediateTransactions" :key="transaction.info.blockhash ? transaction.info.blockhash: index" class="transaction_container">
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
  data(){
    return{
      txHistory: true,
    }
  },
  mounted(){
    console.log("invoking get_transactions")
    invoke('get_transactions', {wallet: "immediate", sdcard: this.sdCard.toString()}).then((res)=>{
                console.log(`result: ${res}`)
                  let parsed = JSON.parse(res)
                  console.log(`parsed: ${parsed}`)
                  store.commit('setDebug', `obtaining transaction history JSON for immediate wallet: ${parsed}`)
                  store.commit('setImmediateTransactions', `${parsed}`)

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