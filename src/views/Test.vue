<template>
<div class="page">
    <header>
        <h1>This is a test environment</h1>
        <h2>Make sure Bitcoin Core is running...I won't do it for you.</h2>
    </header>
    <div class="btn_container"> 

        <label>HW inserted</label>
            <select v-model="hwNumber" name="hwNumber" id="hwNumber">
                <option @click="setHW()" value= 0>None</option>
                <option @click="setHW()" value= 1>One</option>
                <option @click="setHW()" value= 2>Two</option>
                <option @click="setHW()" value= 3>Three</option>
                <option @click="setHW()" value= 4>Four</option>
                <option @click="setHW()" value= 5>Five</option>
                <option @click="setHW()" value= 6>Six</option>
                <option @click="setHW()" value= 7>Seven</option>
            </select>

        <button @click="generateKeys()" class="btn">Gen Keys</button>
        <br> 
        <button @click="createDescriptors()" class="btn">Create Descriptors</button>
        <br>
    </div>
    
</div>
</template>
    
<script> 
import store from '../store.js'
const invoke = window.__TAURI__.invoke   

export default {
    name: 'TestEnvironment',
    methods: {
        setHW(){
            store.commit('setcurrentHW', this.hwNumber)
        },
        generateKeys(){
            invoke('generate_store_key_pair', {number: this.hwNumber.toString()}).then((res)=>{
                store.commit('setDebug', `invoking generate store keypair: ${res}`)
                store.commit('setDebug', `generating key: ${this.hwNumber}`)
                    })
            .catch((e)=>{
            store.commit('setDebug', `error invoking test function: ${e}`)
            })
        },
        createDescriptors(){
            invoke('create_descriptor', {hwnumber: this.hwNumber.toString()}).then((res) => {
                store.commit('setDebug', `creating descriptors ${res}`)
            }).catch((e) => {
                    store.commit('setDebug', `error creating descriptors: ${e}`)
            })
        },
    },
    computed: {
        hwNumber:{
            get(){
                return store.getters.getcurrentHW
            },
            set(newVal){
                store.commit('setcurrentHW', newVal)
            }
        },
    },
}
</script>

<style scoped>
select{
    max-width:20%;
}
</style>