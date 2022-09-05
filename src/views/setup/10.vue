<template>
<div class="page">
    <header>
        <h1>SD Card 7</h1>
        <h2>Please remove SD card 6 & insert SD card 7.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 7.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'seven' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup10',
    methods: {
        async acknowledge(){
            const invoke = window.__TAURI__.invoke
            console.log('user ack, flashing SD 7')
            await invoke('create_bootable_usb').then((response) => console.log(response))
            invoke('print_rust', {data: 'inputed data'}).then((response) => console.log(response))

            //need to create persistence
            
            this.$router.push({ name: 'Setup11' })
            //eventually need to electronically mark SD 7 with a text file label here
            store.commit('setSetup7', true) //eventually replace this with virtual label
            //eventually need to mark SD 7 with a text file label here that directs primary machine to jump to step 19 of set up
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

