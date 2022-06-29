<template>
<Duress2 v-if="passwordSetup" v-on:goBack="goBack" :password="password2"/>
<div v-else class="page">
<Header title="Please update your contact information" subtitle="In order to ensure your Time Machine Operator can contact you, plase provide current contact information."/>
      <div class="form_container">
        <form>
                    <label>Enter Phone Number</label>
                   <br><input v-model="phone1" type="text" required placeholder="Your preferred contact number">

                    <br><label>Confirm Phone Number</label>
                   <br><input v-model="phone2" type="text" required placeholder="Your preferred contact number">

        </form>
        <div class="btn_container"> 
            <button v-if="phone1 == phone2 && phone1 != '' && phone2 != '' " @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 

</div>

</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'TimeMachine2',
  components: {
    Header,
  },
    methods: {
        acknowledge(){
            console.log('user ack, gathering contact phone number')
            this.$router.push({ path: '/delayed/timemachine/3' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },


    },
    data(){
        return{
            phone1: '',
            phone2: '',
        }
    }
}
</script>

