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
                store.commit('setDebug', 'checking inserted CD for masterkey')
                invoke('copy_cd_to_ramdisk').then((res) => {
                    store.commit('setDebug', `copying CD to ramdisk: ${res}`)
                    store.commit('setLoadMessage', 'checking for masterkey...')
                    invoke('check_for_masterkey').then((res) => {
                        if(res == 'masterkey found'){
                        store.commit('setDebug', 'Masterkey Found in Ramdisk')
                        invoke('unpack').then((res) => {
                            store.commit('setDebug', `successfully unpacked: ${res}`)
                            store.commit('setLoadMessage', 'Loading Immediate wallet...')
                            invoke('load_wallet', {wallet: "immediate", sdcard: this.currentSD.toString()}).then((res) =>{
                                store.commit('setDebug', `Loaded Immediate Wallet: ${res}`)
                                store.commit('setLoadMessage', 'Loading delayed wallet...')
                                invoke('load_wallet', {wallet: "delayed", sdcard: this.currentSD.toString()}).then((res) =>{
                                    store.commit('setDebug', `Loaded Delayed Wallet: ${res}`)
                                    store.commit('setLoadMessage', 'Packing up sensitive info...')
                                    invoke('packup').then((res) => {
                                        store.commit('setDebug', `successfully packed up: ${res}`)
                                        store.commit('setDebug', 'Login succesful, checking CD for psbt')
                                        store.commit('setLoadMessage', 'checking for PSBT...')
                                        //TODO
                                        //if a different permutation (ex 1of2) is found send the user the dashboard w/ popup or to a screen that informs to continue signing or discard
                                        invoke('read_cd').then((res) => {
                                                store.commit('setDebug', `invoking read_cd: ${res}`)
                                                let resArray = res.split("\n")
                                                store.commit('setDebug', `response Array: ${resArray}`)
                                                //check the config values
                                                for(let i = 0; i < resArray.length; i ++){
                                                    let it = resArray[i].split("=")
                                                    store.commit('setDebug', `for loop number: ${i+1}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
                                                    //if config value is set to 2of2, user has completed signing and is ready to broadcast
                                                    if(String(it[0]).toUpperCase() == 'PSBT' && String(it[1]).toUpperCase() == '2OF2'){
                                                    this.loading = false
                                                    store.commit('setDebug', `Transfer CD detected: 2OF2, sending user to broadcast screen`)
                                                    this.$router.push({ name: 'immediateBroadcast' })
                                                    break
                                                    }
                                                    //if no valid config value is found assume user is not here to broadcast a signed tx
                                                    else{
                                                        this.loading = false
                                                        store.commit('setDebug', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
                                                        store.commit('setDebug', `User is not ready to broadcast. Sending to dashboard.`)
                                                        this.$router.push({ name: 'dashboard' })
                                                    }
                                                }
                                            }).catch((e)=>{
                                                store.commit('setDebug', `error reading CD: ${e}`)
                                                store.commit('setErrorMessage', `Error reading CD: Login9 Response: ${e}`)
                                                this.$router.push({ name: 'Error' })  
                                            })
                                    }).catch((e)=>{
                                        store.commit('setDebug', `error packing up sensitive: ${e}`)
                                        store.commit('setErrorMessage', `Error Packing up Sensitive Error Code: Login8 Response: ${e}`)
                                        this.$router.push({ name: 'Error' })  
                                    })
                                })
                                .catch((e)=>{
                                    store.commit('setDebug', `error loading delayed wallet: ${e}`)
                                    store.commit('setErrorMessage', `Error Loading delayed Wallet Error Code: Login7 Response: ${e}`)
                                    this.$router.push({ name: 'Error' }) 
                                })

                            })
                            .catch((e)=>{
                                store.commit('setDebug', `error loading immediate wallet: ${e}`)
                                store.commit('setErrorMessage', `Error Loading immediate Wallet Error Code: Login6 Response: ${e}`)
                                this.$router.push({ name: 'Error' }) 
                            })        
                        })
                        .catch((e) => {
                        store.commit('setDebug', `error unpacking: ${e}`)
                        store.commit('setErrorMessage', `Error unpacking sensitive Error code: Login2 Response: ${e}`)
                        this.$router.push({ name: 'Error' }) 
                        })
                        }
                        else{
                            //eventually need to add front end feedback here prompting the user on what to do next rather than send to fatal error screen
                            store.commit('setDebug', 'no masterkey was found on the CD')
                            store.commit('setErrorMessage', `Error no masterkey found on CD Error code: Login5 No Response Message`)
                            this.$router.push({ name: 'Error' }) 
                        }
                    })
                        .catch((e) => {
                        store.commit('setDebug', `error checking for masterkey ${e}`)
                        store.commit('setErrorMessage', `Error Checking for masterkey Error code: Login3 Response: ${e}`)
                        this.$router.push({ name: 'Error' }) 
                    })
                })
                .catch((e) => {
                    //eventually need to add front end feedback here prompting the user on what to do next rather than send to fatal error screen
                    store.commit('setDebug', `error copying CD to ramdisk ${e}`)
                    store.commit('setErrorMessage', `Error copying CD to Ramdisk Error code: Login4 Response: ${e}`)
                    this.$router.push({ name: 'Error' }) 
                })
            }
            //use this condition for when user has a bricked bps relationship but has not indicated they already have a transfer CD with a masterkey 
            else if(this.bpsBricked == true){
                store.commit('setDebug', 'Sending user to BPS_Bricked')
                this.$router.push({ name: 'BPS_Bricked' })
            }
            //use this condition for when user is logging in normally with password & BPS
            else{
                store.commit('setDebug', 'error, cannot login with password, not yet implemented, try setupCD, recoveryCD, or transferCD')
            }
        },
        passwordRecovery(){
            store.commit('setDebug', 'Sending user to Recovery')
            this.$router.push({ name: 'Recovery' })
        },
        warn(){
        },
    },
 computed: {
    currentSD(){
        return store.getters.getCurrentSD
      },
 },
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
        store.commit('setDebug', 'Sending user to BPS_Bricked')
        this.$router.push({ name: 'BPS_Bricked' })
    }
 }
}
</script>


