<!-- This screen will function as a popup that displays upon login if the user has a compromised tripwire -->

<template>
<div class="page">
    <header>
        <h1>Someone has performed a quick withdrawal from SD X</h1>
        <h2>If you did not spend this money, you should assume envelope X is compromised.</h2> 
        <h2>For your security, all of your funds should now be moved to a fresh Arctica wallet.</h2> 
    </header>
    
    <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I understand my security may be compromised</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Compromised',
  components: {
    },
    methods: {
            acknowledge(){
            console.log('user ack, tripwire compromised')
            store.commit('setTripwireHealthy', true)
            this.$router.push({ name: 'dashboard' })
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
