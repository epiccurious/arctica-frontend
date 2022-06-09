<template>
<header>
    <div id="nav_container"> 
        <div id="icon_container">
            <router-link class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link> 
            <router-link class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
        </div>
    </div>
</header>
</template>

<!-- Todo: 
-update icon image above to dynamically show current page selected
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