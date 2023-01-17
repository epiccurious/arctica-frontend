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
                store.commit('setTest', `creating and filling backup dir ${res}`)
                //make and burn backup ISO
                invoke('make_backup', {number: "7"}).then((res) => {
                    this.loading = false
                    store.commit('setTest', `making and burning backup iso ${res}`)
                    this.$router.push({ name: 'Setup48' })
                    }).catch((e) => {
                        store.commit('setTest', `error making and burning backup iso: ${e}`)
                    })
                }).catch((e) => {
                    store.commit('setTest', `error creating and filling backup dir: ${e}`)
                })
                    },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    mounted(){
        this.loading = true 
        store.commit('setLoadMessage', 'Copying Setup CD...')   
        //copy everything from the setup CD to ramdisk
        invoke('copy_cd_to_ramdisk').then((res) => {
            store.commit('setTest', `reading setup CD ${res}`)
            store.commit('setLoadMessage', 'Unpacking sensitive data...')
                //unpack() the encrypted dir
                invoke('unpack').then((res) => {
                            store.commit('setTest', `unpacking sensitive info ${res}`)
                            store.commit('setLoadMessage', 'Copying Descriptors...')
                            //copy the descriptors in ramdisk to sensitive dir
                            invoke('copy_descriptor').then((res) => {
                                store.commit('setTest', `copying descriptor from setupCD dump to sensitive dir ${res}`)
                                store.commit('setLoadMessage', 'Packing up sensitive data...')
                                //make sure sensitive contains everything it should before packup()
                                invoke('packup').then((res) => {
                                    store.commit('setTest', `packing up sensitive info ${res}`)
                                    store.commit('setLoadMessage', 'Ejecting CD...')
                                    //Ejecting CD
                                    invoke('eject_cd').then((res)=>{
                                        store.commit('setTest', `ejecting CD ${res}`)
                                        this.loading = false
                                        }).catch((e)=>{
                                            store.commit('setTest', `ejecting CD error ${e}`)
                                        })   
                                    }).catch((e) => {
                                        store.commit('setTest', `error packing up sensitive info: ${e}`)
                                    })        
                                }).catch((e) => {
                                    store.commit('setTest', `error copying descriptor: ${e}`)
                                })     
                            }).catch((e) => {
                                store.commit('setTest', `error unpacking sensitive info: ${e}`)
                            })       
            }).catch((e) => {
                store.commit('setTest', `error reading setup CD: ${e}`)
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