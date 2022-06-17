<template>
  <div v-if="readyToWork == false" class="loading">
<Header title="Welcome to Arctica" subtitle="Hang Tight. We are checking on a few things. "/>
    <div class="btn_container"> 
        <button class="btn3">Log in</Button>
        <button @click="greenLight()" class="btn2">Debug - simulate green light</button>
    </div>
  </div>


  <div v-else class="login">
<Header title="Welcome to Arctica" subtitle="Everything looks good. Glad to have you back."/>
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


<script>
import Header from '@/components/Header'

export default {
  name: 'Welcome',
  components: {
    Header,
    },
    methods: {
        login(){
            this.$router.push({ path: '/login' })
        },
        quickWithdrawal(){
            console.log('quick withdrawal clicked')
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

