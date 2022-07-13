<template>
<div class="page">
    <header>
        <h1>DVD 4 Backup</h1>
        <h2>Please remove CD 4 and insert DVD 4.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox" @click="checkSD()">
                <label for="checkbox">I have inserted DVD 4.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'four' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup36',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 4 to DVD 4')
            this.$router.push({ name: 'Setup37' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        checkSD(){
            this.currentSD = store.getters.getCurrentSD
        }

    },
    data(){
        return{
            checkbox: false,
            currentSD: store.getters.getCurrentSD
        }
    }
}
</script>

