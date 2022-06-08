<template>
<header>
    <div id="nav_container"> 
        <div id="menu_container">
            <div v-if="immediate == true" class="wallet_overview">
                    <img src="@/assets/Wallet.png"/>
                    <div class="description_balance">
                    <h3 class="description">Immediate Wallet</h3>
                    <h3 class="balance">₿ 0.27847100</h3>
                    </div>
            </div>
            <div v-else-if="delayed == true" class="wallet_overview">
                    <img src="@/assets/Wallet.png"/>
                    <div class="description_balance">
                    <h3 class="description">Delayed Wallet</h3>
                    <h3 class="balance">₿ 0.27847100</h3>
                    </div>
            </div>
            <div v-else class="spaceholder">
            </div>

            <div v-if="immediate == true" class="middle_menu">
                <h2 class="wallet_tab">Wallet</h2> <h2 class="send_tab">Send</h2>  <h2 class="receive_tab">Receive</h2> 
            </div>

            <div v-else-if="delayed == true" class="middle_menu">
                <h2>Wallet Send Receive</h2>
            </div>

            <div v-else class="spaceholder">
            </div>
            <div id="icon_container">
                <router-link class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link> 
                <router-link class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
            </div>
        </div>
    </div>
</header>
</template>

<!-- Todo: 
-update icon image above to dynamically show current page selected
-conditionally render wallet selected in top left when within a wallet (immediate or delayed)
-conditionally render wallet/send/receieve in the middle when within a wallet (immedate or delayed)
-update middle menu to dynamically show current page selected
-hook up routes to middle menu links
 -->

<script>
import { RouterView, RouterLink } from "vue-router";
{
  RouterView;
  RouterLink
}

export default{
    name: 'Nav',
    props: {},
    methods: {},
    inject:[
        'immediate','delayed'
    ],
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
.spaceholder{
    width:50%;
}
.wallet_overview{
    display:flex;
    flex-direction: row;
    /* width:50%; */
}
.middle_menu{
    display:flex;
    flex-direction: row;
}
.wallet_tab{
    padding:25px;
}
.send_tab{
    padding:25px;
}
.receive_tab{
    padding:25px;
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
}
</style>