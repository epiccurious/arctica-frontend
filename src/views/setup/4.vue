<template>
  <div v-if="this.loading == true">
  <Loader/>
  {{test}}
  </div>
<div v-else class="page">
    <header>
        <h1>SD Card 1</h1>
        <h2>Please insert SD card 1.</h2>
    </header>    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted SD card 1.</label>
                {{test}}
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
  name: 'Setup4',
  components: {
    Loader,
  },
    methods: {
        acknowledge() {
            //show loader
            this.loading = true
            this.test = "txt"
            invoke('create_bootable_usb', {number: this.test}).then(() => {
                this.test = "teste"
                this.loading = false
                invoke('print_rust', {data: this.test})
            })

            
            this.test = "test3"
            store.commit('setSetup1', true) //eventually replace this with  virtual label
            this.$router.push({ name:'Setup5' })                
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
            loading: false,
            test: "test"
        }
    },
}
</script>
