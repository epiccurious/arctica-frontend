<template>
<div class="page">
  <nav id="nav">Debug Nav bar:
    <router-link :to="{ name: 'Boot' }">Boot</router-link> 
    <router-link :to="{ name: 'welcome' }">Welcome</router-link> 
    <router-link :to="{ name: 'Login' }">Login</router-link> 
    <router-link :to="{ name: 'dashboard' }">Wallets</router-link>
    <router-link :to="{ name: 'settings' }">Settings</router-link>
    <router-link :to="{ name: 'hot' }">Hot</router-link>
    <router-link :to="{ name: 'hotSend' }">HotSend</router-link>
    <router-link :to="{ name: 'hotReceive' }">HotReceive</router-link>
    <router-link :to="{ name: 'immediate' }">Immediate</router-link>
    <router-link :to="{ name: 'immediateSend' }">ImmediateSend</router-link>
    <router-link :to="{ name: 'immediateReceive' }">ImmediateReceive</router-link>
    <router-link :to="{ name: 'delayed' }">Delayed</router-link>
    <router-link :to="{ name: 'delayedSend' }">DelayedSend</router-link>
    <router-link :to="{ name: 'delayedReceive' }">DelayedReceive</router-link>
    <router-link :to="{ name: 'Setup1' }">Setup-1</router-link>
    <router-link :to="{ name: 'Setup2' }">Setup-2</router-link>
    <router-link :to="{ name: 'Setup3' }">Setup-3</router-link>
    <router-link :to="{ name: 'Setup4' }">Setup-4</router-link>
    <router-link :to="{ name: 'Setup5' }">Setup-5</router-link>
    <router-link :to="{ name: 'Setup6' }">Setup-6</router-link>
    <router-link :to="{ name: 'Setup7' }">Setup-7</router-link>
    <router-link :to="{ name: 'Setup8' }">Setup-8</router-link>
    <router-link :to="{ name: 'Setup9' }">Setup-9</router-link>
    <router-link :to="{ name: 'Setup10' }">Setup-10</router-link>
    <router-link :to="{ name: 'Setup11' }">Setup-11</router-link>
    <router-link :to="{ name: 'Setup12' }">Setup-12</router-link>
    <router-link :to="{ name: 'Setup13' }">Setup-13</router-link>
    <router-link :to="{ name: 'Setup14' }">Setup-14</router-link>
    <router-link :to="{ name: 'Setup15' }">Setup-15</router-link>
    <router-link :to="{ name: 'Setup16' }">Setup-16</router-link>
    <router-link :to="{ name: 'Setup17' }">Setup-17</router-link>
    <router-link :to="{ name: 'Setup18' }">Setup-18</router-link>
    <router-link :to="{ name: 'Setup19' }">Setup-19</router-link>
    <router-link :to="{ name: 'Setup20' }">Setup-20</router-link>
    <router-link :to="{ name: 'Setup21' }">Setup-21</router-link>
    <router-link :to="{ name: 'Setup22' }">Setup-22</router-link>
    <router-link :to="{ name: 'Setup23' }">Setup-23</router-link>
    <router-link :to="{ name: 'Setup24' }">Setup-24</router-link>
    <router-link :to="{ name: 'Setup25' }">Setup-25</router-link>
    <router-link :to="{ name: 'Setup26' }">Setup-26</router-link>
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
      hotBalance: 0.12759374,
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}
.btn:hover{
  cursor:pointer;
}
.btn2 {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #000000;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
}
.btn2:hover{
  cursor:pointer;
}
.btn3 {
  background: #DEDEDE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
.btnclose{
  background-color: #FFFFFF;
  border:none;
  width: auto;
  height: fit-content;
}
.btnclose:hover{
  cursor:pointer;
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
::placeholder{
    color:#BBBBBB
}
input[type="checkbox"]{
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.form_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}
</style>
