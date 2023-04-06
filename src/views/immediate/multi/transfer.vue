<template>
<div v-if="this.loading == true">
  <Loader/>
  </div>
<div v-else class="page">
    <header>
        <h1>Please insert a Transfer CD</h1>
        <h2>This is a blank CD(RW) that you will destroy after sending your transaction.</h2>
    </header>
    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted a transfer CD.</label>
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
import store from '../../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke


export default {
  name: 'immediateTransfer',
  components: {
    Loader,
  },
    methods: {
        acknowledge(){
            //for now the transaction is already signed automatically and we will push the user to the 1of2success screen...in the future probably want to add
            //a confirmation screen and instead push the user to sign1of2
            this.loading=true
            store.commit('setLoadMessage', 'Exporting PSBT...')
            invoke('export_psbt', {progress: "1of2"}).then((res) => {
                store.commit('setDebug', `Exporting PSBT: ${res}`)
                this.loading=false
                this.$router.push({name: '1of2success'})
            })
            .catch((e) => {
                store.commit('setDebug', `Error Exporting PSBT: ${e}`)
                store.commit('setErrorMessage', `Error exporting PSBT. Error code: ImmediateTransfer Response: ${e}`)
                this.$router.push({ name: 'Error' })
            })
        },
                warn(){
        },

    },
    computed:{
        currentSD(){
            return store.getters.getCurrentSD
        },
        psbtFound(){
            return store.getters.getPSBTFound
        }
    },
    data(){
        return{
            checkbox:false,
            loading: false
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
