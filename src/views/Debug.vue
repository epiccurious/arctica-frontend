<template>
<div class="page">
    <header>
        <h1>Debug toggles</h1>
        <h2>This is for testing only.</h2>
    </header>
    <div class="btn_container"> 

        <div class="switch">
            Initial Setup Complete (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Post Setup Tripwire (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

         <div class="switch">
            Post Setup PII Folder (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Post Setup Duress Password(disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Tripwire Healthy (disabled)
            <label class="toggle_switch_label">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>
        </div>

        <div class="switch">
            Delayed Wallet Timelocked
            <label class="toggle_switch_label">
                <!-- <input v-model="timelock" @input="timeLockToggle" type="checkbox"> -->
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
        test(){
            console.log('null')
        },
    },
    computed:{
    timeLock(){
        return store.getters.getTimeLock
    },
    },
    data(){
        return{
            timelock: store.getters.getTimeLock
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
</style>