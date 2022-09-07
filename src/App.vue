<template>
<div class="page">
  <router-view/>
  <hr>
  <Debug/>
   <nav id="nav">Debug Nav bar:
    <router-link :to="{ name: 'Debug' }">Debug(toggles)</router-link> 
    <router-link :to="{ name: 'welcome' }">Welcome</router-link> 
    <router-link :to="{ name: 'Boot' }">Boot</router-link> 
    <router-link :to="{ name: 'Login' }">Login</router-link> 
    <router-link :to="{ name: 'BPS_Bricked' }">BPSBricked</router-link> 
    <router-link :to="{ name: 'Recovery' }">Recovery</router-link> 
    <router-link :to="{ name: 'RecoveryInitiate' }">RecoveryInitiate</router-link> 
    <router-link :to="{ name: 'quick1' }">Quick1</router-link> 
    <router-link :to="{ name: 'quick2' }">Quick2</router-link> 
    <router-link :to="{ name: 'Compromised' }">TripwireCompromised</router-link> 
    <router-link :to="{ name: 'dashboard' }">Wallets</router-link>
    <router-link :to="{ name: 'settings' }">Settings</router-link>
    <router-link :to="{ name: 'hot' }">Hot</router-link>
    <router-link :to="{ name: 'hotSend' }">HotSend</router-link>
    <router-link :to="{ name: 'hotSignMultioutput' }">Hot-Sign-Multioutput</router-link>
    <router-link :to="{ name: 'hotReceive' }">HotReceive</router-link>
    <router-link :to="{ name: 'immediate' }">Immediate</router-link>
    <router-link :to="{ name: 'immediateSend' }">ImmediateSend</router-link>
    <router-link :to="{ name: 'immediateReceive' }">ImmediateReceive</router-link>
    <router-link :to="{ name: 'delayed' }">Delayed</router-link>
    <router-link :to="{ name: 'delayedSend' }">DelayedSend</router-link>
    <router-link :to="{ name: 'sign1of5' }">Sign(1of5)</router-link>
    <router-link :to="{ name: '1of5success' }">1of5-success</router-link>
    <router-link :to="{ name: 'sign2of5' }">Sign(2of5)</router-link>
    <router-link :to="{ name: '2of5success' }">2of5-success</router-link>
    <router-link :to="{ name: 'sign3of5' }">Sign(3of5)</router-link>
    <router-link :to="{ name: '3of5success' }">3of5-success</router-link>
    <router-link :to="{ name: 'sign4of5' }">Sign(4of5)</router-link>
    <router-link :to="{ name: '4of5success' }">4of5-success</router-link>
    <router-link :to="{ name: 'sign5of5' }">Sign(5of5)</router-link>
    <router-link :to="{ name: '5of5success' }">5of5-success</router-link>
    <router-link :to="{ name: 'delayedReceive' }">DelayedReceive</router-link>
    <router-link :to="{ name: 'TimeMachine1' }">Time-Machine-1</router-link>
    <router-link :to="{ name: 'TimeMachine2' }">Time-Machine-2</router-link>
    <router-link :to="{ name: 'TimeMachine3' }">Time-Machine-3</router-link>
    <router-link :to="{ name: 'TimeMachine4' }">Time-Machine-4</router-link>
    <router-link :to="{ name: 'TimeMachine5' }">Time-Machine-5</router-link>
    <router-link :to="{ name: 'TimeMachine6' }">Time-Machine-6</router-link>
    <router-link :to="{ name: 'TimeMachine7' }">Time-Machine-7</router-link>
    <router-link :to="{ name: 'TimeMachine8' }">Time-Machine-8</router-link>
    <router-link :to="{ name: 'TimeMachine9' }">Time-Machine-9</router-link>
    <router-link :to="{ name: 'Setup1' }">Setup-1</router-link>
    <router-link :to="{ name: 'Setup2' }">Setup-2</router-link>
    <router-link :to="{ name: 'Setup3' }">Setup-3</router-link>
    <router-link :to="{ name: 'Setup4' }">Setup-4</router-link>
    <router-link :to="{ name: 'Setup4a' }">Setup-4a</router-link>
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
    <router-link :to="{ name: 'Setup27a' }">Setup-27a</router-link>
    <router-link :to="{ name: 'Setup27b' }">Setup-27b</router-link>
    <router-link :to="{ name: 'Setup28' }">Setup-28</router-link>
    <router-link :to="{ name: 'Setup29' }">Setup-29</router-link>
    <router-link :to="{ name: 'Setup30' }">Setup-30</router-link>
    <router-link :to="{ name: 'Setup31a' }">Setup-31a</router-link>
    <router-link :to="{ name: 'Setup31b' }">Setup-31b</router-link>
    <router-link :to="{ name: 'Setup32' }">Setup-32</router-link>
    <router-link :to="{ name: 'Setup33' }">Setup-33</router-link>
    <router-link :to="{ name: 'Setup34' }">Setup-34</router-link>
    <router-link :to="{ name: 'Setup35a' }">Setup-35a</router-link>
    <router-link :to="{ name: 'Setup35b' }">Setup-35b</router-link>
    <router-link :to="{ name: 'Setup36' }">Setup-36</router-link>
    <router-link :to="{ name: 'Setup37' }">Setup-37</router-link>
    <router-link :to="{ name: 'Setup38' }">Setup-38</router-link>
    <router-link :to="{ name: 'Setup39a' }">Setup-39a</router-link>
    <router-link :to="{ name: 'Setup39b' }">Setup-39b</router-link>
    <router-link :to="{ name: 'Setup40' }">Setup-40</router-link>
    <router-link :to="{ name: 'Setup41' }">Setup-41</router-link>
    <router-link :to="{ name: 'Setup42' }">Setup-42</router-link>
    <router-link :to="{ name: 'Setup43a' }">Setup-43a</router-link>
    <router-link :to="{ name: 'Setup43b' }">Setup-43b</router-link>
    <router-link :to="{ name: 'Setup44' }">Setup-44</router-link>
    <router-link :to="{ name: 'Setup45' }">Setup-45</router-link>
    <router-link :to="{ name: 'Setup46' }">Setup-46</router-link>
    <router-link :to="{ name: 'Setup47a' }">Setup-47a</router-link>
    <router-link :to="{ name: 'Setup47b' }">Setup-47b</router-link>
    <router-link :to="{ name: 'Setup48' }">Setup-48</router-link>
    <router-link :to="{ name: 'Setup49a' }">Setup-49a</router-link>
    <router-link :to="{ name: 'Setup49b' }">Setup-49b</router-link>
    <router-link :to="{ name: 'Setup50a' }">Setup-50a</router-link>
    <router-link :to="{ name: 'Setup50b' }">Setup-50b</router-link>
    <router-link :to="{ name: 'Setup51' }">Setup-51</router-link>
    <router-link :to="{ name: 'tripwirePostSetup1' }">Tripwire-Post-Setup-1</router-link>
    <router-link :to="{ name: 'tripwirePostSetup2' }">Tripwire-Post-Setup-2</router-link>
    <router-link :to="{ name: 'duressPostSetup1' }">Duress-Post-Setup-1</router-link>
    <router-link :to="{ name: 'piiPostSetup1' }">Recovery-Post-Setup-1</router-link>
    <router-link :to="{ name: 'piiPostSetup2' }">Recovery-Post-Setup-2</router-link>
    <router-link :to="{ name: 'piiPostSetup3' }">Recovery-Post-Setup-3</router-link>
  </nav>
  <!-- The above is a debug menu, will be removed -->
