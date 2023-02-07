<template>
<div class="page">
<header>
<h1>Package 6 is now complete.</h1>
<h2>Pleae remove DVD 6 and SD 6.</h2>
 <h2>Place SD card 6, and backups CD 6 and DVD 6 into Envelope 6.</h2> 
 <h2>This envelope should be stored somewhere...[placeholder text]</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #6 devices have been placed into Envelope 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 

</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup45',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 6 completed')
            this.$router.push({ name: 'Setup46' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
            setupStep: '0',
        }
    },
    mounted(){
        //update sd card setupstep to 0
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            console.log('success')
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
                store.commit('setErrorMessage', 'Error with async write Error code Setup45-1')
                this.$router.push({ name:'Error' })
            })
    },
}
</script>
