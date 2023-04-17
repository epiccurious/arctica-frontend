<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
    <header>
        <h1>Hardware Wallet 6</h1>
        <h2>Please remove Hardware Wallet 5 & insert Hardware Wallet 6.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted HW 6.</label>
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
  name: 'Setup9',
  components: {
    Loader,
  },
  methods: {
        acknowledge() {
            this.loading = true
            store.commit('setLoadMessage', 'Creating Hardware Wallet 6...')
            invoke('create_bootable_usb', {number: this.sd, setup: this.setupStep}).then((res) => {
                store.commit('setDebug', `SD card initialized with config sdnumber:${this.sd} and setupStep:${this.setupStep}`)
                store.commit('setDebug', `create bootable SD 6 completed: ${res}`)
                this.loading = false
                this.$router.push({ name:'Setup10' })   
            })
            .catch((e) => {
            store.commit('setDebug', `create bootable error: ${e}`)
            store.commit('setErrorMessage', `Error creating bootable Error code: Setup9-1 Response: ${e}`)
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
            sd: "6",
            setupStep: '6'
        }
    },
}
</script>

