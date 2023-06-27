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
                    <h2 class="receive_address">{{ address }}</h2>
                </div>
                <div class="receive_bottom">
                    <div @click="copy()" id="copy">
                        <img src="@/assets/Copy.png">
                        <h2 class="copy_text">Copy Address</h2>
                    </div>
                    <div @click="displayQR()" id="download">
                        <img src="@/assets/Arrow_down.png">
                        <h2 class="download_text">Display QR Code</h2>
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
const invoke = window.__TAURI__.invoke

export default {
  name: 'delayedReceive',
  components: {
    NavDelayed,
    DelayWarning
  },
  methods:{
            copy(){
            var copyText = document.getElementsByClassName("receive_address")[0];
            console.log(copyText)
            copyText.select();
            navigator.clipboard.writeText(copyText.value);
            alert('Copied Address!');
            },
            newAddress(){            
                invoke('get_address', {walletname: this.wallet, hwnumber:this.currentHW.toString()}).then((res)=>{
                store.commit('setDebug', `getting new address for delayed wallet: ${res}`)
                this.address = res
            })
              .catch((e)=>{
                store.commit('setDebug', `error getting new delayed wallet address ${e}`)
                store.commit('setErrorMessage', `Error getting new wallet address Error code: DelayedReceive1 Response: ${e}`)
                this.$router.push({ name: 'Error' })
              })
            },
            displayQR(){
              invoke('display_qr').then((res)=>{
                store.commit('setDebug', `displaying QR code: ${res}`)
              }).catch((e)=>{
                store.commit('setDebug', `error getting new delayed wallet address ${e}`)
                store.commit('setErrorMessage', `Error displaying QR code Error code: DelayedReceive2 Response: ${e}`)
                this.$router.push({ name: 'Error' })
              })
            }
    
      },
      data(){
          return{
              address: null,
              wallet: "delayed"
          }
      },
      computed: {
        currentHW(){
            return store.getters.getcurrentHW
          },
      },
    
      mounted(){
        invoke('get_address', {walletname: this.wallet, hwnumber:this.currentHW.toString()}).then((res)=>{
                store.commit('setDebug', `getting new address for delayed wallet: ${res}`)
                this.address = res
            })
              .catch((e)=>{
                store.commit('setDebug', `error getting new delayed wallet address ${e}`)
                store.commit('setErrorMessage', `Error getting new wallet address Error code: DelayedReceive3 Response: ${e}`)
                this.$router.push({ name: 'Error' })
              })
      }
    
    }
            
    </script>