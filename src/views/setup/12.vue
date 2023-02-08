<!-- User will be automatically brought to this screen by a text file present on SD 1 which informs arctica to redirect the user to this page (state variable setup1)-->

<template>
<div v-if="this.loading == true">
  <Loader/>
</div>
<div v-else class="page">
    <header>
        <h1>Please insert the set up CD</h1>
        <h2>Insert the set up CD to continue.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the set up CD.</label>
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
  name: 'Setup12',
  components: {
    Loader,
  },
    methods: {
        acknowledge(){
            this.loading = true
            store.commit('setLoadMessage', 'Creating Bitcoin wallet...')
            invoke('generate_store_key_pair', {number: this.currentSD}).then((res)=>{
                store.commit('setTest', `Generating Wallet: ${res} IIIIIIIII`)
                //create 4 simulated time machine key pairs
                //eventually this will be where user receives 4 time machine pubkeys from BPS
                invoke('generate_store_simulated_time_machine_key_pair', {number: '1'}).then((res)=>{
                    store.commit('setTest', `Generating simulated time machine key pair 1: ${res}`)
                    invoke('generate_store_simulated_time_machine_key_pair', {number: '2'}).then((res)=>{
                        store.commit('setTest', `Generating simulated time machine key pair 2: ${res}`)
                        invoke('generate_store_simulated_time_machine_key_pair', {number: '3'}).then((res)=>{
                            store.commit('setTest', `Generating simulated time machine key pair 3: ${res}`)
                            invoke('generate_store_simulated_time_machine_key_pair', {number: '4'}).then((res)=>{
                                store.commit('setTest', `Generating simulated time machine key pair 4: ${res}`)
                                store.commit('setLoadMessage', 'Creating setup CD...')
                                //create & burn setup CD
                                invoke('create_setup_cd').then((res)=>{
                                    store.commit('setTest', `invoking create setup cd ${res}`)
                                    this.loading = false
                                    this.$router.push({ name:'Setup13' }) 
                                }).catch((e)=>{
                                    store.commit('setTest', `create setup cd error: ${e}`)
                                    store.commit('setErrorMessage', `Error creating setup CD Error code: Setup12-1 Response: ${e}`)
                                    this.$router.push({ name:'Error' })
                                })

                            })
                            .catch((e)=>{
                                store.commit('setTest', `error generating time machine key pair 4 ${e}`)
                                store.commit('setErrorMessage', `Error creating time machine key Error code: Setup12-2 Response: ${e}`)
                                this.$router.push({ name:'Error' })
                            })  
                        })
                        .catch((e)=>{
                            store.commit('setTest', `error generating time machine key pair 3 ${e}`)
                            store.commit('setErrorMessage', `Error creating time machine key Error code: Setup12-3 Response: ${e}`)
                            this.$router.push({ name:'Error' })
                        })  
                    })
                    .catch((e)=>{
                        store.commit('setTest', `error generating time machine key pair 2 ${e}`)
                        store.commit('setErrorMessage', `Error creating time machine key Error code: Setup12-4 Response: ${e}`)
                        this.$router.push({ name:'Error' })
                    })  
                })
                })
                .catch((e)=>{
                    store.commit('setTest', `error generating time machine key pair 1 ${e}`)
                    store.commit('setErrorMessage', `Error creating time machine key Error code: Setup12-5 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })  
            .catch((e)=>{
                store.commit('setTest', `error generating wallet ${e}`)
                store.commit('setErrorMessage', `Error generating wallet Error code: Setup12-6 Response: ${e}`)
                this.$router.push({ name:'Error' })
        })             
        },
        warn(){
        },
    },
    data(){
        return{
            currentSD: '1',
            setupStep: '8',
            checkbox: false,
            loading: false,
        }
    },
        computed:{
        test(){
            return store.getters.getTest
        }
    },
    mounted(){
        //mount and symlink internal .bitcoin dirs
        invoke('mount_internal').then((res)=> {
              store.commit('setTest', `invoking mount internal ${res}`)
              //start bitcoind with networking disabled
              invoke('start_bitcoind_network_off').then((res)=> {
                store.commit('setTest', `starting bitcoin daemon with networking disabled: ${res}`)
              })
              .catch((e)=> {
                store.commit('setTest', `error starting bitcoin daemon error: ${e}`)
                store.commit('setErrorMessage', `Error starting bitcoin daemon Error code: Setup12-7 Response: ${e}`)
                this.$router.push({ name:'Error' })
              })
          })
        .catch((e)=> {
            store.commit('setTest', `mount internal error: ${e}`)
            store.commit('setErrorMessage', `Error mounting internal Error code: Setup12-8 Response: ${e}`)
            this.$router.push({ name:'Error' })
          })
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
                store.commit('setErrorMessage', `Error with async write Error code: Setup12-9 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
    }
}
</script>

