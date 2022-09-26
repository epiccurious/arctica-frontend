<template>
  <div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
        <header>
        <h1>SD Card 5</h1>
        <h2>Please remove SD card 4 & insert SD card 5.</h2>
        </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 5.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'five' && checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup8',
  components: {
    Loader,
  },
  methods: {
        acknowledge() {
            //show loader
            this.loading = true
            invoke('create_bootable_usb', {number: this.sd, setup: this.setupStep}).then(() => {
                this.loading = false
                store.commit('setSetup5', true) //eventually replace this with  virtual label
                this.$router.push({ name:'Setup9' })   
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
            sd: "5",
            setupStep: '5'
        }
    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>

