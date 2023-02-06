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

export default{
    name: 'Nav',
    components: { RefreshIcon },
    methods: {
        sync(){
        invoke('sync_med_wallet').then((res)=> {
            store.commit('setTest', `Syncing immediate wallet ${res}`)
            invoke('init_med_wallet').then((res)=> {
                store.commit('setTest', `initializing immediate wallet ${res}`)
                invoke('get_balance_med_wallet').then((res)=>{
                    store.commit('setTest', `getting balance for immediate wallet: ${res}`)
                    store.commit('setImmediateBalance', `${res}`)
                    invoke('get_transactions_med_wallet').then((res)=>{
                        store.commit('setTest', `getting transactions for immediate wallet: ${res}`)
                    }).catch((e)=>{
                    store.commit('setTest', `error getting transactions for immediate wallet: ${e}`)
                    })
                }).catch((e)=>{
                store.commit('setTest', `error getting immediate wallet balance ${e}`)
                })
            }).catch((e)=>{
            store.commit('setTest', `error initializing immediate wallet ${e}`)
            })

        }).catch((e)=>{
            store.commit('setTest', `error syncing immediate wallet:${e}`)
        })
        }
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
        }
    },
}
</script>

<style scoped>
.icon_container{
    padding-top:40px;
}
</style>