<template>
<div class="page">
    <div class="outer_container">
        <header>
            <h1>Tripwire Receive Address</h1>
            <h2>It is reccomended that you send ~$500 to your tripwire.</h2>
        </header>
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
        <div class="btn_container">
            <button @click="postpone()" class="btn2">Skip for Now</button>
            <button @click="markComplete()" class="btn">Done</Button>
        </div>
    </div>        
</div>
</template>


<!-- -download QR button not yet implemented  -->

<script>
export default {
  name: 'tripwirePostSetup2',
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
h1{
  margin-top: 50px;
  padding:10px;
}
  </style>