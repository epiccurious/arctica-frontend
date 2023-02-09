<template>
<div class="page">
    <header>
        <h1>Congratulations. You have successfully completed set up.</h1>
        <h2>Now we must wait for Bitcoin Core to finish it's initial sync.</h2>
        <h2>This computer should remain on and unlocked until the time chain has finished it's sync.</h2> 
        <h2>This can take anywhere from a few hours to a few weeks depending on your internet connection.</h2>
        <h3>Progress: {{ syncProgress }}% complete.</h3>
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

export default {
  name: 'Setup50b',
  components: {
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
            setupStep: '0',
            syncProgress: 0
        }
    },
    mounted(){
        //update sd card setupstep to 0
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            store.commit('setDebug', `updating setupStep to ${this.setupStep}`)
            })
            .catch((e) => {
                store.commit('setDebug', `async write error: ${e}`)
                store.commit('setErrorMessage', `Error with async write Error code: Setup50b-1 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
        
        invoke('mount_internal').then((res) => {
            store.commit('setDebug', `Mounting internal drive ${res}`)
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
        //check sync status of chain every 10 seconds
        // while (this.btcCoreHealthy == false) {
        //     setTimeout(invoke('sync_status').then((res) => {
        //         store.commit('setDebug', `Checking sync status of Bitcoin Timechain: ${res}`)
        //         let percentage = Math.floor(res)
        //         if(percentage != 100) {
        //         store.commit('setDebug', 'Not fully synced')
        //         this.syncProgress = percentage
        //         } else{
        //             store.commit('setBTCCoreHealthy', true)
        //         }
        //     }).catch((e) =>{
        //         store.commit('setDebug', `error checking sync status: ${e}`)
        //         store.commit('setErrorMessage', `Error cehcking sync status Error code: setup50b-4 Response: ${e}` )
        //         this.$router.push({ name:'Error' })
        //     })
        //     ), 10000
        // }


    },
}
</script>
