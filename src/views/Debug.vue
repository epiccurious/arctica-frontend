<template>
<div class="page">
    <header>
        <h1>Debug toggles</h1>
        <h2>This is for testing only.</h2>
    </header>
    <div class="btn_container"> 

        <button @click="reboot()" class="btn">Reboot</button>


        <label>SD inserted</label>
        <select v-model="sdCard" name="sdCard" id="sdCard">
            <option @click="setSD()" value="none">None</option>
            <option @click="setSD()" value="one">One</option>
            <option @click="setSD()" value="two">Two</option>
            <option @click="setSD()" value="three">Three</option>
            <option @click="setSD()" value="four">Four</option>
            <option @click="setSD()" value="five">Five</option>
            <option @click="setSD()" value="six">Six</option>
            <option @click="setSD()" value="seven">Seven</option>
        </select>

        <div class="switch">
            Currently on Primary Machine
            <label class="toggle_switch_label">
                <input v-if="this.primaryMachine == true" v-model="primaryMachine" @click="primaryMachineToggle()" type="checkbox" checked>
                <input v-else-if="this.primaryMachine == false" v-model="primaryMachine" @click="primaryMachineToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Transfer CD Inserted (WARNING: setting this to false will clear the PSBT in memory)
            <label class="toggle_switch_label">
                <input v-if="this.psbtFound == true" v-model="psbtFound" @click="psbtFoundToggle()" type="checkbox" checked>
                <input v-else-if="this.psbtFound == false" v-model="psbtFound" @click="psbtFoundToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <!-- <label>PSBT Found (transfer CD)</label>
        <select v-model="psbtFound" name="psbtFound" id="psbtFound">
            <option @click="setPSBT()" value="none">None</option>
            <option @click="setPSBT()" value="immediate">Immediate</option>
            <option @click="setPSBT()" value="delayed">Delayed</option>
        </select> -->

        <div class="switch">
            BTC Core Healthy
            <label class="toggle_switch_label">
                <input v-if="this.btcCoreHealthy == true" v-model="btcCoreHealthy" @click="btcCoreHealthyToggle()" type="checkbox" checked>
                <input v-else-if="this.btcCoreHealthy == false" v-model="btcCoreHealthy" @click="btcCoreHealthyToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

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

        <div class="switch">
            Manually Decrypted
            <label class="toggle_switch_label">
                <input v-if="this.manualDecrypt == true" v-model="manualDecrypt" @click="manualDecryptToggle()" type="checkbox" checked>
                <input v-else-if="this.manualDecrypt == false" v-model="manualDecrypt" @click="manualDecryptToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

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

        <div class="switch">
            Post Setup Tripwire Completed
            <label class="toggle_switch_label">
                <input v-if="this.tripwireSetup == true" v-model="tripwireSetup" @click="tripWireSetupToggle()" type="checkbox" checked>
                <input v-else-if="this.tripwireSetup == false" v-model="tripwireSetup" @click="tripWireSetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Tripwire Healthy
            <label class="toggle_switch_label">
                <input v-if="this.tripwire == true" v-model="tripwire" @click="tripWireToggle()" type="checkbox" checked>
                <input v-else-if="this.tripwire == false" v-model="tripwire" @click="tripWireToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

         <div class="switch">
            Post Setup PII Folder Completed
            <label class="toggle_switch_label">
                <input v-if="this.recoverySetup == true" v-model="recoverySetup" @click="recoverySetupToggle()" type="checkbox" checked>
                <input v-else-if="this.recoverySetup == false" v-model="recoverySetup" @click="recoverySetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Post Setup Duress Password Completed
            <label class="toggle_switch_label">
                <input v-if="this.duressSetup == true" v-model="duressSetup" @click="duressSetupToggle()" type="checkbox" checked>
                <input v-else-if="this.duressSetup == false" v-model="duressSetup" @click="duressSetupToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Setup CD inserted
            <label class="toggle_switch_label">
                <input v-if="this.setupCD == true" v-model="setupCD" @click="setupCDToggle()" type="checkbox" checked>
                <input v-else-if="this.setupCD == false" v-model="setupCD" @click="setupCDToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <!-- this button seems kind of useless, may remove. The only way for us to discern if this variable should be true or false in a real world scenario
         would be to create a file on the users machine. Potential side effects in certain edge cases where a user tries to boot from SD 1 on a machine
        they did not use to complete setup. Perhaps better to assume we never know for sure if the user has set up already or not and always present 
        them with the option, unless they have booted from SD 1-7 in which case this below variable and debug toggle switch will not be necessary. -->
        <div class="switch">
            Initial Setup Complete (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

    <button @click="test()" class="btn">Test</button>

    </div> 
</div>
</template>

<script>
import store from '../store.js'

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
            console.log('timelock', store.getters.getTimeLock)
        },

        tripWireToggle(){
            if(this.tripwire === false){
                store.commit('setTripwireHealthy', true)
                store.commit('setTripwireSetup', true)
            } else{
                store.commit('setTripwireHealthy', false)
            }
             console.log('tripwire healthy', store.getters.getTripwireHealthy)   
             console.log('Tripwire Setup complete', store.getters.getTripwireSetup)
            },

        psbtFoundToggle(){
            if(this.psbtFound == false){
                store.commit('setPSBTFound', true)
                store.commit('setManualDecrypt', true)
            } else{
                store.commit('setPSBTFound', false)
                store.commit('setPSBT', null)
                store.commit('clearTransaction')
            }
             console.log('PSBT Found', store.getters.getPSBTFound)   
            },

        bpsBrickedToggle(){
            if(this.bpsBricked == false){
                store.commit('setBPSBricked', true)
            } else{
                store.commit('setBPSBricked', false)
            }
             console.log('BPS Bricked', store.getters.getBPSBricked)   
            },

            //this function automatically sets timelock to false, assuming that time machine keys have ben found, time lock should be disabled automatically
        timeMachineKeysFoundToggle(){
            if(this.timeMachineKeysFound == false){
                store.commit('setTimeMachineKeysFound', true)
                store.commit('setTimeLock', false)
            } else{
                store.commit('setTimeMachineKeysFound', false)
            }
             console.log('Time Machine Keys Found', store.getters.getTimeMachineKeysFound)   
             console.log('time locked', store.getters.getTimeLock)
            },

        privacyKeysFoundToggle(){
            if(this.privacyKeysFound == false){
                store.commit('setPrivacyKeysFound', true)
                store.commit('setManualDecrypt',true)
            } else{
                store.commit('setPrivacyKeysFound', false)
                store.commit('setManualDecrypt', false)
            }
             console.log('Privacy Keys Found', store.getters.getPrivacyKeysFound)   
             console.log('Manually decrypted', store.getters.getManualDecrypt)
            },
        
        manualDecryptToggle(){
                if(this.manualDecrypt == false){
                store.commit('setManualDecrypt', true)
            } else{
                store.commit('setManualDecrypt', false)
            }
             console.log('Manually Decrypted', store.getters.getManualDecrypt)   
        },
        tripWireSetupToggle(){
                if(this.tripwireSetup == false){
                store.commit('setTripwireSetup', true)
            } else{
                store.commit('setTripwireSetup', false)
            }
             console.log('Tripwire Setup Completed', store.getters.getTripwireSetup) 
        },
        recoverySetupToggle(){
                if(this.recoverySetup == false){
                store.commit('setRecoverySetup', true)
            } else{
                store.commit('setRecoverySetup', false)
            }
             console.log('Recovery Folder Setup Completed', store.getters.getRecoverySetup) 
        },
        duressSetupToggle(){
                if(this.duressSetup == false){
                store.commit('setDuressSetup', true)
            } else{
                store.commit('setDuressSetup', false)
            }
             console.log('Duress Setup Completed', store.getters.getDuressSetup) 
        },
        btcCoreHealthyToggle(){
                if(this.btcCoreHealthy == false){
                store.commit('setBTCCoreHealthy', true)
            } else{
                store.commit('setBTCCoreHealthy', false)
            }
             console.log('BTC core healthy', store.getters.getBTCCoreHealthy) 
        },
        bpsHealthyToggle(){
                if(this.bpsHealthy == false){
                store.commit('setBPSHealthy', true)
            } else{
                store.commit('setBPSHealthy', false)
            }
             console.log('BPS healthy', store.getters.getBPSHealthy) 
        },  
        setupCDToggle(){
                if(this.setupCD == false){
                store.commit('setSetupCD', true)
            } else{
                store.commit('setSetupCD', false)
            }
             console.log('Setup CD inserted', store.getters.getSetupCD) 
        },    
        primaryMachineToggle(){
                if(this.primaryMachine == false){
                store.commit('setPrimaryMachine', true)
            } else{
                store.commit('setPrimaryMachine', false)
            }
             console.log('Currently on Primary machine', store.getters.getPrimaryMachine) 
        },    
        test(){
            console.log('setup 1', store.getters.getSetup1)
        },
        reboot(){
            this.$router.push({ name: 'welcome' })
        },
        setSD(){
            store.commit('setCurrentSD', this.sdCard)
            console.log('Current SD', store.getters.getCurrentSD)
        },
        setPSBT(){
            store.commit('setPSBTFound', this.psbtFound)
            if(store.getters.getPSBTFound == true){
                store.commit('setManualDecrypt', true)
                console.log('manual decrypt', store.getters.getManualDecrypt)
            }
            console.log('PSBT Found', store.getters.getPSBTFound)
            
        }

    },
    computed:{
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
                return store.getters.getTripwireHealthy
            },
            set(newVal){
                store.commit('setTripwireHealthy', newVal)
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
        psbtFound:{
            get(){
                return store.getters.getPSBTFound
            },
            set(newVal){
                store.commit('setPSBTFound', newVal)
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
        manualDecrypt:{
            get(){
                return store.getters.getManualDecrypt
            },
            set(newVal){
                store.commit('setManualDecrypt', newVal)
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
        btcCoreHealthy:{
            get(){
                return store.getters.getBTCCoreHealthy
            },
            set(newVal){
                store.commit('setBTCCoreHealthy', newVal)
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
        setupCD:{
            get(){
                return store.getters.getSetupCD
            },
            set(newVal){
                store.commit('setSetupCD', newVal)
            }
        },
        primaryMachine:{
            get(){
                return store.getters.getPrimaryMachine
            },
            set(newVal){
                store.commit('setPrimaryMachine',newVal)
            }
        }

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