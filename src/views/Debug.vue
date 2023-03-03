<template>
<div class="page">
    <header>
        <h1>Debug Console:</h1>
    </header>
        <h2 v-for="item in this.debug" :key="item">{{item}}</h2>
    <div class="btn_container"> 
        <h2>Current Route: {{this.$route.name}}</h2>
        <button @click="reboot()" class="btn">Reboot</button>

        <label>SD inserted</label>
        <select v-model="sdCard" name="sdCard" id="sdCard">
            <option @click="setSD()" value= 0>None</option>
            <option @click="setSD()" value= 1>One</option>
            <option @click="setSD()" value= 2>Two</option>
            <option @click="setSD()" value= 3>Three</option>
            <option @click="setSD()" value= 4>Four</option>
            <option @click="setSD()" value= 5>Five</option>
            <option @click="setSD()" value= 6>Six</option>
            <option @click="setSD()" value= 7>Seven</option>
        </select>

        <h2>setup Step Loaded: {{this.setupStep}}</h2>

        <div class="switch">
            BPS Connection Healthy
            <label class="toggle_switch_label">
                <input v-if="this.bpsHealthy == true" v-model="bpsHealthy" @click="bpsHealthyToggle()" type="checkbox" checked>
                <input v-else-if="this.bpsHealthy == false" v-model="bpsHealthy" @click="bpsHealthyToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            BPS Bricked
            <label class="toggle_switch_label">
                <input v-if="this.bpsBricked == true" v-model="bpsBricked" @click="bpsBrickedToggle()" type="checkbox" checked>
                <input v-else-if="this.bpsBricked == false" v-model="bpsBricked" @click="bpsBrickedToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Published Privacy Keys Found
            <label class="toggle_switch_label">
                <input v-if="this.privacyKeysFound == true" v-model="privacyKeysFound" @click="privacyKeysFoundToggle()" type="checkbox" checked>
                <input v-else-if="this.privacyKeysFound == false" v-model="privacyKeysFound" @click="privacyKeysFoundToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <label>Number to Recover</label>
        <select v-model="numberToRecover" name="numberToRecover" id="numberToRecover">
            <option @click="setNumberToRecover()" value=0>Zero</option>
            <option @click="setNumberToRecover()" value=1>One</option>
            <option @click="setNumberToRecover()" value=2>Two</option>
            <option @click="setNumberToRecover()" value=3>Three</option>
            <option @click="setNumberToRecover()" value=4>Four</option>
            <option @click="setNumberToRecover()" value=5>Five</option>
        </select>

        <div class="switch">
            Published Time Machine Keys Found
            <label class="toggle_switch_label">
                <input v-if="this.timeMachineKeysFound == true" v-model="timeMachineKeysFound" @click="timeMachineKeysFoundToggle()" type="checkbox" checked>
                <input v-else-if="this.timeMachineKeysFound == false" v-model="timeMachineKeysFound" @click="timeMachineKeysFoundToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Delayed Wallet Timelocked
            <label class="toggle_switch_label">
                <input v-if="this.timelock == true" v-model="timelock" @click="timeLockToggle()" type="checkbox" checked>
                <input v-else-if="this.timelock == false" v-model="timelock" @click="timeLockToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>        

        <label>Tripped Tripwire</label>
        <select v-model="tripwire" name="tripwire" id="tripwire">
            <option @click="setTripwire()" value="none">None</option>
            <option @click="setTripwire()" value="one">One</option>
            <option @click="setTripwire()" value="two">Two</option>
            <option @click="setTripwire()" value="three">Three</option>
            <option @click="setTripwire()" value="four">Four</option>
            <option @click="setTripwire()" value="five">Five</option>
            <option @click="setTripwire()" value="six">Six</option>
            <option @click="setTripwire()" value="seven">Seven</option>
        </select>

        <div class="switch">
            Post Set up Tripwire Completed
            <label class="toggle_switch_label">
                <input v-if="this.tripwireSetup == true" v-model="tripwireSetup" @click="tripWireSetupToggle()" type="checkbox" checked>
                <input v-else-if="this.tripwireSetup == false" v-model="tripwireSetup" @click="tripWireSetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

         <div class="switch">
            Post Set up PII Folder Completed
            <label class="toggle_switch_label">
                <input v-if="this.recoverySetup == true" v-model="recoverySetup" @click="recoverySetupToggle()" type="checkbox" checked>
                <input v-else-if="this.recoverySetup == false" v-model="recoverySetup" @click="recoverySetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Post Set up Duress Password Completed
            <label class="toggle_switch_label">
                <input v-if="this.duressSetup == true" v-model="duressSetup" @click="duressSetupToggle()" type="checkbox" checked>
                <input v-else-if="this.duressSetup == false" v-model="duressSetup" @click="duressSetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <!-- this button seems kind of useless, may remove. The only way for us to discern if this variable should be true or false in a real world scenario
         would be to create a file on the users machine. Potential side effects in certain edge cases where a user tries to boot from SD 1 on a machine
        they did not use to complete set up. Perhaps better to assume we never know for sure if the user has set up already or not and always present 
        them with the option, unless they have booted from SD 1-7 in which case this below variable and debug toggle switch will not be necessary. -->
        <div class="switch">
            Initial Set up Complete (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

    
    <button @click="createDescriptors()" class="btn">Create Descriptors</button>
    <br>
    <button @click="generateKeys()" class="btn">Gen Keys</button>
    <br> 
    <button @click="spendPolicy()" class="btn">Spend Policy</button>
    <br> 
    <button @click="getTransctionHistory()" class="btn">Transaction History</button>
    <br> 
    <button @click="getDescriptorInfo()" class="btn">Descriptor Info</button>
    <br>
    <button @click="createWallet()" class="btn">Create Wallet</button>
    <br>
    <button @click="importDescriptors()" class="btn">Import Descriptors</button>
    <br>
    <button @click="getBalance()" class="btn">Get Balance</button>

    </div> 
</div>
</template>

<script>
import store from '../store.js'
const invoke = window.__TAURI__.invoke

export default{
    name: 'Debug',

    methods:{
        timeLockToggle(){
            if(this.timelock === false){
                store.commit('setTimeLock', true)
                store.commit('setTimeMachineKeysFound', false)
            }
            else{
                store.commit('setTimeLock', false)
            }
        },
        setTripwire(){
            store.commit('setTripwireTripped', this.tripwire)
            this.tripwire = store.getters.getTripwireTripped
        },
        bpsBrickedToggle(){
            if(this.bpsBricked == false){
                store.commit('setBPSBricked', true)
            } else{
                store.commit('setBPSBricked', false)
            }
            },

            //this function automatically sets timelock to false, assuming that time machine keys have ben found, time lock should be disabled automatically
        timeMachineKeysFoundToggle(){
            if(this.timeMachineKeysFound == false){
                store.commit('setTimeMachineKeysFound', true)
                store.commit('setTimeLock', false)
            } else{
                store.commit('setTimeMachineKeysFound', false)
            }
            },

        privacyKeysFoundToggle(){
            if(this.privacyKeysFound == false){
                store.commit('setPrivacyKeysFound', true)
                store.commit('setDecrypted',true)
            } else{
                store.commit('setPrivacyKeysFound', false)
                store.commit('setDecrypted', false)
            }
            },
        
        tripWireSetupToggle(){
                if(this.tripwireSetup == false){
                store.commit('setTripwireSetup', true)
            } else{
                store.commit('setTripwireSetup', false)
            }
        },
        recoverySetupToggle(){
                if(this.recoverySetup == false){
                store.commit('setRecoverySetup', true)
            } else{
                store.commit('setRecoverySetup', false)
            }
        },
        duressSetupToggle(){
                if(this.duressSetup == false){
                store.commit('setDuressSetup', true)
            } else{
                store.commit('setDuressSetup', false)
            }
        },
        btcCoreHealthyToggle(){
                if(this.btcCoreHealthy == false){
                store.commit('setBTCCoreHealthy', true)
            } else{
                store.commit('setBTCCoreHealthy', false)
            }
        },
        bpsHealthyToggle(){
                if(this.bpsHealthy == false){
                store.commit('setBPSHealthy', true)
            } else{
                store.commit('setBPSHealthy', false)
            }
        },   
        getDescriptorInfo(){
        //this is a debug function used to get the descriptor check summed analysis
            invoke('get_descriptor_info', {wallet: "immediate"}).then((res)=>{
                store.commit('setDebug', `descriptor info: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error getting descriptor info ${e}`)
            })
        },
        getTransctionHistory(){
            //this is a debug function used to print the immediate wallet transaction history vec
            invoke('get_transactions_med_wallet').then((res)=>{
                store.commit('setDebug', `obtaining transaction history for immediate wallet: ${res}`)
            })
            .catch((e)=>{
                store.commit('setDebug', `error obtaining transactions for immediate wallet: ${e}`)
            })
        },
        createWallet(){
            //this is a debug function used to create a blank watch only immediate wallet
            invoke('create_wallet', {wallet: "immediate"}).then((res)=>{
                store.commit('setDebug', `creating blank watch only immediate wallet ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error creating blank watch only wallet: ${e}`)
            })
        },
        importDescriptors(){
            //this is a debug function used to import immediate wallet descriptor
            invoke('import_descriptor', {wallet: "immediate"}).then((res)=>{
                store.commit('setDebug', `import immediate wallet descriptor into blank wallet: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error importing immediate wallet descriptor: ${e}`)
            })
        },
        getBalance(){
            //this is a debug function used to get the balance of the immediate wallet
            invoke('get_balance', {wallet: "immediate"}).then((res)=>{
                store.commit('setDebug', `getting balance for immediate wallet: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error getting balance for immediate wallet: ${e}`)
            })
        },
        spendPolicy(){
            //this is a debug function used to print the keychain policy 
        invoke('test_function').then((res)=>{
            store.commit('setDebug', `obtaining spend policy: ${res}`)
        })
        .catch((e)=>{
        store.commit('setDebug', `error obtaining spend policy: ${e}`)
        })

    },
    packup(){
        //this is a debug function which packs up the sensitive dir into an encrypted tarball
        invoke('packup').then((res)=>{
            store.commit('setDebug', `invoking packup: ${res}`)
        })
        .catch((e)=>{
            store.commit('setDebug', `error invoking packup${e}`)
        })
    },
        generateKeys(){
            //this is a debug function used to create keys 2-7 on SD 1
        invoke('generate_store_key_pair', {number: this.keynumber.toString()}).then((res)=>{
            store.commit('setDebug', `invoking generate store keypair: ${res}`)
            store.commit('setDebug', `generating key: ${this.keynumber-1}`)
                    })
        .catch((e)=>{
        store.commit('setDebug', `error invoking test function: ${e}`)
        })

        this.keynumber++
        },
        createDescriptors(){
            //this is a debug function used to create descriptors when testing locally instead of on an SD card
            //start bitcoind
            invoke('start_bitcoind_network_off').then((res) => {
                store.commit('setDebug', `starting bitcoin daemon with networking off: ${res}`)
                //create ramdisk
                invoke('create_ramdisk').then((res) => {
                    store.commit('setDebug', `creating ramdisk ${res}`)
                    store.commit('setLoadMessage', 'Creating ramdisk...')
                    //copy CD contents to ramdisk
                    invoke('copy_cd_to_ramdisk').then((res) => {
                        store.commit('setDebug', `reading setup CD ${res}`)
                        store.commit('setLoadMessage', 'Creating Descriptors...')
                        //create the descriptors and export to the setupCD
                        invoke('create_descriptor').then((res) => {
                            store.commit('setDebug', `creating descriptors ${res}`)
                        }).catch((e) => {
                                store.commit('setDebug', `error creating descriptors: ${e}`)
                        })
                    }).catch((e) => {
                        store.commit('setDebug', `error reading setup CD: ${e}`)
                    }) 
                }).catch((e) => {
                        store.commit('setDebug', `error creating ramdisk: ${e}`)
                }) 
            }).catch((e) => {
                    store.commit('setDebug', `error starting bitcoin core: ${e}`)
            }) 
        },
        reboot(){
            this.$router.push({ name: 'welcome' })
        },
        setSD(){
            store.commit('setCurrentSD', this.sdCard)
        },
        setNumberToRecover(){
            store.commit('setNumberToRecover', this.numberToRecover)
        },

    },
    //this is for testing with testPrint()
    data(){
        return{
            keynumber: 1
        }
    },
    computed:{
        debug(){
            return store.getters.getDebug
        },
        setupStep(){
            return store.getters.getSetupStep
        },
        timelock:{
            get(){
                return store.getters.getTimeLock
            },
            set(newVal){
                store.commit('setTimeLock', newVal)
            }
        },
        tripwire:{
            get(){
                return store.getters.getTripwireTripped
            },
            set(newVal){
                store.commit('setTripwireTripped', newVal)
            }
        },
        sdCard:{
            get(){
                return store.getters.getCurrentSD
            },
            set(newVal){
                store.commit('setCurrentSD', newVal)
            }
        },
        numberToRecover:{
            get(){
                return store.getters.getNumberToRecover
            },
            set(newVal){
                store.commit('setNumberToRecover', newVal)
            }
        },
        bpsBricked:{
            get(){
                return store.getters.getBPSBricked
            },
            set(newVal){
                store.commit('setBPSBricked', newVal)
            }
        },
        timeMachineKeysFound:{
            get(){
                return store.getters.getTimeMachineKeysFound
            },
            set(newVal){
                store.commit('setTimeMachineKeysFound', newVal)
            }
        },
        privacyKeysFound:{
            get(){
                return store.getters.getPrivacyKeysFound
            },
            set(newVal){
                store.commit('setPrivacyKeysFound', newVal)
            }   
        },
        tripwireSetup:{
            get(){
                return store.getters.getTripwireSetup
            },
            set(newVal){
                store.commit('setTripwireSetup', newVal)
            }
        },
        recoverySetup:{
            get(){
                return store.getters.getRecoverySetup
            },
            set(newVal){
                store.commit('setRecoverySetup', newVal)
            }
        },
        duressSetup:{
            get(){
                return store.getters.getDuressSetup
            },
            set(newVal){
                store.commit('setDuressSetup', newVal)
            }
        },
        bpsHealthy:{
            get(){
                return store.getters.getBPSHealthy
            },
            set(newVal){
                store.commit('setBPSHealthy',newVal)
            }
        },
    },
    }


</script>

<style scoped>
.toggle_switch_label{
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
.toggle_switch_label input{
    opacity: 0;
    width: 0;
    height: 0;
}
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}
.slider:before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider{
    background-color:#F7931A;
}
input:focus + .slider{
    box-shadow: 0 0 1px #F7931A;
}
input:checked + .slider:before{
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
select{
    max-width:20%;
}
.switch{
    display:flex;
    flex-direction: row;
    align-items:center;
}
</style>