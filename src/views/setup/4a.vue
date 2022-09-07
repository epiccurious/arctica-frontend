<template>
<div class="page">
    <header>
        <h1>SD Card 1</h1>
        <h2>Please insert SD card 1.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 1.</label>
                </div>
        </form>
        <div class="btn_container"> 
            <button v-if="currentSD == 'one' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup4a',
    methods: {
        async acknowledge() {

            const invoke = window.__TAURI__.invoke
            console.log('user ack, flashing SD 1')
            await invoke('create_bootable_usb').then((response) => console.log(response))
            invoke('print_rust', {data: 'inputed data'}).then((response) => console.log(response))

            //need to create persistence here

            //need to create virtual label here

            //need to install arctica here


            this.$router.push({ name: 'Setup5' })
            //eventually need to electronically mark SD 1 with a text file label here and after doing so update global state
            store.commit('setSetup1', true) //eventually replace this with virtual label
            //eventually need to mark SD 1 with a text file label here that directs secondary machine to jump to step 12 of set up
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
    computed: {
        currentSD(){
            return store.getters.getCurrentSD
        }
    },
}
</script>

<style scoped>

</style>