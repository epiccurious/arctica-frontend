<template>
    <div class="nav_container"> 
        <div class="menu_container">
            <div class="wallet_overview">
                    <img src="@/assets/Wallet.png"/>
                    <div class="description_balance">
                    <h2 class="description">Immediate Wallet</h2>
                    <h2 class="balance">₿ {{ immediateBalance }}</h2>
                    </div>
            </div>

            <div class="middle_menu">
                <h2 v-if="wallet" class="wallet_tab_selected">Wallet</h2> 
                <router-link v-else :to="{ name: 'immediate' }">
                    <h2 class="wallet_tab">Wallet</h2> 
                </router-link>
                <h2 v-if="send" class="send_tab_selected">Send</h2> 
                <router-link v-else :to="{ name: 'immediateSend' }">
                    <h2 class="send_tab">Send</h2>
                </router-link> 
                <h2 v-if="receive" class="receive_tab_selected">Receive</h2> 
                <router-link v-else :to="{ name: 'immediateReceive' }">
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
{
  RouterView;
  RouterLink
}

export default{
    name: 'NavImmediate',
    props: {},
    computed: {
        wallet(){
            if(this.$route.path =='/wallets/immediate'){
                return true
            } else {
                return false
            }
        },
        send(){
            if(this.$route.path=='/wallets/immediate/send'){
                return true
            } else{
                return false
            }
        },
        receive(){
            if(this.$route.path=='/wallets/immediate/receive'){
                return true
            } else{
                return false
            }
        }
    },
         mounted(){
            invoke('get_balance_med_wallet').then((res)=>{
            store.commit('setTest', `getting balance for med wallet: ${res}`)
            store.commit('setImmediateBalance', `${res}`)
            this.immediateBalance = store.getters.getImmediateBalance
          })
          .catch((e)=>{
            store.commit('setTest', `error getting new high wallet address ${e}`)
          })
 },
    data(){
        return{
            immediateBalance: null
        }
    }
}
</script>

<style scoped>
img{
    align-self: center;
}
</style>