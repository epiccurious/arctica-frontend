import { createStore } from 'vuex'

export default createStore({
    //these are currently hardcoded to make testing easier but should eventually all be undefined, null or empty and obtained dynmically from backend
    state: {
    //current SD card
    sdOne: false, sdTwo: false, sdThree: false, sdFour: false, sdFive: false, sdSix: false, sdSeven: false,

    setupCD: false, 
    //set up variables 
    setup1: false, //file placed on SD 1 at step 4 to jump user to step 12
    setup2: false, //file placed on SD 2 at step 5 to jump user to step 14
    setup3: false, //file placed on SD 3 at step 6 to jump user to step 15
    setup4: false, //file placed on SD 4 at step 7 to jump user to step 16
    setup5: false, //file placed on SD 5 at step 8 to jump user to step 17
    setup6: false, //file placed on SD 6 at step 9 to jump user to step 19
    setup7: false, //file placed on SD 7 at step 10 to jump user to step 20
    setup8: false, //file placed on SD 1 at step 12 to jump user to step 21
    setup9: false, //file placed on SD 2 at step 14 to jump user to step 27a
    setup10: false, //file placed on SD 3 at step 15 to jump user to step 31a
    setup11: false, //file placed on SD 4 at step 17 to jump user to step 35a
    setup12: false, //file placed on SD 5 at step 18 to jump user to step 39a
    setup13: false, //file placed on SD 6 at step 19 to jump user to step 43a
    setup14: false, //file placed on SD 7 at step 20 to jump user to step 47a
    setup15: false, //file placed on SD 1 at step 21 to jump user to step 50b...returns user to blockchain sync

    
    primaryMachine: true, //eventually anytime this primary machine boolean is false networking on the device should be turned off...maybe backend job only?

    //post set up complete
    tripwireSetup: true, recoverySetup: true, duressSetup: true,
    //bootup checking for special conditions and allowing for login
    psbtFound:false, psbt:null, btcCoreHealthy:true, bpsHealthy:true, tripwireTripped:'none', timeMachineKeysFound:false, privacyKeysFound:false,

    bpsBricked: false,
    manualDecrypt: false,
    //data for creating a new Transaction
    id:null, description:null, address:null, balance:null, fiat_currency:null, datetime:null, fee:null, customFee:null, status: null, 

    //multioutput logic, for testing, may remove
    // psbtArr: [],

    //existing transaction history, placeholder hardcodes
      immediateTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000987, status: 'Confirmed', description: ''},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed', description: ''},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed', description: ''}
    ],
      hotTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01', fee: 0.00000987, status: 'Confirmed', description: ''},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed', description: ''},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed', description: ''}
    ],
    delayedTransactions: [
        {id: 1, address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', balance: 21736, fiat_currency: 12.75, datetime: '2022-06-07T12:00:00-11:01' , fee: 0.00000987, status: 'Confirmed', description: ''},
        {id: 2, address: 'bc1qu7cr0hyc4xfnk3fh0cdce43fnzfwdtq5a089vs', balance: 29345, fiat_currency: 15.28, datetime: '2022-06-09T12:00:00-09:30', fee: 0.00001247, status: 'Confirmed', description: ''},
        {id: 3, address: 'bc1prd9haet4clzacme9gnpgxknj04480xemzh2wt3', balance: 101866, fiat_currency: 60.21, datetime: '2022-06-10T12:00:00-04:10', fee: 0.00000408, status: 'Unconfirmed', description: ''}
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
        setTxBalance(state,payload){
            state.balance = payload
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
            state.balance = null
            state.fiat_currency = null
            state.datetime = null
            state.fee = null
            state.customFee = null
            state.status = null
        },
        //below is for testing, may remove
        // pushPSBTArr(state, payload){
        //      psbtArr.push(payload)
        // },
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
        setPSBT(state, payload){
            state.psbt = payload
        },
        setBTCCoreHealthy(state, payload){
            state.btcCoreHealthy = payload
        },
        setBPSHealthy(state, payload){
            state.bpsHealthy = payload
        },
        setTripwireTripped(state, payload){
            state.tripwireTripped = payload
        },
        setTimeMachineKeysFound(state, payload){
            state.timeMachineKeysFound = payload
        },
        setPrivacyKeysFound(state, payload){
            state.privacyKeysFound = payload
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
        },
        setBPSBricked(state, payload){
            state.bpsBricked = payload
        },
        setManualDecrypt(state, payload){
            state.manualDecrypt = payload
        },
        setTripwireSetup(state, payload){
            state.tripwireSetup = payload
            if(payload === false){
                state.tripwireTripped = 'none'
            }
        },
        setRecoverySetup(state, payload){
            state.recoverySetup = payload
        },
        setDuressSetup(state, payload){
            state.duressSetup = payload
        },
        setSetupCD(state, payload){
            state.setupCD = payload
        },
        setPrimaryMachine(state, payload){
            state.primaryMachine = payload
        },
        setSetup1(state,payload){
            state.setup1 = payload
        },
        setSetup2(state,payload){
            state.setup2 = payload
        },
        setSetup3(state,payload){
            state.setup3 = payload
        },
        setSetup4(state,payload){
            state.setup4 = payload
        },
        setSetup5(state,payload){
            state.setup5 = payload
        },
        setSetup6(state,payload){
            state.setup6 = payload
        },
        setSetup7(state,payload){
            state.setup7 = payload
        },
        setSetup8(state,payload){
            state.setup8 = payload
        },
        setSetup9(state,payload){
            state.setup9 = payload
        },
        setSetup10(state,payload){
            state.setup10 = payload
        },
        setSetup11(state,payload){
            state.setup11 = payload
        },
        setSetup12(state,payload){
            state.setup12 = payload
        },
        setSetup13(state,payload){
            state.setup13 = payload
        },
        setSetup14(state,payload){
            state.setup14 = payload
        },
        setSetup15(state,payload){
            state.setup15 = payload
        },
    },
    actions:{//asynchronous, used for external API calls (dispatch)
    },
    modules:{},
    getters:{ //get data from state, allows for changing/filtering
        getTransaction(state){
          let  transaction = {id:state.id, description:state.description, address:state.address, balance:state.balance, fiat_currency:state.fiat_currency, datetime:state.datetime, fee:state.fee, customFee:state.customFee, status:state.status}
            return (transaction)
        },
        getTxBalance(state){
            return state.balance
        },
        //below is for testing, may remove
        // getPSBTArr(state){
        //     return state.psbtArr
        // },
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
        getPSBT(state){
            return state.psbt
        },
        getBTCCoreHealthy(state){
            return state.btcCoreHealthy
        },
        getBPSHealthy(state){
            return state.bpsHealthy
        },
        getTripwireTripped(state){
            return state.tripwireTripped
        },
        getTimeMachineKeysFound(state){
            return state.timeMachineKeysFound
        },
        getPrivacyKeysFound(state){
            return state.privacyKeysFound
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
        },
        getBPSBricked(state){
            return state.bpsBricked
        },
        getManualDecrypt(state){
            return state.manualDecrypt
        },
        getTripwireSetup(state){
            return state.tripwireSetup
        },
        getRecoverySetup(state){
            return state.recoverySetup
        },
        getDuressSetup(state){
            return state.duressSetup
        },
        getSetupCD(state){
            return state.setupCD
        },
        getPrimaryMachine(state){
            return state.primaryMachine
        },
        getSetup1(state){
            return state.setup1
        },
        getSetup2(state){
            return state.setup2
        },
        getSetup3(state){
            return state.setup3
        },
        getSetup4(state){
            return state.setup4
        },
        getSetup5(state){
            return state.setup5
        },
        getSetup6(state){
            return state.setup6
        },
        getSetup7(state){
            return state.setup7
        },
        getSetup8(state){
            return state.setup8
        },
        getSetup9(state){
            return state.setup9
        },
        getSetup10(state){
            return state.setup10
        },
        getSetup11(state){
            return state.setup11
        },
        getSetup12(state){
            return state.setup12
        },
        getSetup13(state){
            return state.setup13
        },
        getSetup14(state){
            return state.setup14
        },
        getSetup15(state){
            return state.setup15
        },



    }
})

