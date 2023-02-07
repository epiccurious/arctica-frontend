<template>
  <div v-if="this.loading == true">
  <Loader/>
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
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup4',
  components: {
    Loader,
  },
    methods: {
        acknowledge() {
            this.loading = true
            store.commit('setLoadMessage', 'Creating SD 1...')
            invoke('create_bootable_usb', {number: this.sd, setup: this.setupStep}).then((res) => {
                store.commit('setTest', `SD card initialized with config sdnumber:${this.sd} and setupStep:${this.setupStep}`)
                store.commit('setTest', `create bootable SD 1 completed: ${res}`)
                this.loading = false
                this.$router.push({ name:'Setup5' })   
            })
            .catch((e) => {
                store.commit('setTest', `create bootable error: ${e}`)
                store.commit('setErrorMessage', 'Error creating bootable. Error code Setup4-1')
                this.$router.push({ name:'Error' })
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
            sd: "1",
            setupStep: '1'
        }
    },
    computed: {
        test(){
      return store.getters.getTest
    }
    },
}
</script>
