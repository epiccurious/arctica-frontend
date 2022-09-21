<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>

  <div v-else class="login">
    <header>
      <h1>Welcome to Arctica</h1>
      <h2>Let's begin the set up process.</h2>
    </header>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Get Started</Button>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/loader'
export default {
  name: 'Setup1',
  components: {
    Loader,
  },
    methods: {
       acknowledge(){
          //show loader
          this.loading = true;

          //create bitcoin dotfile on local machine
          const invoke = window.__TAURI__.invoke
          setTimeout( () => {
            invoke('make_bitcoin_dotfile')
            .then((res) => console.log(JSON.parse(res))) 
            this.loading = false;
            this.$router.push({ name:'Setup2' })
          }
            , 3000 )           
        },
    },
    data(){
        return{
          loading: false,
        }
    }
}
</script>

