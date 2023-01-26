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


<!-- 
Todo:
-Images are distorted here...why!?
-download QR button not yet implemented -->

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
        async copy(s){
        await navigator.clipboard.writeText(s)
        alert('Copied Address!')
        },
        newAddress(){
            invoke('get_address_med_wallet').then((res)=>{
            store.commit('setTest', `getting new address for immediate wallet: ${res}`)
            this.address = res
          })
          .catch((e)=>{
            store.commit('setTest', `error getting new immediate wallet address ${e}`)
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
            store.commit('setTest', `getting address for immediate wallet: ${res}`)
            this.address = res
          })
          .catch((e)=>{
            store.commit('setTest', `error getting immediate wallet address ${e}`)
          })
     }
}
</script>

