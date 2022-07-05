import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        transaction: {id:null, description:null, address:null, amount:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null}
    },
    mutations:{
        setTransaction(state, payload){
            state.transaction = payload;
        },
        clearTransaction(state){
            state.transaction = {id:null, description:null, address:null, amount:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null}
        }
    },
    actions:{},
    modules:{},
    getters:{
        getTransaction(state){
            return state.transaction
        }
    }
})

