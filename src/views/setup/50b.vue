<template>
    <div v-if="this.loading == true">
  <Loader/>
</div>
<div v-else class="page">
    <header>
        <h1>Congratulations. You have successfully completed set up.</h1>
        <h2>Now we must wait for Bitcoin Core to finish it's initial sync.</h2>
        <h2>This computer should remain on and unlocked until the time chain has finished it's sync.</h2> 
        <h2>This can take anywhere from a few hours to a few weeks depending on your internet connection.</h2>
        <h3>Progress: X% complete.</h3>
    </header>
        <div class="btn_container"> 
            <button v-if="this.btcCoreHealthy == true" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke
import Loader from '@/components/loader'


export default {
  name: 'Setup50b',
  components: {
    Loader
  },
    methods: {
        acknowledge(){
            this.$router.push({ name: 'Setup51' })
        },
        warn(){
        },
    },
    computed:{
        btcCoreHealthy(){
            return store.getters.getBTCCoreHealthy
        },
    },
    data(){
        return{
            loading: false,
            setupStep: '0',
        }
    },
    mounted(){
        //update HW setupstep to 0
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            store.commit('setDebug', `updating setupStep to ${this.setupStep}`)
            })
            .catch((e) => {
                store.commit('setDebug', `async write error: ${e}`)
                store.commit('setErrorMessage', `Error with async write Error code: Setup50b-1 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
        store.commit('setLoadMessage', 'Mounting internal drive...')
        invoke('mount_internal').then((res) => {
            store.commit('setDebug', `Mounting internal drive ${res}`)
            this.loading = true
            store.commit('setLoadMessage', 'Syncing Bitcoin Blockchain...')
            //start the bitcoin daemon
            invoke('start_bitcoind').then((res) => {
                store.commit('setDebug', `Starting the Bitcoin daemon ${res}`)
                })
                .catch((e) => {
                    store.commit('setDebug', `error starting the bitcoin daemon: ${e}`)
                    store.commit('setErrorMessage', `Error starting Bitcoin Daemon Error code: Setup50b-2 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })
        })
        .catch((e) => {
            store.commit('setDebug', `error mounting internal drive: ${e}`)
            store.commit('setErrorMessage', `Error mounting internal Error code: Setup50b-3 Response: ${e}`)
            this.$router.push({ name:'Error' })
        })



    },
}
</script>
