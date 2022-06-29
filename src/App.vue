<template>
<div class="page">
  <nav id="nav">Debug Nav bar:
    <router-link :to="{ name: 'Boot' }">Boot</router-link> 
    <router-link :to="{ name: 'welcome' }">Welcome</router-link> 
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
    <router-link :to="{ name: 'hotReceive' }">HotReceive</router-link>
    <router-link :to="{ name: 'immediate' }">Immediate</router-link>
    <router-link :to="{ name: 'immediateSend' }">ImmediateSend</router-link>
    <router-link :to="{ name: 'immediateReceive' }">ImmediateReceive</router-link>
    <router-link :to="{ name: 'delayed' }">Delayed</router-link>
    <router-link :to="{ name: 'delayedSend' }">DelayedSend</router-link>
    <router-link :to="{ name: 'TimeMachine1' }">Time-Machine-1</router-link>
    <router-link :to="{ name: 'TimeMachine2' }">Time-Machine-2</router-link>
    <router-link :to="{ name: 'TimeMachine3' }">Time-Machine-3</router-link>
    <router-link :to="{ name: 'TimeMachine4' }">Time-Machine-4</router-link>
    <router-link :to="{ name: 'TimeMachine5' }">Time-Machine-5</router-link>
    <router-link :to="{ name: 'TimeMachine6' }">Time-Machine-6</router-link>
    <router-link :to="{ name: 'TimeMachine7' }">Time-Machine-7</router-link>
    <router-link :to="{ name: 'TimeMachine8' }">Time-Machine-8</router-link>
    <router-link :to="{ name: 'TimeMachine9' }">Time-Machine-9</router-link>
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
    <router-link :to="{ name: 'Setup27' }">Setup-27</router-link>
    <router-link :to="{ name: 'Setup28' }">Setup-28</router-link>
    <router-link :to="{ name: 'Setup29' }">Setup-29</router-link>
    <router-link :to="{ name: 'Setup30' }">Setup-30</router-link>
    <router-link :to="{ name: 'Setup31' }">Setup-31</router-link>
    <router-link :to="{ name: 'Setup32' }">Setup-32</router-link>
    <router-link :to="{ name: 'Setup33' }">Setup-33</router-link>
    <router-link :to="{ name: 'Setup34' }">Setup-34</router-link>
    <router-link :to="{ name: 'Setup35' }">Setup-35</router-link>
    <router-link :to="{ name: 'Setup36' }">Setup-36</router-link>
    <router-link :to="{ name: 'Setup37' }">Setup-37</router-link>
    <router-link :to="{ name: 'Setup38' }">Setup-38</router-link>
    <router-link :to="{ name: 'Setup39' }">Setup-39</router-link>
    <router-link :to="{ name: 'Setup40' }">Setup-40</router-link>
    <router-link :to="{ name: 'Setup41' }">Setup-41</router-link>
    <router-link :to="{ name: 'Setup42' }">Setup-42</router-link>
    <router-link :to="{ name: 'Setup43' }">Setup-43</router-link>
    <router-link :to="{ name: 'Setup44' }">Setup-44</router-link>
    <router-link :to="{ name: 'Setup45' }">Setup-45</router-link>
    <router-link :to="{ name: 'Setup46' }">Setup-46</router-link>
    <router-link :to="{ name: 'Setup47' }">Setup-47</router-link>
    <router-link :to="{ name: 'Setup48' }">Setup-48</router-link>
    <router-link :to="{ name: 'Setup49' }">Setup-49</router-link>
    <router-link :to="{ name: 'Setup50' }">Setup-50</router-link>
    <router-link :to="{ name: 'Setup51' }">Setup-51</router-link>
    <router-link :to="{ name: 'tripwirePostSetup1' }">Tripwire-Post-Setup-1</router-link>
    <router-link :to="{ name: 'tripwirePostSetup2' }">Tripwire-Post-Setup-2</router-link>
    <router-link :to="{ name: 'duressPostSetup1' }">Duress-Post-Setup-1</router-link>
    <router-link :to="{ name: 'piiPostSetup1' }">Recovery-Post-Setup-1</router-link>
    <router-link :to="{ name: 'piiPostSetup2' }">Recovery-Post-Setup-2</router-link>
    <router-link :to="{ name: 'piiPostSetup3' }">Recovery-Post-Setup-3</router-link>
  </nav>
  <!-- The above is a debug menu, will be removed -->
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
      quickBalance: 0.000052,
      hotBalance: 0.12759374,
      immediateBalance: 0.27847143,
      delayedBalance: 12.05312325,
  }
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
input[type="checkbox"] {
  display: inline-block;
  width:16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 0px;
}
header{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center ;
    justify-content:center;
    padding: 0px 0px 25px;
    margin: 0 auto;
    margin-top: 5%;
}
form{
    max-width:420px;
    margin: 10px auto;
    text-align: left;
    padding:10px;
}
</style>
