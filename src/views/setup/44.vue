<template>
    <div v-if="this.loading ==true">
    <Loader />
    </div>
    <div v-else class="page">
        <header>
        <h1>DVD/M-DISC 6 Backup</h1>
        <h2>Please remove CD 6 and insert DVD/M-DISC 6.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted DVD/M-DISC 6.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentHW == 6 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>
<ProgressBar/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup44',
  components: {
    Loader,
    ProgressBar
  },
    methods: {
        acknowledge(){
            this.loading = true
            store.commit('setLoadMessage', 'creating backup...')
            //burn backup ISO
            invoke('make_backup', {number: "6"}).then((res) => {
                this.loading = false
                store.commit('setDebug', `making and burning backup iso ${res}`)
                this.$router.push({ name: 'Setup45' })
                }).catch((e) => {
                    store.commit('setDebug', `error making and burning backup iso: ${e}`)
                    store.commit('setErrorMessage', `Error making backup Error code: Setup44-1 Response: ${e}`)
                    this.$router.push({ name:'Error' })
                })
                    },
        warn(){
        },
    },
    data(){
        return{
            checkbox: false,
            loading: false,
        }
    },
        computed:{
        currentHW(){
            return store.getters.getcurrentHW
        }
    }
}
</script>



