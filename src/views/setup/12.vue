<!-- User moves to secondary machine at this point -->

<template>
<div class="page">
    <Header title="Please insert the setup CD" subtitle="Insert setup CD to continue."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted the setup CD.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup12',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, loading pubkeys onto setup CD')
            this.$router.push({ path: '/setup/13' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

