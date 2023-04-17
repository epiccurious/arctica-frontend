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
            invoke('broadcast_tx', {wallet_name: "immediate", hw_number: this.currentHW.toString()}).then((res)=>{
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
            //TODO need to clear /mnt/ramdisk/CDROM/psbt at this point...should probably have a popup confirmation before doing this...
            this.$router.push({ name: 'dashboard' })
        },
    },
    computed:{
        currentHW(){
            return store.getters.getcurrentHW
        },
    },
    mounted(){
        store.commit('setLoadMessage', 'Importing PSBT...')
        invoke('finalize_psbt', {wallet_name: "immediate", hw_number: this.currentHW.toString()}).then((res)=>{
                store.commit('setDebug', `finalizing PSBT: ${res}`)
                store.commit('setDebug', `decoding PSBT...`)
                invoke('decode_raw_tx', {wallet_name: "immediate", hw_number: this.currentHW.toString()}).then((res)=>{
                    store.commit('setDebug', `decoded psbt: ${res}`)
                    const parts = res.split(",")
                    this. address = parts[0].split("=")[1].trim()
                    this.amount = parts[1].split("=")[1].trim()
                    this.fee = parts[2].split("=")[1].trim()
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
