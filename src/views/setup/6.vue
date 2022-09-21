<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
        <header>
        <h1>SD Card 3</h1>
        <h2>Please remove SD card 2 & insert SD card 3.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 3.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'three' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Loader from '@/components/loader'
import store from '../../store.js'

export default {
  name: 'Setup6',
  components: {
    Loader,
  },
    methods: {
    acknowledge() {

        //show loader
        this.loading = true

        const invoke = window.__TAURI__.invoke
        console.log('user ack, flashing SD 3')
        invoke('create_bootable_usb')
        .then((res) => console.log(JSON.parse(res))) 
        
        setTimeout( () => {

        //remove loader
        this.loading = false;

        store.commit('setSetup3', true) //eventually replace this with virtual label
        this.$router.push({ name:'Setup7' })
        }
        , 10000 )   
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

