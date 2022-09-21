<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
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
import Loader from '@/components/loader'


export default {
  name: 'Setup10',
  components: {
    Loader,
  },
    methods: {
        acknowledge() {
            //show loader
            this.loading = true

            const invoke = window.__TAURI__.invoke
            console.log('user ack, flashing SD 7')

            setTimeout( () => {
            invoke('create_bootable_usb')
            .then((res) => console.log(JSON.parse(res))) 

            //remove loader
            this.loading = false;

            store.commit('setSetup7', true) //eventually replace this with virtual label
            this.$router.push({ name:'Setup11' })
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

