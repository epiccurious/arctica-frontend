<template>
<div class="page">
    <header>
        <h1>Debug Console:</h1>
    </header>
        <h2 v-for="item in this.debug" :key="item">{{item}}</h2>
    <div class="btn_container"> 
        <button @click="reboot()" class="btn">Reboot</button>

        <h2>Current Route: {{this.$route.name}}</h2>

        <h2>Current HW: {{this.hwNumber}}</h2>

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

    <button @click="getMedianTime()" class="btn">Get Median Time</button>
    <br>
    <button @click="getBlockChainInfo()" class="btn">Get Blockchain Info</button>
    <br>
    <button @click="startBitcoinOffline()" class="btn">Start Bitcoind Offline</button>
    <br>
    <button @click="reindexBitcoin()" class="btn">Reindex Bitcoin</button>
    <br>
    <button @click="refreshCD()" class="btn">Refresh CD</button>
    <br> 
    <button @click="unpack()" class="btn">Unpack</button>
    <br> 
    <button @click="packup()" class="btn">Packup</button>
    <br> 
    <button @click="copy_cd_to_ramdisk()" class="btn">Copy CD to ramdisk</button>

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
        refreshCD(){
        //this is a debug function used to refresh the CD with the current contents of /mnt/ramdisk/CDROM
            invoke('refresh_cd').then((res)=>{
                store.commit('setDebug', `refreshing CD: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error refreshing CD ${e}`)
            })
        },
        unpack(){
            //this is a debug function used to unpack the encrypted tarball into /mnt/ramdisk/sensitive
            invoke('unpack').then((res)=>{
                store.commit('setDebug', `unpacking tarball: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error unpacking tarball ${e}`)
            })
        },
        packup(){
            //this is a debug function used to packup the contents of /mnt/ramdisk/sensitive into an encrypted tarball
            invoke('packup', {hwnumber: this.hwNumber.toString()}).then((res)=>{
                store.commit('setDebug', `packing up tarball: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `error packing up tarball ${e}`)
            })
        },
        getTransctionHistory(){
            //this is a debug function used to print the immediate wallet transaction history vec
            invoke('get_transactions', {walletname: "immediate", hwnumber: "1"}).then((res)=>{
                store.commit('setDebug', `obtaining transaction history for immediate wallet: ${res}`)
            })
            .catch((e)=>{
                store.commit('setDebug', `error obtaining transactions for immediate wallet: ${e}`)
            })
        },
        decodeRawTx(){
            //debug function used to decode a signed PSBT
            invoke('decode_processed_psbt', {walletname: "immediate", hwnumber: this.hwNumber.toString()}).then((res)=>{
                store.commit('setDebug', `decoding PSBT from CDROM`)
                store.commit('setDebug', `decoded psbt: ${res}`)
            }).catch((e) => {
                    store.commit('setDebug', `error decoding PSBTs: ${e}`)
            })
        },
        copy_cd_to_ramdisk(){
            invoke('copy_cd_to_ramdisk').then((res)=>{
                store.commit('setDebug', `copying CD to ramdisk: ${res}`)
            })
        },
        reboot(){
            store.commit('setDebug', 'Reboot button pushed, Sending user to welcome')
            this.$router.push({ name: 'welcome' })
        },
        setNumberToRecover(){
            store.commit('setNumberToRecover', this.numberToRecover)
        },
        getMedianTime(){
            invoke('retrieve_median_blocktime').then((res)=>{
                store.commit('setDebug', `getting median block time: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `Error getting median blocktime: ${e}`)
            })
        },
        reindexBitcoin(){
            invoke('start_bitcoind', {reindex: true, networkactive: true}).then((res)=>{
                store.commit('setDebug', `starting bitcoind and reindexing blocksdb: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `Error reindexing blocksdb: ${e}`)
            })
        },
        startBitcoinOffline(){
            invoke('start_bitcoind', {reindex: false, networkactive: false}).then((res)=>{
                store.commit('setDebug', `starting bitcoind with network disabled: ${res}`)
            }).catch((e)=>{
                store.commit('setDebug', `Error starting bitcoind with network disabled: ${e}`)
            })
        },
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
        hwNumber:{
            get(){
                return store.getters.getcurrentHW
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