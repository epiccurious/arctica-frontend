<template>
<div class="page">
    <NavImmediate/>
    <Header title="Receive Bitcoin"/>
        <div class="receive_container">
            <div class="receive_top">
                <img src="@/assets/placeholderQR.png">
                <h2 id="receive_address">{{ address }}</h2>
            </div>
        </div>
</div>
</template>


<script>
import NavImmediate from '@/components/NavImmediate'
import Header from '@/components/Header'

export default {
  name: 'immediateReceive',
  components: {
    NavImmediate,
    Header
  },
  data(){
      return{
          address: 'bc1qyfgj82tfxndmjl237j6xdvvhxrrnfky'
      }
  }
}
</script>


<style>
.receive_container{
    border: 1px solid #EDEDED;
    border-radius: 5px;
    width: 450px;
}
.receive_top{
    display:flex;
    flex-direction: row;
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
  </style>