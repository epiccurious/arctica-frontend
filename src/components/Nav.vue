<template>
    <div class="nav_container"> 
        <div class="icon_container">
            <router-link v-if="dash" class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets_selected.png"></router-link>
            <router-link v-else class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link>  
            <router-link v-if="settings" class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings_selected.png"></router-link>
            <router-link v-else class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
        </div>
        <div class="refresh_container">
            <RefreshIcon @click="sync()" style="height:5px;width:5px;color:black" />
        </div>
    </div>
</template>


<script>
import { RouterView, RouterLink } from "vue-router";
{
  RouterView;
  RouterLink
}
import { RefreshIcon } from '@bitcoin-design/bitcoin-icons-vue/filled'
import store from '../store.js'



export default{
    name: 'Nav',
    components: { RefreshIcon },
    methods: {
        sync(){
                // invoke('get_balance', {walletname: this.wallet, hw_number:this.currentHW.toString()}).then((res)=>{
                //     store.commit('setDebug', `getting balance for immediate wallet: ${res}`)
                //     store.commit('setImmediateBalance', `${parseInt(res)}`)
                // }).catch((e)=>{
                // store.commit('setDebug', `error getting immediate wallet balance ${e}`)
                //  })
    },
},
    computed: {
        dash(){
            if(this.$route.path =='/wallets'){
                return true
            } else {
                return false
            }
        },
        settings(){
            if(this.$route.path=='/settings'){
                return true
            } else{
                return false
            }
        }, 
        currentHW(){
        return store.getters.getcurrentHW
      },
    },
    data(){
      return{
          wallet: "immediate"
      }
  },
    }
</script>

<style scoped>
.icon_container{
    padding-top:40px;
}
</style>