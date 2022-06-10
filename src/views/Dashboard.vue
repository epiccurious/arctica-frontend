<template>
  <div class="page">
    <Nav />
      <div class="dashboard">
        <div class="head_container">
          <h1>Wallets</h1>
        </div>
        <router-link class="wallet_container" :to="{ name: 'immediate' }">
            <div class="wallet_container_left">
            <h2>Immediate Wallet</h2>
            <h3>2 SD cards</h3>
            </div>
            <div class="wallet_container_right">
              <h2 class="balance">{{ immediateBalance }} BTC</h2>
              <span><img src="@/assets/carat_right.png"/></span>
            </div>
        </router-link> 

        <router-link class="wallet_container" :to="{ name: 'delayed' }">
          <div class="wallet_container_left">
          <h2>Delayed Wallet</h2>
          <h3>5 SD cards + 2 Time Machine Keys</h3>
          </div>
          <div class="wallet_container_right">
            <h2 class="balance">{{ delayedBalance }} BTC</h2>
            <span><img src="@/assets/carat_right.png"/></span>
          </div>
        </router-link> 
          <div class="decay_timer">
            <h3>Approximate time until next decay: 1 year & 162 days</h3>
          </div>
      </div>
  </div>
</template>


<script>
import Nav from '@/components/Nav'
import { RouterView, RouterLink } from "vue-router";
{
  RouterView;
  RouterLink
}

export default {
  name: 'Dashboard',
  components: {
    Nav
  },
    inject: ['immediateBalance', 'delayedBalance']
}
</script>

<style scoped>
.dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width:100%;
}
h1{
  margin-top: 50px;
  padding:10px;
}
.head_container{
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.wallet_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.wallet_container_left{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  width:50%;
}
.wallet_container_right{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items:center;
  align-content:center;
  width:50%;
}
.wallet_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
</style>