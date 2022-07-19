<template>
<div class="page">
    <header>
        <h1>Remove the 'Setup' CD</h1>
        <h2>Please remove the Setup CD at this time.</h2>
    </header> 
        <div class="form_container">
            <form>
                <div class="checkbox_container">
                    <input type="checkbox" v-model="checkbox" name="checkbox">
                    <label for="checkbox">I have removed the Setup CD.</label>
                </div>
            </form>
        </div>
        <div class="btn_container"> 
            <button v-if="checkbox && this.setupCD == false" @click="acknowledge()" class="btn">Ok</Button> 
            <button v-else  @click="warn()" class="btn3">Ok</button>
        </div>

</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup22',
    methods: {
        acknowledge(){
            console.log('user ack, proceed')
                this.$router.push({ name: 'Setup23' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        }
    },
    data(){
        return{
            checkbox: false
        }
    }
}
</script>

