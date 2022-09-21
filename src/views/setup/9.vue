<template>
<div class="page">
    <header>
        <h1>SD Card 6</h1>
        <h2>Please remove SD card 5 & insert SD card 6.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'six' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup9',
    methods: {
        async acknowledge(){
            const invoke = window.__TAURI__.invoke
            console.log('user ack, flashing SD 6')
            await invoke('create_bootable_usb').then((response) => console.log(response))
            invoke('print_rust', {data: 'inputed data'}).then((response) => console.log(response))

            //need to create persistence
            
            this.$router.push({ name: 'Setup10' })
            //eventually need to electronically mark SD 6 with a text file label here
            store.commit('setSetup6', true) //eventually replace this with virtual label
            //eventually need to mark SD 6 with a text file label here that directs primary machine to jump to step 18 of set up
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

