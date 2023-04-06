import { createStore } from 'vuex'

export default createStore({
    //some of these are currently hardcoded for testing, but should eventually all be undefined, false, null or empty and obtained dynmically from backend
    state: {
    currentSD: 0,
    //a current sd of 0 designates no inserted valid card

    setupCD: false,
    //setupStep variables 
    // setupStep 1 placed on SD 1 at step 4 to jump user to step 12 
    // setupStep 2 placed on SD 2 at step 5 to jump user to step 14 
    // setupStep 3 placed on SD 3 at step 6 to jump user to step 15 
    // setupStep 4 placed on SD 4 at step 7 to jump user to step 16 
    // setupStep 5 placed on SD 5 at step 8 to jump user to step 17 
    // setupStep 6 placed on SD 6 at step 9 to jump user to step 19 
    // setupStep 7 placed on SD 7 at step 10 to jump user to step 20
    // setupStep 8 placed on SD 1 at step 12 to jump user to step 21 
    // setupStep 9 placed on SD 2 at step 14 to jump user to step 27a, last sd 2, setupStep set to 0 at step 29
    // setupStep 10 placed on SD 3 at step 15 to jump user to step 31a last sd 3, setupStep set to 0 at step 33 
    // setupStep 11 placed on SD 4 at step 17 to jump user to step 35a last sd 4, setupStep set to 0 at step 37 
    // setupStep 12 placed on SD 5 at step 18 to jump user to step 39a last sd 5, setupStep set to 0 at step 41 
    // setupStep 13 placed on SD 6 at step 19 to jump user to step 43a last sd 6, setupStep set to 0 at step 45 
    // setupStep 14 placed on SD 7 at step 20 to jump user to step 47a last sd 7, setupStep set to 0 at step 49a 
    // setupStep 15 placed on SD 1 at step 25 to jump user to step 50b last sd 1, setupStep set to 0 at step 50b 
    setupStep: 0,

    debug: [],

    loadMessage: '',
    errorMessage: '',
    internalDiskMounted: false,
    
    
    //post set up complete
    tripwireSetup: true, recoverySetup: true, duressSetup: true,
    //bootup checking for special conditions and allowing for login
    btcCoreHealthy:true, bpsHealthy:true, tripwireTripped:'none', timeMachineKeysFound:false, privacyKeysFound:false,

    bpsBricked: false,
    decrypted: false,
    //numberToRecover should eventually dynamically decay as privacy keys are published to the blockchain
    numberToRecover: 5,
    
    //data for creating a new Transaction
    address:[], balance:[], fiat_currency:null, datetime:null, fee:null, customFee:null, status: null, 


    //existing transaction history, placeholder hardcodes initiatilize as empty after backend hookup
      immediateTransactions: [],
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
    quickBalance: null,
    hotBalance: null,
    immediateBalance: 0,
    delayedBalance: 0,

    //delayed wallet timelocked
    timeLock: true
    },
    mutations:{//synchronous, alters data in state (commit)
        setDebug(state, value){
            state.debug.push(value)
        },
        setLoadMessage(state, payload){
            state.loadMessage = payload
        },
        setErrorMessage(state, payload){
            state.errorMessage = payload
        },
        setInternalDiskMounted(state, payload){
            state.internalDiskMounted = payload
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
        setCurrentSD(state, payload){
            state.currentSD = payload
        },
        setBPSBricked(state, payload){
            state.bpsBricked = payload
        },
        setDecrypted(state, payload){
            state.decrypted = payload
        },
        setNumberToRecover(state, payload){
            state.numberToRecover = payload
            if(payload === 5){
                state.privacyKeysFound = false
            }
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
        setSetupStep(state, payload){
            state.setupStep = payload
        },
    },
    actions:{//asynchronous, used for external API calls (dispatch)
    },
    modules:{},
    getters:{ //get data from state, allows for changing/filtering
        getDebug(state){
            return state.debug
        },
        getLoadMessage(state){
            return state.loadMessage
        },
        getErrorMessage(state){
            return state.errorMessage
        },
        getInternalDiskMounted(state){
            return state.internalDiskMounted
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
        getCurrentSD(state){
           return state.currentSD
        },
        getBPSBricked(state){
            return state.bpsBricked
        },
        getDecrypted(state){
            return state.decrypted
        },
        getNumberToRecover(state){
            return state.numberToRecover
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
        getSetupStep(state){
            return state.setupStep
        },



    }
})

