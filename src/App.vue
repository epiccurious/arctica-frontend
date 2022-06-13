<template>
<div class="page">
  <nav id="nav">Debug Nav bar:
    <router-link :to="{ name: 'Boot' }">Boot</router-link> 
    <router-link :to="{ name: 'welcome' }">Welcome</router-link> 
    <router-link :to="{ name: 'Login' }">Login</router-link> 
    <router-link :to="{ name: 'dashboard' }">Wallets</router-link>
    <router-link :to="{ name: 'settings' }">Settings</router-link>
    <router-link :to="{ name: 'immediate' }">Immediate</router-link>
    <router-link :to="{ name: 'immediateSend' }">ImmediateSend</router-link>
    <router-link :to="{ name: 'immediateReceive' }">ImmediateReceive</router-link>
    <router-link :to="{ name: 'delayed' }">Delayed</router-link>
    <router-link :to="{ name: 'delayedSend' }">DelayedSend</router-link>
    <router-link :to="{ name: 'delayedReceive' }">DelayedReceive</router-link>
  </nav>
  <!-- The above is just a debug menu, will be removed -->
  <router-view/>
</div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
{
  RouterView;
  RouterLink
}

export default {
  name: 'App',
  data(){
    return{

    }
  },
  provide: {
      immediateBalance: 0.27847143,
      delayedBalance: 12.05312325,
  }
}
</script>

<!-- Need to make props provided here and injected into nav dynamic with current selected wallet -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
#app {
  font-family: 'Inter';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 21px;
  color: #2c3e50;
  background: #FFFFFF;
  margin-top: 60px;
}
.btn {
  background: #F7931A;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}
.btn2 {
  background: #FFFFFF;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #000000;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
}
.btn3 {
  background: #DEDEDE;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  filter: blur(2px);
  -webkit-filter: blur(2px);
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}
.btn_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 21px;
}
#nav a{
  padding:5px;
}
.page{
  width:100%;
}
a{
  text-decoration: inherit;
  color: inherit;
}
</style>
