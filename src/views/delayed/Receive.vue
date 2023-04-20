<template>
<DelayWarning v-if="warning" v-on:ackWarning="ackWarning"/>
<div v-else class="page">
    <NavDelayed/>
    <div class="outer_container">
      <div class="receive_head_container">
         <h1>Receive Bitcoin</h1>
       </div>
        <div class="receive_container">
            <div class="receive_top">
                <!-- <img src="@/assets/placeholderQR.png"> -->
                
                <h2 class="receive_address">Delayed wallet is not yet implemented</h2>
            </div>
            <div class="receive_bottom">
                <div @click="copy(address)" id="copy">
                    <img src="@/assets/Copy.png">
                    <h2 class="copy_text">Copy Address</h2>
                </div>
                <div id="download">
                    <img src="@/assets/Arrow_down.png">
                    <h2 class="download_text">Download QR Code</h2>
                </div>
            </div>
        </div>
        <button @click="newAddress()" class="btn">New Address</Button>
    </div>        
</div>
</template>


<!-- -download QR button not yet implemented  -->

<script>
import NavDelayed from '@/components/NavDelayed'
import DelayWarning from './DelayWarning'
import store from '../../store.js'
// const invoke = window.__TAURI__.invoke

export default {
  name: 'delayedReceive',
  components: {
    NavDelayed,
    DelayWarning
  },
  methods: {
       async copy(s){
          await navigator.clipboard.writeText(s)
          alert('Copied Address!')
        },
        newAddress(){
        //     invoke('get_address', {walletname: this.wallet, hwnumber:this.currentHW.toString()}).then((res)=>{
        //     store.commit('setDebug', `getting new address for delayed wallet: ${res}`)
        //     this.address = res
        //   })
        //   .catch((e)=>{
        //     store.commit('setDebug', `error getting new immediate wallet address ${e}`)
        //     store.commit('setErrorMessage', `Error getting new wallet address Error code: ImmediateReceive1 Response: ${e}`)
        //     this.$router.push({ name: 'Error' })
        //   })
        },
        ackWarning(){
          this.warning = false
      },
      },
  data(){
      return{
          address: null,
          wallet: "delayed",
          warning: null
      }
  },
  computed:{
    currentHW(){
        return store.getters.getcurrentHW
      },
  },
   mounted(){
    // invoke('get_address', {walletname: this.wallet, hwnumber: this.currentHW.toString()}).then((res)=>{
    //         store.commit('setDebug', `getting new address for immediate wallet: ${res}`)
    //         this.address = res
    //       })
    //       .catch((e)=>{
    //         store.commit('setDebug', `error getting new immediate wallet address ${e}`)
    //         store.commit('setErrorMessage', `Error getting new wallet address Error code: ImmediateReceive1 Response: ${e}`)
    //         this.$router.push({ name: 'Error' })
    //       })
    this.timeLock = store.getters.getTimeLock
    this.address = store.getters.getDelayedAddress
    if(this.timeLock == true){
        this.warning = true
    }else{this.warning = false}
   },
}
</script>
