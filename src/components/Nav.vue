<template>
<header>
    <div id="nav_container"> 
        <div id="menu_container">
            <div v-if="immediate" class="wallet_overview">
                <img src="@/assets/Wallet.png"/>
                immediate overview
            </div>
            <div v-else-if="delayed" class="wallet_overview">
                <img src="@/assets/Wallet.png"/>
                delayed overview
            </div>
            <div v-else class="spaceholder">
            </div>

            <div v-if="immediate" class="middle_menu">
                middle menu goes here
            </div>

            <div v-else-if="delayed" class="middle_menu">
                middle menu goes here
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
}
.spaceholder{
    width:50%;
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
</style>