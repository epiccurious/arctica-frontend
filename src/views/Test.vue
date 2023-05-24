<template>
<div class="page">
    <header>
        <h1>This is a test environment</h1>
        <h2>Make sure Bitcoin Core is running...</h2>
    </header>

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
    
</div>
</template>
    
<script> 
import store from '../store.js'
// const invoke = window.__TAURI__.invoke   

export default {
    name: 'TestEnvironment',
    methods: {
        setHW(){
            store.commit('setcurrentHW', this.hwNumber)
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
</style>