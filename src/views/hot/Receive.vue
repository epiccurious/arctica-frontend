<template>
<div class="page">
    <NavHot/>
    <div class="outer_container">
        <div class="head_container">
         <h1>Receive Bitcoin</h1>
         </div>
        <div class="receive_container">
            <div class="receive_top">
                <img src="@/assets/placeholderQR.png">
                <h2 id="receive_address">{{ address }}</h2>
            </div>
            <div class="receive_bottom">
                <div @click="copy(address)" id="copy">
                    <img src="@/assets/Copy.png">
                    <h2 id="copy_text">Copy Address</h2>
                </div>
                <div id="download">
                    <img src="@/assets/Arrow_down.png">
                    <h2 id="download_text">Download QR Code</h2>
                </div>
            </div>
        </div>
        <button @click="newAddress()" class="btn">New Address</Button>
    </div>        
</div>
</template>


<!-- 
Todo:
-download QR button not yet implemented -->

<script>
import NavHot from '@/components/NavHot'

export default {
  name: 'hotReceive',
  components: {
    NavHot,
  },
  methods:{
        async copy(s){
        await navigator.clipboard.writeText(s)
        alert('Copied Address!')
        },
        newAddress(){
            console.log('new address clicked')
        },
  },
  data(){
      return{
          address: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky'
      }
  }
}
</script>


<style scoped>
.outer_container{
    display:flex;
    flex-direction: column;
    align-items: center;
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
#receive_address{
    font-size:16px;
    line-height: 20px;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on, 'zero' on;
    color: #777777;
    word-wrap: break-word;
    align-self:center;
}
h1{
  margin-top: 50px;
  padding:10px;
}
#copy_text{
    color:#000000;
    font-size:14px;
    line-height: 17px;
}
#download_text{
    color:#000000;
    font-size:14px;
    line-height: 17px;
}
.head_container{
  width: 30%;
}
  </style>