<template>
<div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
    <div class="display_block">
        <h1>Approve Transaction for Signing (2 of 2)</h1>
        <img src="@/assets/checkmark_grey.png">
        <div class="tx_block">
            <h2>To</h2>
            <h3>{{ this.address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ {{ this.amount }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ {{ this.fee }}</h3>
        </div>

        <div class="horizontal_btn_container">
            <button @click="sign()" class="btn"><img src="@/assets/checkmark_button.png">Approve</button>
            <button @click="discard()" class="btn2">Discard (Disabled)</button>
        </div>
        

    </div>
</div>
</template>


<script>
import store from '../../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
    name: 'sign2of2',
    components: {
    Loader,
    },
    methods: {
        sign(){
            store.commit('setLoadMessage', 'Signing PSBT...')
            this.loading = true
            invoke('sign_psbt', {walletname: "immediate", hwnumber: this.currentHW.toString(), progress: "2of2"}).then((res) => {
                store.commit('setDebug', `Signing PSBT: ${res}`)
                store.commit('setLoadMessage', 'Refreshing Transfer CD...')
                invoke('refresh_cd').then((res)=>{
                    store.commit('setDebug', `Refreshing transfer CD: ${res}`)
                    this.loading=false
                    this.$router.push({ name: '2of2success' })
                }).catch((e)=>{
                    store.commit('setDebug', `error refreshing transfer CD: ${e}`)
                    store.commit('setErrorMessage', `Error refreshing transfer CD Error Code: sign2of2-4 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })
            }).catch((e)=>{
                store.commit('setDebug', `error signing PSBT: ${e}`)
                store.commit('setErrorMessage', `Error Signing PSBT Error Code: sign2of2-3 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })   
        },
        discard(){
            //this currently does nothing, eventually wipe the psbt cd after a confirmation prompt?
        },
    },
    data(){
        return{
            loading: true,
            address: null,
            amount: null,
            fee: null,
        }
    },
    computed:{
        currentHW(){
            return store.getters.getcurrentHW
        },
    },
    mounted(){
    //unpack
    store.commit('setLoadMessage', 'Unpacking sensitive info...')
        invoke('unpack').then((res) => {
            store.commit('setDebug', `unpacked sensitive info ${res}`)
            store.commit('setLoadMessage', `Loading immediate wallet...`)
            //load immediate wallet
            invoke('load_wallet', {walletname: "immediate", hwnumber: this.currentHW.toString()}).then((res)=>{
                store.commit('setDebug', `loading immediate wallet: ${res}`)
                store.commit('setLoadMessage', 'Decoding PSBT...')
                invoke('decode_raw_tx', {walletname: "immediate", hwnumber: this.currentHW.toString()}).then((res)=>{
                    console.log('decoding raw tx')
                    store.commit('setDebug', `decoded psbt: ${res}`)
                    const parts = res.split(",")
                    this.address = parts[0].split("=")[1].trim()
                    this.amount = parts[1].split("=")[1].trim()
                    this.fee = parts[2].split("=")[1].trim()
                    this.loading = false
                }).catch((e) => {
                        store.commit('setDebug', `error decoding PSBTs: ${e}`)
                })
            }).catch((e)=>{
                store.commit('setDebug', `error loading immediate wallet ${e}`)
                store.commit('setErrorMessage', `Error Loading Immediate Wallet Error Code: sign2of2-2 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
        })     
        .catch((e) => {
            store.commit('setDebug', `error unpacking sensitive: ${e}`)
            store.commit('setErrorMessage', `Error unpacking sensitive Error code: sign2of2-1 Response: ${e}`)
            this.$router.push({ name:'Error' })
        })
    //TODO
    //eventually load up and display the transaction data within the page so the user may confirm what they are signing for...
 }
}
</script>

<style scoped>
.btn{
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>