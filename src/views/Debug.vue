<template>
<div class="page">
    <header>
        <h1>Debug toggles</h1>
        <h2>This is for testing only.</h2>
    </header>
    <div class="btn_container"> 

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
            Initial Setup Complete (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
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
            Post Setup Tripwire (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

         <div class="switch">
            Post Setup PII Folder (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Post Setup Duress Password(disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Published Privacy Keys Found (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Published Time Machine Keys Found(disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" disabled>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            PSBT Found
            <label class="toggle_switch_label">
                <input v-if="this.psbtFound == true" v-model="psbtFound" @click="psbtFoundToggle()" type="checkbox" checked>
                <input v-else-if="this.psbtFound == false" v-model="psbtFound" @click="psbtFoundToggle()" type="checkbox">
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
            Delayed Wallet Timelocked
            <label class="toggle_switch_label">
                <input v-if="this.timelock == true" v-model="timelock" @click="timeLockToggle()" type="checkbox" checked>
                <input v-else-if="this.timelock == false" v-model="timelock" @click="timeLockToggle()" type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <button @click="test()" class="btn">test</button>

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
            }
            else{
                store.commit('setTimeLock', false)
            }
            console.log('timelock', store.getters.getTimeLock)
        },
        tripWireToggle(){
            if(this.tripwire === false){
                store.commit('setTripwireHealthy', true)
            } else{
                store.commit('setTripwireHealthy', false)
            }
             console.log('tripwire healthy', store.getters.getTripwireHealthy)   
            },
        psbtFoundToggle(){
            if(this.psbtFound == false){
                store.commit('setPSBTFound', true)
            } else{
                store.commit('setPSBTFound', false)
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
        }
        ,
        test(){
            console.log('PSBT Found', store.getters.getPSBTFound)
        },
        setSD(){
            store.commit('setCurrentSD', this.sdCard)
        },
    computed:{},
    data(){
        return{
            timelock: store.getters.getTimeLock,
            tripwire: store.getters.getTripwireHealthy,
            sdCard: store.getters.getCurrentSD,
            psbtFound: store.getters.getPSBTFound,
            bpsBricked: store.getters.getBPSBricked,
        }
    }
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
</style>