import { createStore } from 'vuex'

export default createStore({
    state: {
    //current SD card
    sdOne: true, sdTwo: false, sdThree: false, sdFour: false, sdFive: false, sdSix: false, sdSeven: false,

    //post setup complete

    //bootup checking for special conditions and allowing for login
    psbtFound:null, btcCoreHealthy:null, bpsHealthy:null, tripwireHealthy:true, timeMachineKeysFound:null, privacyKeysFound:null,
    //data for creating a new Transaction
    id:null, description:null, address:null, amount:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null, 
    //existing transaction history, placeholder hardcodes
      immediateTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000987, status: 'Confirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed'}
    ],
      hotTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000987, status: 'Confirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed'}
    ],
    delayedTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01' , fee: 0.00000987, status: 'Confirmed'},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed'},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed'}
    ],
    //various wallet balances
    quickBalance: 0.000052,
    hotBalance: 0.12759374,
    immediateBalance: 0.27847143,
    delayedBalance: 12.05312325,

    //current address for receiving
    hotAddress: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky',
    immediateAddress: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky',
    delayedAddress: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky',

    //delayed wallet timelocked
    timeLock: true
    },
    mutations:{//synchronous, alters data in state (commit)
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
        },
        setHotTransactions(state, payload){
            state.hotTransactions = payload
        },
        setImmediateTransactions(state, payload){
            state.immediateTransactions = payload
        },
        pushImmediateTransaction(state, payload){
            state.immediateTransactions.push(payload)
        },
        pushHotTransaction(state, payload){
            state.hotTransactions.push(payload)
        },
        pushDelayedTransaction(state, payload){
            state.delayedTransactions.push(payload)
        },
        setDelayedTransactions(state, payload){
            state.delayedTransactions = payload
        },
        setHotBalance(state, payload){
            state.hotBalance = payload
        },
        setImmediateBalance(state, payload){
            state.immediateBalance = payload
        },
        setquickBalance(state, payload){
            state.quickBalance = payload
        },
        setDelayedBalance(state, payload){
            state.delayedBalance = payload
        },
        setPSBTFound(state, payload){
            state.psbtFound = payload
        },
        setBTCCoreHealthy(state, payload){
            state.btcCoreHealthy = payload
        },
        setBPSHealthy(state, payload){
            state.bpsHealthy = payload
        },
        setTripwireHealthy(state, payload){
            state.tripwireHealthy = payload
        },
        setTimeMachineKeysFound(state, payload){
            state.timeMachineKeyFound = payload
        },
        setPrivacyKeysFound(state, payload){
            state.privacyKeyFound = payload
        },
        setTimeLock(state, payload){
            state.timeLock = payload
        },
        setDelayedAddress(state, payload){
            state.delayedAddress = payload
        },
        setImmediateAddress(state, payload){
            state.immediateAddress = payload
        },
        setHotAddress(state, payload){
            state.hotAddress = payload
        },
        setCurrentSD(state, payload){
            if(payload == 'one'){
                state.sdOne = true
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = false
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = false
            }
            else if(payload == 'two'){
                state.sdOne = false
                state.sdTwo = true
                state.sdThree = false
                state.sdFour = false
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = false
            }
            else if(payload == 'three'){
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = true
                state.sdFour = false
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = false
            }
            else if(payload == 'four'){
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = true
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = false
            }
            else if(payload == 'five'){
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = false
                state.sdFive = true
                state.sdSix = false
                state.sdSeven = false
            }
            else if(payload == 'six'){
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = false
                state.sdFive = false
                state.sdSix = true
                state.sdSeven = false
            }
            else if(payload == 'seven'){
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = false
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = true
            }
            else{
                state.sdOne = false
                state.sdTwo = false
                state.sdThree = false
                state.sdFour = false
                state.sdFive = false
                state.sdSix = false
                state.sdSeven = false
            }
        }
    },
    actions:{//asynchronous, used for external API calls (dispatch)
    },
    modules:{},
    getters:{ //get data from state, allows for changing/filtering
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
        getHotBalance(state){
            return state.hotBalance
        },
        getImmediateBalance(state){
            return state.immediateBalance
        },
        getquickBalance(state){
            return state.quickBalance
        },
        getDelayedBalance(state){
            return state.delayedBalance
        },
        getPSBTFound(state){
            return state.psbtFound
        },
        getBTCCoreHealthy(state){
            return state.btcCoreHealthy
        },
        getBPSHealthy(state){
            return state.bpsHealthy
        },
        getTripwireHealthy(state){
            return state.tripwireHealthy
        },
        getTimeMachineKeysFound(state){
            return state.timeMachineKeyFound
        },
        getPrivacyKeysFound(state){
            return state.privacyKeyFound
        },
        getTimeLock(state){
            return state.timeLock
        },
        getDelayedAddress(state){
            return state.delayedAddress
        },
        getImmediateAddress(state){
            return state.immediateAddress
        },
        getHotAddress(state){
            return state.hotAddress
        },
        getCurrentSD(state){
            if(state.sdOne == true){
                return 'one'
            }
            else if(state.sdTwo == true){
                return 'two'
            }
            else if(state.sdThree == true){
                return 'three'
            }
            else if(state.sdFour == true){
                return 'four'
            }
            else if(state.sdFive == true){
                return 'five'
            }
            else if(state.sdSix == true){
                return 'six'
            }
            else if(state.sdSeven == true){
                return 'seven'
            }
            else{
                return 'none'
            }
        }




    }
})

