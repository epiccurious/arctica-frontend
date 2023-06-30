<template>
    <div v-if="this.loading == true">
      <Loader/>
      </div>
    <div v-else class="page">
        <div class="display_block">
            <h1>Approve Transaction for Signing (4 of 5)</h1>
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
    name: 'sign4of5',
    components: {
    Loader,
    },
    methods: {
        sign(){
            store.commit('setLoadMessage', 'Signing PSBT...')
            let progressStr = null
            this.loading = true
            //calcuate the progress param needed for sign_funded_psbt
            if(this.delayedDecay == "zero"|| this.delayedDecay == "one"){
                progressStr = "1of5"
            }else if(this.delayedDecay == "two"){
                progressStr = "2of5"
            }else if(this.delayedDecay == "three"){
                progressStr = "3of5"
            }else if(this.delayedDecay == "four"){
                progressStr = "4of5"
            }else if(this.delayedDecay == "five"){
                progressStr = "5of5"
            }
            //sign the psbt
            invoke('sign_funded_psbt', {walletname: "delayed", hwnumber: this.currentHW.toString(), progress: progressStr}).then((res) => {
                store.commit('setDebug', `Signing PSBT: ${res}`)
                store.commit('setLoadMessage', 'Signing PSBT...')
                //redirect the user to transfer for export psbt
                this.$router.push({ name: 'delayedTransfer' })
            }).catch((e)=>{
                store.commit('setDebug', `error signing PSBT: ${e}`)
                store.commit('setErrorMessage', `Error Signing PSBT Error Code: sign4of5-1 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })   
        },
    },
    data(){
        return{
            loading: true,
            address: null,
            amount: null,
            fee: null,
            feeString: null,
            amountString: null,
        }
    },
    computed:{
        currentHW(){
            return store.getters.getcurrentHW
        },
        delayedDecay(){
            return store.getters.getDelayedDecay
        },
    },
    mounted(){
        store.commit('setLoadMessage', 'Decoding PSBT...')
        //this obtains the fee
        invoke('decode_funded_psbt', {walletname: "delayed", hwnumber: this.currentHW.toString()}).then((res)=>{
            console.log('decoding funded psbt')
            store.commit('setDebug', `decoded psbt: ${res}`)
            const parts = res.split(",")
            this.address = parts[0].split("=")[1].trim()
            this.amountString = parts[1].split("=")[1].trim()
            this.amount = parseFloat(this.amountString)/100000000 //convert from sats to BTC
            this.feeString = parts[2].split("=")[1].trim()
            this.fee = parseFloat(this.feeString)
            console.log("response:", res)
            this.loading = false
        }).catch((e) => {
                store.commit('setDebug', `error decoding funded PSBT: ${e}`)
                store.commit('setErrorMessage', `Error Decoding PSBT Error Code: sign4of5-2 Response: ${e}`)
                this.$router.push({ name:'Error' })
        })
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