<template>
<div v-if="this.loading ==true">
<Loader />
</div>
<div v-else class="page">
    <header>
        <h1>SD 2 creation complete</h1>
        <h2>Please power off this machine, remove SD 2, insert SD 3, and power on the machine.</h2>
    </header> 

</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke


export default {
  name: 'Setup14b',
  components: {
    Loader,
  },
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
    },
    mounted(){
        this.loading = true
        store.commit('setLoadMessage', 'Copying the setup CD...')
        //copy everything from the setup CD to ramdisk
        invoke('copy_setup_cd').then((res) => {
            store.commit('setTest', `reading setup CD ${res}`)
            store.commit('setLoadMessage', 'Creating Bitcoin Wallet...')
            //create xpriv and xpub
            invoke('generate_store_key_pair', {number: this.currentSD}).then((res)=>{
                    store.commit('setTest', `Generating Wallet: ${res}`)
                    store.commit('setLoadMessage', 'Distributing privacy keys...')
                    //distribute 2 shards onto sd 2 from setupCD dir
                    invoke('distribute_shards_sd2').then((res)=>{
                            store.commit('setTest', `distributing 2 shards to SD card ${res}`)
                            store.commit('setLoadMessage', 'Installing dependencies...')
                            //install wodim & ssss
                            invoke('install_sd_deps').then((res) => {
                                    store.commit('setTest', `installing SD dependencies ${res}`)
                                    store.commit('setLoadMessage', 'Refreshing setup CD...')
                                        //refresh setup CD with latest .iso 
                                        invoke('refresh_setup_cd').then((res)=>{
                                            store.commit('setTest', `refreshing setup CD ${res}`)
                                            store.commit('setLoadMessage', 'Updating application state...')
                                            //update setupstep state on sd card
                                            invoke('async_write', {name: 'setupStep', value: this.setupStep}).then((res) => {
                                                store.commit('setTest', `config set to new values setupStep: ${this.setupStep} res:${res}`)
                                                this.loading = false
                                                }).catch((e) => {
                                                    store.commit('setTest', `async write error: ${e}`)
                                                })
                                        }).catch((e)=>{
                                            store.commit('setTest', `refresh setup CD error ${e}`)
                                            })
                                }).catch((e) => {
                                    store.commit('setTest', `install SD deps error: ${e}`)
                                })
                        }).catch((e)=>{
                            store.commit('setTest', `distributing 2 shards error ${e}`)
                        })
                }).catch((e)=>{
                    store.commit('setTest', `create wallet error ${e}`)
                })
            }).catch((e) => {
                store.commit('setTest', `error reading setup CD: ${e}`)
            })
            },
    data(){
        return{
            currentSD: '2',
            setupStep: '9',
            loading: false,
        }
    },
    computed: {
        test(){
      return store.getters.getTest
    }
    },
}
</script>

