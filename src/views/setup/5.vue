<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
        <header>
        <h1>Hardware Wallet 2</h1>
        <h2>Please remove Hardware Wallet 1 & insert Hardware Wallet 2.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted HW 2.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>
<ProgressBar/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup5',
  components: {
    Loader,
    ProgressBar
  },
  methods: {
        acknowledge() {
            this.loading = true
            store.commit('setLoadMessage', 'Creating Hardware Wallet 2...')
            invoke('create_bootable_usb', {number: this.hw, setup: this.setupStep}).then((res) => {
                store.commit('setDebug', `Hardware Wallet initialized with config hwNumber:${this.hw} and setupStep:${this.setupStep}`)
                store.commit('setDebug', `create bootable HW 2 completed: ${res}`)
                this.loading = false
                this.$router.push({ name:'Setup6' })   
            })
            .catch((e) => {
            store.commit('setDebug', `create bootable error: ${e}`)
            store.commit('setErrorMessage', `Error creating bootable Error code: Setup5-1 Response: ${e}`)
            this.$router.push({ name:'Error' })
            })
             
        },
        warn(){
        },

    },
    data(){
        return{
            checkbox: false,
            loading: false,
            hw: "2",
            setupStep: '2'
        }
    },
}
</script>

