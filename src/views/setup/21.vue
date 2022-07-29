<template>
<div class="page">
    <header>
        <h1>Insert the Set up CD</h1>
        <h2>Please insert the CD labelled "set up"</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the Set up CD.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox && this.setupCD == true" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
export default {
  name: 'Setup21',
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from set up CD to SD 1')
            this.$router.push({ name: 'Setup22' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        store.commit('setSetup8', false) //eventually change this to remove virtual label
        store.commit('setSetup15', true) //eventually change this to add virtual label
        return{
            checkbox: false,
        }
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        }
    }
}
</script>

