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
            <h3>NaaN</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ NaaN</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ NaaN</h3>
        </div>

        <div class="horizontal_btn_container">
            <button @click="sign()" class="btn"><img src="@/assets/checkmark_button.png">Approve</button>
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
    name: 'sign2of2',
    components: {
    Loader,
    },
    methods: {
        sign(){
            store.commit('setLoadMessage', 'Signing PSBT...')
            this.loading = true
            invoke('sign_psbt').then((res) => {
                store.commit('setDebug', `Signing PSBT: ${res}`)
                this.loading=false
                this.$router.push({ name: '2of2success' })
                }).catch((e)=>{
                    store.commit('setDebug', `error signing PSBT: ${res}`)
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
        }
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
    },
    mounted(){
    //unpack
    store.commit('setLoadMessage', 'Unpacking sensitive info...')
        invoke('unpack').then((res) => {
            store.commit('setDebug', `unpacked sensitive info ${res}`)
            store.commit('setLoadMessage', `Loading immediate wallet`)
            //load immediate wallet
            invoke('load_wallet', {wallet: "immediate", sdcard: this.currentSD.toString()}).then((res)=>{
                store.commit('setDebug', `loading immediate wallet: ${res}`)
                this.loading = false
            }).catch((e)=>{
                store.commit('setDebug', `error loading immediate wallet ${res}`)
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