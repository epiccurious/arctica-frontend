<template>

    <div class="nav_container"> 
        <div class="menu_container">
            <div class="wallet_overview">
                    <img src="@/assets/Wallet.png"/>
                    <div class="description_balance">
                    <h2 class="description">Delayed Wallet</h2>
                    <h2 class="balance">₿ {{ delayedBalance }}</h2  >
                    </div>
            </div>

            <div class="middle_menu">
                <h2 v-if="wallet" class="wallet_tab_selected">Wallet</h2> 
                <router-link v-else :to="{ name: 'delayed' }">
                    <h2 class="wallet_tab">Wallet</h2> 
                </router-link>
                <h2 v-if="send" class="send_tab_selected">Send</h2> 
                <router-link v-else :to="{ name: 'delayedSend' }">
                    <h2 class="send_tab">Send</h2>
                </router-link> 
                <h2 v-if="receive" class="receive_tab_selected">Receive</h2> 
                <router-link v-else :to="{ name: 'delayedReceive' }">
                    <h2 class="receive_tab">Receive</h2> 
                </router-link>
            </div>

            <div class="icon_container">
                <router-link class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link> 
                <router-link class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { RouterView, RouterLink } from "vue-router";
import store from '../store.js'
const invoke = window.__TAURI__.invoke
{
  RouterView;
  RouterLink
}

export default{
    name: 'NavDelayed',
    props: {},
    computed: {
        wallet(){
            if(this.$route.path =='/wallets/delayed'){
                return true
            } else {
                return false
            }
        },
        send(){
            if(this.$route.path=='/wallets/delayed/send'){
                return true
            } else{
                return false
            }
        },
        receive(){
            if(this.$route.path=='/wallets/delayed/receive'){
                return true
            } else{
                return false
            }
        },
        delayedBalance(){
        return store.getters.getDelayedBalance
        },
    },
             mounted(){
            invoke('get_balance_high_wallet').then((res)=>{
            store.commit('setTest', `getting balance for high wallet: ${res}`)
            store.commit('setDelayedBalance', `${res}`)
          })
          .catch((e)=>{
            store.commit('setTest', `error getting new high wallet address ${e}`)
          })
 },
}
</script>

<style scoped>
img{
    align-self: center;
}
</style>