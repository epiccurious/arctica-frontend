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
            //need to create bitcoin wallets here for SD 1 and export all pubkeys onto setup CD                 
            invoke('create_wallet').then((res)=>{
                store.commit('setTest', `creating simulated wallet ${res}`)
                store.commit('setLoadMessage', 'Creating setup CD...')
                //create the setup CD
                invoke('create_setup_cd').then((res)=>{
                        store.commit('setTest', `invoking create setup cd ${res}`)
                        this.loading = false
                        this.$router.push({ name:'Setup13' }) 
                    }).catch((e)=>{
                        store.commit('setTest', `create setup cd error: ${e}`)
                    })
            }).catch((e)=>{
                store.commit('setTest', `create wallet error ${e}`)
            })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        return{
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
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
    }
}
</script>

