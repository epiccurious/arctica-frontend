<template>
    <div v-if="this.loading ==true">
    <Loader />
    </div>
    <div v-else class="page">
    <header>
        <h1>Remove the 'Set up' CD</h1>
        <h2>Please remove the Set up CD at this time.</h2>
    </header> 
        <div class="form_container">
            <form>
                <div class="checkbox_container">
                    <input type="checkbox" v-model="checkbox" name="checkbox">
                    <label for="checkbox">I have removed the Set up CD.</label>
                </div>
            </form>
        </div>
        <div class="btn_container"> 
            <button v-if="checkbox == false" @click="acknowledge()" class="btn">Ok</Button> 
            <button v-else  @click="warn()" class="btn3">Ok</button>
        </div>

</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup22',
  components: {
        Loader,
      },
    methods: {
        acknowledge(){
            console.log('user ack, proceed')
                this.$router.push({ name: 'Setup23' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        }
    },
    data(){
        return{
            checkbox: false,
            setupStep: 15,
            loading: false
        }
    },
    mounted(){
        this.loading = true    
        //copy everything from the setup CD to ramdisk
        invoke('copy_setup_cd').then((res) => {
            store.commit('setTest', `reading setup CD ${res}`)
            }).catch((e) => {
                store.commit('setTest', `error reading setup CD: ${e}`)
            })

        //create the descriptors and export to the setupCD
        invoke('create_descriptor').then((res) => {
            store.commit('setTest', `creating descriptors ${res}`)
            }).catch((e) => {
                store.commit('setTest', `error creating descriptors: ${e}`)
            })

        //extract masterkey from setupCD dump and place it inside /mnt/ramdisk
        invoke('extract_masterkey').then((res) => {
            store.commit('setTest', `extracting masterkey from setupCD dump ${res}`)
            }).catch((e) => {
                store.commit('setTest', `error extracting masterkey: ${e}`)
            })

        //unpack() the encrypted dir on SD 1
        invoke('unpack').then((res) => {
            store.commit('setTest', `unpacking sensitive info ${res}`)
            }).catch((e) => {
                store.commit('setTest', `error unpacking sensitive info: ${e}`)
            })        

        //copy the descriptors in ramdisk to sensitive dir
        //THIS STEP IS NOT NEEDED HERE BECAUSE CREATE DESCRIPTOR HANDLES THE COPYING
        //THIS IS A PLACEHOLDER FOR FLOW IN 27A
        // invoke('copy_descriptor').then((res) => {
        //     store.commit('setTest', `copying descriptor from setupCD dump to sensitive dir ${res}`)
        //     }).catch((e) => {
        //         store.commit('setTest', `error copying descriptor: ${e}`)
        //     })           
        //make sure sensitive contains everything it should before packup()
        invoke('packup').then((res) => {
            store.commit('setTest', `packing up sensitive info ${res}`)
            }).catch((e) => {
                store.commit('setTest', `error packing up sensitive info: ${e}`)
            })        
        //refresh setup CD with latest .iso 
        invoke('refresh_setup_cd').then((res)=>{
            store.commit('setTest', `refreshing setup CD ${res}`)
            this.loading = false
            }).catch((e)=>{
                store.commit('setTest', `refresh setup CD error ${e}`)
            })     
        //update the setup step
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            console.log('success')
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
    },
}
</script>

