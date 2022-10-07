<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
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
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Loader from '@/components/loader'
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup7',
  components: {
    Loader,
  },
  methods: {
        acknowledge() {
            //show loader
            this.loading = true
            invoke('create_bootable_usb', {number: this.sd, setup: this.setupStep}).then(() => {
                this.loading = false
                store.commit('setSetup4', true) //eventually replace this with  virtual label
                this.$router.push({ name:'Setup8' })   
                invoke('print_rust', {data: this.sd})
            })
             
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
            loading: false,
            sd: "4",
            setupStep: '4'
        }
    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

