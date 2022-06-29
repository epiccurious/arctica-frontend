<template>
  <div v-if="readyToWork == false" class="loading">
  <header>
    <h1>Welcome to Arctica</h1>
    <h2>Hang Tight. We are checking on a few things.</h2>
  </header>
    <div class="btn_container"> 
        <button class="btn3">Log in</Button>
        <button @click="greenLight()" class="btn2">Debug - simulate green light</button>
    </div>
  </div>


  <div v-else class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Everything looks good. Glad to have you back.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="login()" class="btn">Log in</Button>
        <button @click="quickWithdrawal()" class="btn2">Quick Withdrawal - $500</button>
    </div>
  </div>
</template>

<!-- This screen is where we will eventually:
-check for PSBTs
-ensure Bitcoin Core is synced
-check for a BPS connection
-check the tripwire
-Check for any published time machine keys/privacy keys -->

<!-- Quick withdrawal button should eventually grey out if the balance has been swept/accessed -->


<script>
export default {
  name: 'Welcome',
    methods: {
        login(){
            this.$router.push({ path: '/login' })
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
            this.$router.push({ path: '/quick' })
        },
        greenLight(){
          console.log('green light given, this is currently a debug feature only and does nothing except enable you to proceed')
          this.readyToWork = true
        }
    },
    data(){
      return{
        readyToWork: false,
      }
    }
}
</script>

<style scoped>
.loading{
  cursor:wait;
}

.btn3{
  cursor:wait;
}
</style>

