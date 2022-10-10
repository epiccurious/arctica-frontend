<template>
<div class="page">
    <header>
        <h1>DVD 1 Backup</h1>
        <h2>Please remove CD 1 and insert DVD 1.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted DVD 1.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 1 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup24',
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from SD 1 to DVD 1')
            this.$router.push({ name: 'Setup25' })
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
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

