<template>
<DelayWarning v-if="warning" v-on:ackWarning="ackWarning"/>
<div v-else class="page">
    <NavDelayed/>
    <div class="outer_container">
      <div class="receive_head_container">
         <h1>Receive Bitcoin</h1>
       </div>
        <div class="receive_container">
            <div class="receive_top">
                <img src="@/assets/placeholderQR.png">
                <h2 class="receive_address">{{ address }}</h2>
            </div>
            <div class="receive_bottom">
                <div @click="copy(address)" id="copy">
                    <img src="@/assets/Copy.png">
                    <h2 class="copy_text">Copy Address</h2>
                </div>
                <div id="download">
                    <img src="@/assets/Arrow_down.png">
                    <h2 class="download_text">Download QR Code</h2>
                </div>
            </div>
        </div>
        <button @click="newAddress()" class="btn">New Address</Button>
    </div>        
</div>
</template>


<!-- -download QR button not yet implemented  -->

<script>
import NavDelayed from '@/components/NavDelayed'
import DelayWarning from './DelayWarning'

export default {
  name: 'delayedReceive',
  components: {
    NavDelayed,
    DelayWarning
  },
  methods: {
       async copy(s){
          await navigator.clipboard.writeText(s)
          alert('Copied Address!')
        },
        newAddress(){
          console.log('New address clicked')
        },
                ackWarning(){
        console.log('user acks time machine protocol')
        this.warning = false
      },
      },
  data(){
      return{
          address: 'bc1qyFgK82tfxndmjl237j6xdvvhxrrnfky',
          warning: true,
      }
  }
}
</script>


<style scoped>
h1{
  margin-top: 50px;
  padding:10px;
}
  </style>