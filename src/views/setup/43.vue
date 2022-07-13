<template>
<div class="page">
    <header>
        <h1>CD 6 Backup</h1>
        <h2>Please insert CD 6.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'six' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup43',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 6 to CD 6')
            this.$router.push({ name: 'Setup44' })
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

