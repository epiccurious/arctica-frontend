<template>
<header>
    <div id="nav_container"> 
        <div id="icon_container">
            <router-link v-if="dash" class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets_selected.png"></router-link>
            <router-link v-else class="icons" :to="{ name: 'dashboard' }"><img src="@/assets/wallets.png"></router-link>  
            <router-link v-if="settings" class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings_selected.png"></router-link>
            <router-link v-else class="icons" :to="{ name: 'settings' }"><img src="@/assets/settings.png"></router-link>
        </div>
    </div>
</header>
</template>


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
    align-items: center;
    align-content:center;
    padding-top:40px;
}

.icons{
    padding: 5px;
}
</style>