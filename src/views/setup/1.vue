<template>
  <div class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Let's begin the set up process.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Get Started</Button>
    </div>
  </div>
<ProgressBar/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'Setup1',
  components: {
    ProgressBar
  },
    methods: {
       acknowledge(){
        this.$router.push({ name:'Setup3' })
        },
      },
    data(){
        return{
        }
    }
}
</script>

