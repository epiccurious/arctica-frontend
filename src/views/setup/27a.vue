<template>
<div class="page">
    <header>
        <h1>Insert the Setup CD</h1>
        <h2>Please insert the CD labelled "setup"</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the setup CD.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
export default {
  name: 'Setup27a',
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from setup CD to SD 2')
            this.$router.push({ name: 'Setup27b' })
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