</div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
{
  RouterView;
  RouterLink
}
import Debug from './views/Debug.vue'

export default {
  name: 'App',
  components: {
    Debug
  },
}
</script>

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
  color: #2c3e50;
  background: #FFFFFF;
}
hr {
       display: block;
       position: relative;
       padding: 0;
       margin: 8px auto;
       height: 0;
       width: 100%;
       max-height: 0;
       font-size: 1px;
       line-height: 0;
       clear: both;
       border: none;
       border-top: 1px solid #aaaaaa;
       border-bottom: 1px solid #ffffff;
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
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}
.btn4 {
  background: #FFFFFF;
  color: #000000;
  width: 150px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;
  margin-right: 10px;
}
.btn5{
    padding:5px;
}
.btn6 {
  background: #DEDEDE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width: auto;
    height: fit-content;
    border:none;
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    font-weight:500;
    font-size:18px;
    line-height: 18px;
}
.btnclose:hover{
  cursor:pointer;
}
.btn_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items:center;
  align-items: center;
  padding: 0px;
  gap: 21px;
}
.btn_approve{
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.horizontal_btn_container{
    margin-top: 2%;
}
#nav{
  margin-top:60px;
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
.blue_link{
    color:#2D9CDB;
}
.form_container{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
#copy{
    display:flex;
    flex-direction: row;
    padding-bottom: 10px;
}
#copy:hover{
    cursor:pointer
}
#copy_text:hover{
    cursor:pointer;
}
#download{
    display:flex;
    flex-direction: row;
    padding-bottom: 10px;
}
#download:hover{
    cursor:pointer
}
#download_text:hover{
    cursor:pointer;
}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    font-size: 18px;
    font-weight:400;
    line-height:140%; 
}
input[type="checkbox"] {
  display: inline-block;
  width:16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 5px;
}
select{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    background-color:#FFFFFF;
    
}
.checkbox_container{
    display:flex;
    flex-direction: row;
    width:100%;
}
.lg_checkbox_container{
    display:flex;
    flex-direction: row;
    width:100%;
    margin-left:10%; 
}
form{
    max-width:420px;
    margin: 10px auto;
    text-align: left;
    padding:10px;
}
.send_form{
    max-width:70%;
    width: 60%;
    margin: 10px auto;
    text-align: left;
    padding-top:5px;
    padding-left:15px;
    padding-right:15px;
    padding-bottom:15px;
}
label{
    display:inline-block;
    margin: 25px 0 15px;
    font-size: 20px;
}
header{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content:center;
    padding: 0px 0px 25px;
    margin: 0 auto;
    margin-top: 5%;
    width:19%;
}
.head_container{
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
  margin-top: 40px;
  padding:10px;
}
.receive_head_container{
  width: 30%;
  margin-top: 40px;
  padding:10px;
}
.send_head_container{
margin: 0 auto;
width: 44%;
margin-top: 40px;
padding:10px;
}
.balance_overview{
  color:#404040;
  text-align:right;
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
.carat{
  margin-top:0.5%;
}
.wallet_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 140%;
    text-align:left;
}
h2{
    font-family: 'Inter';
    font-style: normal;
    color: #777777;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    text-align:left;
}
h3{
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
}
.dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width:60%;
  margin-left:20%;
}
.settings_dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width:40%;
  margin-left:30%;
}
.display_block{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 4%;
    width: 40%;
}
.description_block{
    display:flex;
    align-self:center;
    justify-self:center;
    width:100%;
}
.footer_block{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    width:90%;
}
.transaction_head{
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
    
}
.tx_block{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content:center;
    width:90%;
    border-style: solid; 
    border-width: 0px 0px 1px 0px;
    border-color: #DEDEDE;
}
.nav_container{
    width:100%;
    height: 100px;
    border-style: solid; 
    border-width: 0px 0px 1px 0px;
    border-color: #DEDEDE;
    margin-top:10px;
}
.icon_container{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content:center;
    padding:5px;
}
.icons{
    display:flex;
    padding: 5px;
}
.outer_container{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.send_container{
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width:70%;
    margin: 0 auto;
}
.balance_left{
    display:flex;
    flex-direction: column;
    align-items:flex-start;
}
.balance_calculator{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items:center;
}
.send_button_container{
    display:flex;
    flex-direction: row;
}
.receive_container{
    border: 1px solid #EDEDED;
    border-radius: 5px;
    box-sizing:border-box;
    padding:15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width:35%;
    margin: 25px auto;
}
.receive_top{
    display:flex;
    flex-direction: row;
}
.receive_bottom{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    padding-left: 18px;
    padding-right: 18px;
}
.receive_address{
    font-size:16px;
    line-height: 20px;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on, 'zero' on;
    color: #777777;
    word-wrap: break-word;
    align-self:center;
}
.copy_text{
    color:#000000;
    font-size:14px;
    line-height: 17px;
}
.download_text{
    color:#000000;
    font-size:14px;
    line-height: 17px;
}
.transaction_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.transaction_container:hover{
    cursor:pointer
}
.transaction_container_left{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  width:50%;
}
.transaction_container_right{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
  align-content:center;
  width:50%;
}
.settings_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.item_container_left{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  width:50%;
}
.item_container_right{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items:center;
  align-content:center;
  width:50%;
}
.menu_container{ 
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
.description{
    color: #777777;
    line-height:16px;
}
.balance{
    line-height: 15.73px;
    color:#000000;

}
.loading{
  cursor:wait;
}
html.waiting{
  cursor:wait;
}
.strong_text{
    font-weight:800;
}
</style>
