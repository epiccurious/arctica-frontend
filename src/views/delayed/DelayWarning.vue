<template>
    <!-- timelock condition is true, expected behavior -->
    <div v-if="timelock == true" class="page">
        <header>
            <h1>Warning! Your Delayed Wallet is currently timelocked.</h1>
            <h2>Your Delayed Wallet is timelocked for... <br><span class="strong_text">{{ this.delayedYears }} year(s), {{ this.delayedMonths }} month(s), {{ this.delayedDays }} day(s), {{ this.delayedHours }} hour(s), {{ this.delayedMinutes }} minute(s), {{ this.delayedSeconds }} second(s)</span></h2> 
            <h2>Accessing these funds early will involve significant cost.</h2> 
            <h2>For more information, read the <a class="blue_link" href="#">Time Machine Protocol</a>.</h2>
        </header>        
        <div class="form_container">
            <form>
                <div class="lg_checkbox_container">
                    <input type="checkbox" v-model="checkbox" name="checkbox">
                    <label for="checkbox">I have read and understand the <a class="blue_link" href="#">Time Machine Protocol</a>.</label>
                </div>
            </form>
            <div class="btn_container"> 
                <button v-if="checkbox" @click="$emit('ackWarning')" class="btn">Proceed</Button>
                <button v-else @click="warn()" class="btn3">Proceed</Button>
            </div>
        </div> 
    </div>
    <!-- timelock condition is false, can only happen if the delayed wallet unlocks while user is within the wallet UI -->
    <div v-else class="page">
        <header>
            <h1>Your Delayed Wallet has unlocked!.</h1>
        </header>        
        <div class="form_container">
            <div class="btn_container"> 
                <button @click="$emit('ackWarning')" class="btn">Proceed</Button>
            </div>
        </div> 
    </div>
</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke


export default {
    name: 'DelayWarning',
    props: [],
    data(){
        return{
            checkbox: false,
            delayedYears: 0,
            delayedMonths: 0,
            delayedWeeks: 0,
            delayedDays: 0,
            delayedHours: 0,
            delayedMinutes: 0,
            delayedSeconds: 0      
        }
    },
    methods:{
        warn(){
        },
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
    },
    mounted(){
        //calculate delayed_decay1
        invoke('calculate_decay_time', {file: "delayed_decay1"}).then((res)=>{
          console.log("delayed decay response:", res)
          if(res.includes("decay complete")){
            store.commit('setTimeLock', false)
          }
          else{
            const parts = res.split(",")
            this.delayedYears = parts[0].split("=")[1].trim()
            this.delayedMonths = parts[1].split("=")[1].trim()
            this.delayedWeeks = parts[2].split("=")[1].trim()
            this.delayedDays = parts[3].split("=")[1].trim()
            this.delayedHours = parts[4].split("=")[1].trim()
            this.delayedMinutes = parts[5].split("=")[1].trim()
            this.delayedSeconds = parts[6].split("=")[1].trim()
          }
        })
    },
}
</script>
