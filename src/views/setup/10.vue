<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
    <header>
        <h1>Hardware Wallet 7</h1>
        <h2>Please remove Hardware Wallet 6 & insert Hardware Wallet 7.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted HW 7.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup10',
  components: {
    Loader,
  },
  methods: {
        acknowledge() {
            this.loading = true
            store.commit('setLoadMessage', 'Creating Hardware Wallet 7...')
            invoke('create_bootable_usb', {number: this.hw, setup: this.setupStep}).then((res) => {
                store.commit('setDebug', `Hardware Wallet initialized with config sdnumber:${this.hw} and setupStep:${this.setupStep}`)
                store.commit('setDebug', `create bootable HW 7 completed: ${res}`)
                this.loading = false
                this.$router.push({ name:'Setup11' })   
            })
            .catch((e) => {
            store.commit('setDebug', `create bootable error: ${e}`)
            store.commit('setErrorMessage', `Error creating bootable Error code: Setup10-1 Response: ${e}`)
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
            hw: "7",
            setupStep: '7'
        }
    },
}
</script>

