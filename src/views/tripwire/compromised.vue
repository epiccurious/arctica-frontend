<!-- This screen will function as a popup that displays upon login if the user has a compromised tripwire -->

<template>
<div class="page">
    <header>
        <h1>Someone has performed a quick withdrawal from SD {{ this.tripped }}</h1>
        <h2>If you did not spend this money, you should assume envelope {{ this.tripped }} is compromised.</h2> 
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
            //this currently just turns off the debug switch for tripwire1, needs to be more dyanmic eventually
            store.commit('setTripwire1Healthy', true)
            this.$router.push({ name: 'dashboard' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
            tripped: '',
        }
    },
    computed:{
        tripwire1(){
            return store.getters.getTripwire1Healthy
        },
        tripwire2(){
            return store.getters.getTripwire2Healthy
        },
        tripwire3(){
            return store.getters.getTripwire3Healthy
        },
        tripwire4(){
            return store.getters.getTripwire4Healthy
        },
        tripwire5(){
            return store.getters.getTripwire5Healthy
        },
        tripwire6(){
            return store.getters.getTripwire6Healthy
        },
        tripwire7(){
            return store.getters.getTripwire7Healthy
        },
        
    },
    mounted(){
                if(this.tripwire1 == false){
            this.tripped = 'one'
        }else if(this.tripwire2 == false){
            this.tripped = 'two'
        }else if(this.tripwire3 == false){
            this.tripped = 'three'
        }else if(this.tripwire4 == false){
            this.tripped = 'four'
        }else if(this.tripwire5 == false){
            this.tripped = 'five'
        }else if(this.tripwire6 == false){
            this.tripped = 'six'
        }else if(this.tripwire7 == false){
            this.tripped = 'seven'
        }
    }
}
</script>
