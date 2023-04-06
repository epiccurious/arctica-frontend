<template>
<div class="page">
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

export default {
    name: 'sign2of2',
    props: [],
    //import PSBT eventually...
    methods: {
        sign(){
            if(this.currentSD != 1 && this.currentSD != 0 && this.psbtFound == true){
                store.commit('setPSBT', '2of2')
                this.$router.push({ name: '2of2success' })
            }
        },
        discard(){
            store.commit('clearTransaction')
            this.$router.push({ name: 'immediate' }) 
        },
    },
    data(){
        return{
            transaction: store.getters.getTransaction
        }
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        psbtFound(){
            return store.getters.getPSBTFound
        }
    },
    mounted(){
    //TODO
    //unpack
    //create wallets dir in sensitive
    //start bitcoind with networking off
    //load wallets
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