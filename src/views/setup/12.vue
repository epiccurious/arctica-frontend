<!-- User will be automatically brought to this screen by a text file present on SD 1 which informs arctica to redirect the user to this page (state variable setup1)-->

<template>
<div class="page">
    <header>
        <h1>Please insert the set up CD</h1>
        <h2>Insert the set up CD to continue.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the set up CD.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.setupCD == true && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup12',
    methods: {
        acknowledge(){
            console.log('user ack, loading pubkeys onto set up CD')
            this.$router.push({ name: 'Setup13' })
            //eventually need to add an electronic label in the form of a text file to the set up CD here that will inform arctica's global state when inserted
            //eventually only allow the user to proceed here if primary machine boolean is false
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        return{
            checkbox: false,
        }
    },
        computed:{
        setupCD(){
            return store.getters.getSetupCD
        },

    }
}
</script>

