import { createStore } from 'vuex'

export default createStore({
    state: {
    //data for creating a new Transaction
     id:null, description:null, address:null, amount:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null,
    //fetching existing transactions, placeholder hardcodes
      immediateTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-10T12:00:00-04:10' , fee: 0.00000987, status: 'Unconfirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs3pp7d0hhxesvwq88ecfp', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3gkd5ut920tw7mq2j9ldh', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000408, status: 'Confirmed'}
    ],
      hotTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-10T12:00:00-04:10' , fee: 0.00000987, status: 'Unconfirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs3pp7d0hhxesvwq88ecfp', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3gkd5ut920tw7mq2j9ldh', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000408, status: 'Confirmed'}
    ],
    delayedTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-10T12:00:00-04:10' , fee: 0.00000987, status: 'Unconfirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs3pp7d0hhxesvwq88ecfp', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3gkd5ut920tw7mq2j9ldh', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000408, status: 'Confirmed'}
    ],
    },
    mutations:{//synchronous
        setTxId(state, payload){
            state.id = payload;
        },
        setTxDescription(state, payload){
            state.description = payload
        },
        setTxAddress(state, payload){
            state.address = payload
        },
        setTxAmount(state,payload){
            state.amount = payload
        },
        setTxFiat(state,payload){
            state.fiat_currency = payload
        },
        setTxDateTime(state, payload){
            state.datetime = payload
        },
        setTxFee(state, payload){
            state.fee = payload
        },
        setTxCustomFee(state, payload){
            state.customFee = payload
        },
        setTxStatus(state, payload){
            state.status = payload
        },
        clearTransaction(state){
            state.id = null
            state.description = null
            state.address = null
            state.amount = null
            state.fiat_currency = null
            state.datetime = null
            state.fee = null
            state.customFee = null
            state.status = null
        }
    },
    actions:{//asynchronous
    },
    modules:{},
    getters:{
        getTransaction(state){
          let  transaction = {id:state.id, description:state.description, address:state.address, amount:state.amount, fiat_currency:state.fiat_currency, datetime:state.datetime, fee:state.fee, customFee:state.customFee, status:state.status}
            return (transaction)
        },
        getHotTransactions(state){
            return state.hotTransactions
        },
        getImmediateTransactions(state){
            return state.immediateTransactions
        },
        getDelayedTransactions(state){
            return state.delayedTransactions
        },

    }
})

