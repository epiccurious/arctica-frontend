<template>
<div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
    <div class="display_block">
        <h1>Ready to send?</h1>
        <img src="@/assets/checkmark_green.png">
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
            <button @click="broadcast()" class="btn">Send</button>
            <button @click="discard()" class="btn2">Discard</button>
        </div>
        

    </div>
</div>
</template>


<script>
import store from '../../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
    name: 'immediateBroadcast',
    components: {
    Loader,
    },
    methods: {
        broadcast(){
            this.loadingc= true
            store.commit('setLoadMessage', 'Broadcasting transaction...')
            invoke('broadcast_tx', {wallet: "immediate", sdcard: this.currentSD.toString()}).then((res)=>{
                    store.commit('setDebug', `Broadcasting Fully Signed TX: ${res}`)
                    this.loading = false
                    this.$router.push({ name: 'immediateConfirmation' })
                }).catch((e)=>{
                    store.commit('setDebug', `error finalizing psbt ${e}`)
                    store.commit('setErrorMessage', `Error finalizing psbt Error Code: immediateBroadcast-1 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })
            
        },
        discard(){
        },
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
    },
    mounted(){
        store.commit('setLoadMessage', 'Importing PSBT...')
        invoke('finalize_psbt', {wallet: "immediate", sdcard: this.currentSD.toString()}).then((res)=>{
                store.commit('setDebug', `finalizing PSBT: ${res}`)
                invoke('decode_raw_tx', {wallet: "immediate", sdcard: this.currentSD.toString()}).then((res)=>{
                    store.commit('setDebug', `decoding PSBT from CDROM`)
                    store.commit('setDebug', `decoded psbt: ${res}`)
                    const parts = res.split(",")
                    this. address = parts[0].split("=")[1].trim()
                    this.amount = parts[1].split("=")[1].trim()
                    this.loading = false
                }).catch((e) => {
                        store.commit('setDebug', `error decoding PSBTs: ${e}`)
                })
            }).catch((e)=>{
                store.commit('setDebug', `error finalizing psbt ${e}`)
                store.commit('setErrorMessage', `Error finalizing psbt Error Code: immediateBroadcast-1 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
    },
    data(){
        return{
            loading: true,
            address: null,
            amount: null,
            fee: null,
        }
    },
}
</script>
