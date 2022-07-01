<template>
<div class="page"></div>
    <Nav/>
      <div class="dashboard">
        <div class="head_container">
          <h1>Settings</h1>
        </div>

        <div class="settings_container">
          <div class="item_container_left">
          <h2>Security</h2>
          </div>
          <div class="item_container_right">
            <h2>Label</h2>
            <span><img src="@/assets/carat_right.png"/></span>
          </div>
        </div>

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Fiat Currency</h2>
                </div>
                <div class="item_container_right">
                    <h2>$ USD</h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Bitcoin Units</h2>
                </div>
                <div class="item_container_right">
                    <h2>Sat, BTC</h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Network</h2>
                </div>
                <div class="item_container_right">
                    <h2>Mainnet</h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Notifications</h2>
                </div>
                <div class="item_container_right">
                    <h2></h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Language</h2>
                </div>
                <div class="item_container_right">
                    <h2>English</h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>      

        <div class="settings_container">
                <div class="item_container_left">
                <h2>Dark Mode</h2>
                </div>
                <div class="item_container_right">
                    <h2>Disabled</h2>
                    <span><img src="@/assets/carat_right.png"/></span>
                </div>
                </div>

      </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Settings',
  components: {
    Nav
  }
}
</script>

<style scoped>
h2{
  color:#000000;
}
</style>