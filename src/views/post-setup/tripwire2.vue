<template>
<div class="page">
    <div class="outer_container">
        <Header title="Tripwire Receive Address" subtitle="It is reccomended that you send ~$500 to your tripwire." />
        <div class="receive_container">
            <div class="receive_top">
                <img src="@/assets/placeholderQR.png">
                <h2 id="receive_address">{{ address }}</h2>
            </div>
            <div class="receive_bottom">
                <div @click="copy(address)" id="copy">
                    <img src="@/assets/Copy.png">
                    <h3 id="copy_text">Copy Address</h3>
                </div>
                <div id="download">
                    <img src="@/assets/Arrow_down.png">
                    <h3 id="download_text">Download QR Code</h3>
                </div>
            </div>
        </div>
        <div class="btn_container">
            <button @click="postpone()" class="btn2">Skip for Now</button>
            <button @click="markComplete()" class="btn">Done</Button>
        </div>
    </div>        
</div>
</template>


<!-- -download QR button not yet implemented  -->

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'tripwirePostSetup2',
  components: {
      Header
  },
  methods: {
       async copy(s){
          await navigator.clipboard.writeText(s)
          alert('Copied Address!')
        },
        markComplete(){
          console.log('Tripwire marked complete')
        },
        postpone(){
            console.log('User postponing tripwire funding')
        }
      },
  data(){
      return{
          address: 'bc1qyFgK82tfxndmjl237j6xdvvhxrrnfky'
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
    font-weight:400;
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
  text-align:left;
}
h3{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
.head_container{
  width: 30%;
}
  </style>