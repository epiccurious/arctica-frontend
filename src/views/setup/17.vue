<template>
  <div v-if="this.loading ==true">
  <Loader />
  </div>
  <div v-else class="page">
      <header>
        <h1>SD 4 creation complete</h1>
        <h2>Please power off this machine, remove SD 4, insert SD 5, and power on the machine.</h2> 
      </header> 
  
  </div>
  
  </template>
  
  <script>
  import store from '../../store.js'
  import Loader from '@/components/loader'
  const invoke = window.__TAURI__.invoke
  
  
  export default {
    name: 'Setup17',
    components: {
      Loader,
    },
      mounted(){
        this.loading = true
        store.commit('setLoadMessage', 'Copying the setup CD...')
        //copy everything from the setup CD to ramdisk
        invoke('copy_cd_to_ramdisk').then((res) => {
            store.commit('setDebug', `reading setup CD ${res}`)
            store.commit('setLoadMessage', 'Creating Bitcoin Wallet...')
            //create xpriv and xpub
            invoke('generate_store_key_pair', {number: this.currentSD}).then((res)=>{
                    store.commit('setDebug', `Generating Wallet: ${res}`)
                    store.commit('setLoadMessage', 'Distributing privacy keys...')
                    //distribute 2 shards onto sd 4 from setupCD dir
                    invoke('distribute_shards_sd4').then((res)=>{
                            store.commit('setDebug', `distributing 2 shards to SD card ${res}`)
                            store.commit('setLoadMessage', 'Installing dependencies...')
                            //install wodim & ssss
                            invoke('install_sd_deps').then((res) => {
                                    store.commit('setDebug', `installing SD dependencies ${res}`)
                                    store.commit('setLoadMessage', 'Refreshing setup CD...')
                                        //refresh setup CD with latest .iso 
                                        invoke('refresh_cd').then((res)=>{
                                            store.commit('setDebug', `refreshing setup CD: ${res}`)
                                            store.commit('setLoadMessage', 'Packing up sensitive info...')
                                            invoke('packup').then((res)=>{
                                                store.commit('setDebug', `packing up sensitive info: ${res}`)
                                                store.commit('setLoadMessage', 'Updating application state...')
                                                //update setupstep state on sd card
                                                invoke('async_write', {name: 'setupStep', value: this.setupStep}).then((res) => {
                                                    store.commit('setDebug', `config set to new values setupStep: ${this.setupStep} res:${res}`)
                                                    this.loading = false
                                                }).catch((e) => {
                                                    store.commit('setDebug', `async write error: ${e}`)
                                                    store.commit('setErrorMessage', `Error with async write Error code: Setup17-1 Response: ${e}`)
                                                    this.$router.push({ name:'Error' })
                                                })
                                            }).catch((e) => {
                                                    store.commit('setDebug', `packup error: ${e}`)
                                                    store.commit('setErrorMessage', `Error packing up Error code: Setup17-2 Response: ${e}`)
                                                    this.$router.push({ name:'Error' })
                                                })
                                        }).catch((e)=>{
                                            store.commit('setDebug', `refresh setup CD error: ${e}`)
                                            store.commit('setErrorMessage', `Error refreshing setup CD Error code: Setup17-3 Response: ${e}`)
                                            this.$router.push({ name:'Error' })
                                            })
                                }).catch((e) => {
                                    store.commit('setDebug', `install SD deps error: ${e}`)
                                    store.commit('setErrorMessage', `Error installing SD dependencies Error code: Setup17-4 Response: ${e}`)
                                    this.$router.push({ name:'Error' })
                                })
                    }).catch((e)=>{
                        store.commit('setDebug', `distributing 2 shards error: ${e}`)
                        store.commit('setErrorMessage', `Error distributing 2 shards Error code: Setup17-5 Response: ${e}`)
                        this.$router.push({ name:'Error' })
                    })
            }).catch((e)=>{
                store.commit('setDebug', `create wallet error ${e}`)
                store.commit('setErrorMessage', `Error creating wallet Error code: Setup17-6 Response: ${e}`)
                this.$router.push({ name:'Error' })
            })
        }).catch((e) => {
            store.commit('setDebug', `error reading setup CD: ${e}`)
            store.commit('setErrorMessage', `Error reading setup CD Error code: Setup17-7 Response: ${e}`)
            this.$router.push({ name:'Error' })
        })
        },
      data(){
          return{
              currentSD: '4',
              setupStep: '11',
              loading: false,
          }
      },

  }
  </script>