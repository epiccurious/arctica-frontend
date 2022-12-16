<template>
<div v-if="this.loading == true">
  <Loader/>
</div>
<div v-else class="page">
        <header>
            <h1>Log in</h1>
            <h2>Please enter your password below.</h2>
        </header>
            <div class="form_container">
                <form>
                    <label>Enter Password</label>
                   <br><input v-model="password1" type="password" required placeholder="Your secret password">

                    <br><label>Confirm Password</label>
                   <br><input v-model="password2" type="password" required placeholder="Your secret password">

                <div class="checkbox_container">
                    <input type="checkbox" v-model="checkbox" name="checkbox">
                    <label for="checkbox">I have inserted a transfer CD for login.</label>
                </div>

                </form>

                <div class="btn_container"> 
                    <button v-if="(password1 == password2 && password1 != '' && password2 != '' ) || checkbox == true " @click="login()" class="btn">Continue</Button>
                    <button v-else @click="warn()" class="btn3">Continue</Button>
                    <button @click="passwordRecovery()" class="btn2">I Forgot my Password</button>
                </div>
            </div>
            
</div>  
</template>

<!-- Currently, the two passwords inputs just need to match in order for the user to login -->

<script>
import store from '../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Login',
  components: {
    Loader
  },
    methods: {
        login(){
            if(this.checkbox == true){
                this.loading = true
                store.commit('setLoadMessage', 'Reading CD...')
                store.commit('setTest', 'checking inserted CD for masterkey')
                invoke('copy_cd_to_ramdisk').then((res) => {
                    store.commit('setTest', `copying CD to ramdisk: ${res}`)
                    store.commit('setLoadMessage', 'checking for masterkey...')
                    invoke('check_for_masterkey').then((res) => {
                        if(res == 'masterkey found'){
                        invoke('unpack').then((res) => {
                        this.loading = false
                        store.commit('setTest', `successfully unpacked, sending user to dashboard: ${res}`)
                        this.$router.push({ name: 'dashboard' })
                        })
                        .catch((e) => {
                        store.commit('setTest', `error unpacking: ${e}`)
                        this.loading = false
                        })
                    }
                    else{
                        store.commit('setTest', 'no masterkey was found on the CD')
                        this.loading = false
                    }
                    })
                        .catch((e) => {
                        store.commit('setTest', `error checking for masterkey ${e}`)
                    })
                })
                .catch((e) => {
                    store.commit('setTest', `error copying CD to ramdisk ${e}`)
                })
            }
            //use this condition for when user has a bricked bps relationship but has not indicated they already have a transfer CD with a masterkey 
            else if(this.bpsBricked == true){
                this.$router.push({ name: 'BPS_Bricked' })
            }
            //use this condition for when user is logging in normally with password & BPS
            else{
                this.$router.push({ name: 'dashboard' })
                }
        },
        passwordRecovery(){
            console.log('Password Recovery Clicked')
            this.$router.push({ name: 'Recovery' })
        },
        warn(){
            console.log('user trying to proceed without password match, need form correction')
        },
    },
 computed: {},
 data(){
     return{
         password1: '',
         password2: '',
         bpsBricked: null,
         checkbox: false,
         loading: false,
        
     }
 },
 mounted(){
    this.bpsBricked = store.getters.getBPSBricked
    if(this.bpsBricked == true){
        this.$router.push({ name: 'BPS_Bricked' })
    }
 }
}
</script>


