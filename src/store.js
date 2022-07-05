import { createStore } from 'vuex'

export default createStore({
    // state: {
    //  id:null, description:null, address:null, amount:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null
    // },
        state: {
     id:100, description:12, address:9, amount:7234, fiat_currency:3423, datetime:765, fee:86576, customFee:343, status: 754464
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
        }
    }
})

