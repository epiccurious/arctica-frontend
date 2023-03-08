<template>
    <div v-if="this.loading ==true">
    <Loader />
    </div>
    <div v-else class="page">
        <header>
        <h1>CD 7 Backup</h1>
        <h2>Please remove the Set up CD and insert CD 7.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 7.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 7 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup47b',
  components: {
        Loader,
      },
      methods: {
        acknowledge(){
            this.loading = true
            store.commit('setLoadMessage', 'Creating backup...')
            //make a backup dir and fill it with a backup of the current SD card
            invoke('create_backup', {number: "7"}).then((res) => {
                store.commit('setDebug', `creating and filling backup dir ${res}`)
                //make and burn backup ISO
                invoke('make_backup', {number: "7"}).then((res) => {
                    this.loading = false
                    store.commit('setDebug', `making and burning backup iso ${res}`)
                    this.$router.push({ name: 'Setup48' })
                    }).catch((e) => {
                        store.commit('setDebug', `error making and burning backup iso: ${e}`)
                        store.commit('setErrorMessage', `Error making backup Error code: Setup47b-1 Response: ${e}`)
                        this.$router.push({ name:'Error' })
                    })
                }).catch((e) => {
                    store.commit('setDebug', `error creating and filling backup dir: ${e}`)
                    store.commit('setErrorMessage', `Error making backup Error code: Setup47b-2 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })
                    },
        warn(){
        },
    },
    mounted(){
        this.loading = true
        store.commit('setLoadMessage', 'starting bitcoin daemon...')
            //start bitcoind with networking disabled
            invoke('start_bitcoind_network_off').then((res)=> {
                store.commit('setDebug', `starting bitcoin daemon with networking disabled: ${res}`)
                store.commit('setLoadMessage', 'Copying Setup CD...')
                //copy everything from the setup CD to ramdisk
                invoke('copy_cd_to_ramdisk').then((res) => {
                    store.commit('setDebug', `reading setup CD ${res}`)
                    store.commit('setLoadMessage', 'Creating Descriptors...')
                    //create the descriptors and export to the setupCD
                    invoke('create_descriptor', {sdcard: "7"}).then((res) => {
                        store.commit('setDebug', `creating descriptors ${res}`)
                        store.commit('setLoadMessage', 'Unpacking sensitive data...')
                                    //unpack() the encrypted dir on SD 7
                                    invoke('unpack').then((res) => {
                                        store.commit('setDebug', `unpacking sensitive info ${res}`)
                                        store.commit('setLoadMessage', 'Packing up sensitive data...')
                                        //make sure sensitive contains everything it should before packup()
                                        invoke('packup').then((res) => {
                                            store.commit('setDebug', `packing up sensitive info ${res}`)
                                        }).catch((e) => {
                                            store.commit('setDebug', `error packing up sensitive info: ${e}`)
                                            store.commit('setErrorMessage', `Error packing up Error code: Setup23-4 Response: ${e}`)
                                            this.$router.push({ name:'Error' })
                                            })        
                                    }).catch((e) => {
                                        store.commit('setDebug', `error unpacking sensitive info: ${e}`)
                                        store.commit('setErrorMessage', `Error unpacking Error code: Setup23-5 Response: ${e}`)
                                        this.$router.push({ name:'Error' })
                                        })
                    }).catch((e) => {
                        store.commit('setDebug', `error creating descriptors: ${e}`)
                        store.commit('setErrorMessage', `Error creating descriptors Error code: Setup23-6 Response: ${e}`)
                        this.$router.push({ name:'Error' })
                        })
                }).catch((e) => {
                    store.commit('setDebug', `error reading setup CD: ${e}`)
                    store.commit('setErrorMessage', `Error reading setup CD Error code: Setup23-7 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                    }) 
            }).catch((e)=> {
                store.commit('setDebug', `error starting bitcoin daemon error: ${e}`)
                store.commit('setErrorMessage', `Error starting bitcoin daemon Error code: Setup23-8 Response: ${e}`)
                this.$router.push({ name:'Error' })
              })
    },
    data(){
        return{
            checkbox: false,
            loading: false,
        }
    },
        computed:{
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>