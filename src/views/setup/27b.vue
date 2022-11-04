<template>
<div class="page">
    <header>
        <h1>CD 2 Backup</h1>
        <h2>Please remove the Set up CD and insert CD 2.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 2.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 2 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup27b',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 2 to CD 2')
            this.$router.push({ name: 'Setup28' })
            //copy setupCD to ramdisk
            //copy descriptors onto SD 2 encrypted dir, see setup 22 for example
            //fully backup SD 2 here
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        //remove virtual label here
        return{
            checkbox: false,
        }
    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
    }
}
</script>

