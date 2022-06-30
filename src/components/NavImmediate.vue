<template>
    <div id="nav_container"> 
        <div id="menu_container">
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

            <div id="icon_container">
                <router-link class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link> 
                <router-link class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { RouterView, RouterLink } from "vue-router";
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
    inject: ['immediateBalance']
}
</script>

<style scoped>
#nav_container{
    width:100%;
    height: 100px;
    border-style: solid; 
    border-width: 0px 0px 1px 0px;
    border-color: #DEDEDE;
    margin-top:10px;
}
#menu_container{ 
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    align-content:center;
}
.wallet_overview{
    display:flex;
    flex-direction: row;
}
.middle_menu{
    display:flex;
    flex-direction: row;
}
.wallet_tab{
    padding:28px;
    font-weight:600;
}
.send_tab{
    padding:28px;
    font-weight:600;
}
.receive_tab{
    padding:28px;
    font-weight:600;
}
.wallet_tab_selected{
    padding:28px;
    color:#F7931A;
    border-style: solid; 
    border-width: 0px 0px 5px 0px;
    border-color: #F7931A;
    font-weight:600;
}
.receive_tab_selected{
    padding:28px;
    color:#F7931A;
    border-style: solid; 
    border-width: 0px 0px 5px 0px;
    border-color: #F7931A;
    font-weight:600;
}
.send_tab_selected{
    padding:28px;
    color:#F7931A;
    border-style: solid; 
    border-width: 0px 0px 5px 0px;
    border-color: #F7931A;
    font-weight:600;
}
.description_balance{
    padding-left: 20px;
}
#icon_container{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    padding:5px;
}

.icons{
    display:flex;
    padding: 5px;
}
img{
    align-self: center;
}
.description{
    color: #777777;
    line-height:16px;
}
.balance{
    line-height: 15.73px;
    color:#000000;

}
</style>