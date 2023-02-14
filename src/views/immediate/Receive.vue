<template>
<div class="page">
    <NavImmediate/>
    <div class="outer_container">
        <div class="receive_head_container">
         <h1>Receive Bitcoin</h1>
         </div>
        <div class="receive_container">
            <div class="receive_top">
                <!-- <img src="@/assets/placeholderQR.png"> -->
                <h2 class="receive_address">{{ address }}</h2>
            </div>
            <div class="receive_bottom">
                <div @click="copy()" id="copy">
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


<!-- 
Todo:
-Images are distorted here...why!?
-download QR button not yet implemented
-Copy Address button works in native webview but not inside tauri -->

<script>
import NavImmediate from '@/components/NavImmediate'
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'immediateReceive',
  components: {
    NavImmediate,
  },
  methods:{
        copy(){
        
        navigator.clipboard.writeText(copyText.value);
        alert('Copied Address!');
        },
        newAddress(){
            invoke('get_address_med_wallet').then((res)=>{
            store.commit('setDebug', `getting new address for immediate wallet: ${res}`)
            this.address = res
          })
          .catch((e)=>{
            store.commit('setDebug', `error getting new immediate wallet address ${e}`)
            store.commit('setErrorMessage', `Error getting new wallet address Error code: ImmediateReceive1 Response: ${e}`)
            this.$router.push({ name: 'Error' })
          })
        },
  },
  data(){
      return{
          address: null
      }
  },
     mounted(){
        invoke('get_address_med_wallet').then((res)=>{
            store.commit('setDebug', `getting address for immediate wallet: ${res}`)
            this.address = res
          })
          .catch((e)=>{
            store.commit('setDebug', `error getting immediate wallet address ${e}`)
            store.commit('setErrorMessage', `Error getting new wallet address Error code: ImmediateReceive2 Response: ${e}`)
            this.$router.push({ name: 'Error' })
          })
     }
}
</script>

