<template>
<div class="page">
        <header>
        <h1>SD Card 4</h1>
        <h2>Please remove SD card 3 & insert SD card 4.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 4.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'four' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup7',
    methods: {
       async acknowledge(){
            const invoke = window.__TAURI__.invoke
            console.log('user ack, flashing SD 4')
            await invoke('create_bootable_usb').then((response) => console.log(response))
            invoke('print_rust', {data: 'inputed data'}).then((response) => console.log(response))

            //need to create persistence
            
            this.$router.push({ name: 'Setup8' })
            //eventually need to electronically mark SD 4 with a text file label here
            store.commit('setSetup4', true) //eventually replace this with virtual label
            //eventually need to mark SD 4 with a text file label here that directs secondary machine to jump to step 16 of set up

        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        return{
            checkbox: false,
            loading: false,
        }
    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

