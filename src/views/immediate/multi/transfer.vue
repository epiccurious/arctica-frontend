<template>
<div class="page">
    <header>
        <h1>Please insert a Transfer CD</h1>
        <h2>This is a blank CD(RW) that you will destroy after sending your transaction.</h2>
    </header>
    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted a transfer CD.</label>
                </div>
        </form>
        <div class="btn_container"> 
            <button v-if="currentSD == 1 && checkbox && this.psbtFound == true" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: 'immediateTransfer',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceeding to sign')
            this.$router.push({ name: 'sign1of2' })
        },
                warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        psbtFound(){
            return store.getters.getPSBTFound
        }
    },
    data(){
        return{
            checkbox:false
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
