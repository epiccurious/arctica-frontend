<template>
  <div v-if="this.loading ==true">
  <Loader />
  </div>
  <div v-else class="page">
      <header>
        <h1>SD 4 creation complete</h1>
        <h2>Please power off this machine, remove SD 4, insert SD 5, and power on the machine.</h2> 
      </header> 
          <div class="btn_container"> 
              <button @click="acknowledge()" class="btn">Ok</Button> 
          </div>
  
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
      methods: {
          acknowledge(){
              console.log('user ack, close application')
          },
      },
      mounted(){
          this.loading = true    
          //copy everything from the setup CD to ramdisk
          invoke('copy_setup_cd').then((res) => {
              store.commit('setTest', `reading setup CD ${res}`)
              }).catch((e) => {
                  store.commit('setTest', `error reading setup CD: ${e}`)
              })
  
          //create xpriv and xpub
          invoke('create_wallet').then((res)=>{
                  store.commit('setTest', `creating simulated wallet ${res}`)
              }).catch((e)=>{
                  store.commit('setTest', `create wallet error ${e}`)
              })
  
          //distribute 2 shards onto sd from setupCD dir
          invoke('distribute_2_shards').then((res)=>{
                  store.commit('setTest', `distributing 2 shards to SD card ${res}`)
              }).catch((e)=>{
                  store.commit('setTest', `distributing 2 shards error ${e}`)
              })
              
          //install wodim & ssss
          invoke('install_sd_deps').then((res) => {
                  store.commit('setTest', `installing SD dependencies ${res}`)
                      //refresh setup CD with latest .iso 
                      invoke('refresh_setup_cd').then((res)=>{
                          store.commit('setTest', `refreshing setup CD ${res}`)
                          this.loading = false
                      }).catch((e)=>{
                          store.commit('setTest', `refresh setup CD error ${e}`)
                          })
              }).catch((e) => {
                  store.commit('setTest', `install SD deps error: ${e}`)
              })
  
  
          //update setupstep state on sd card
          invoke('async_write', {name: 'setupStep', value: this.setupStep}).then((res) => {
              store.commit('setTest', `config set to new values setupStep: ${this.setupStep} res:${res}`)
              }).catch((e) => {
                  store.commit('setTest', `async write error: ${e}`)
              })
  
              },
      data(){
          return{
              setupStep: '11',
              loading: false,
          }
      },

  }
  </script>