<template>
<div class="page">
    <NavImmediate/>
    <center>
    <h1>Receive Bitcoin</h1>
        <div class="receive_container">
            <div class="receive_top">
                <img src="@/assets/placeholderQR.png">
                <h2 id="receive_address">{{ address }}</h2>
            </div>
            <div class="receive_bottom">
                <div id="copy">
                    <img src="@/assets/Copy.png">
                    <h3>Copy Address</h3>
                </div>
                <div id="download">
                    <img src="@/assets/Arrow_down.png">
                    <h3>Download QR Code</h3>
                </div>
            </div>
        </div>
    </center>
</div>
</template>


<script>
import NavImmediate from '@/components/NavImmediate'

export default {
  name: 'immediateReceive',
  components: {
    NavImmediate,
  },
  data(){
      return{
          address: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky'
      }
  }
}
</script>


<style scoped>
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
    font-weight:400;
    font-size:16px;
    line-height: 20px;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on, 'zero' on;
    color: #777777;
    word-wrap: break-word;
}
#copy{
    display:flex;
    flex-direction: row;
    padding-bottom: 10px;
}
#download{
    display:flex;
    flex-direction: row;
    padding-bottom: 10px;
}
h1{
  margin-top: 50px;
  padding:10px;
}
h3{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
  </style>