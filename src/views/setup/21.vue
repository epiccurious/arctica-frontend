<template>
<div class="page">
    <header>
        <h1>Insert the Set up CD</h1>
        <h2>Please insert the CD labelled "set up"</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the Set up CD.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox && this.setupCD == true" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup21',
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from set up CD to SD 1')
            this.$router.push({ name: 'Setup22' })
        },
        //import all of the pubkeys on the setupCD here and create the descriptors
        //load descriptors into ramdisk
        //load descriptors onto SD 1
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    mounted(){
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            console.log('success')
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
    },
    data(){
        return{
            checkbox: false,
            setupStep: '15',
        }
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        },
        test(){
            return store.getters.getTest
        }
    }
}
</script>

