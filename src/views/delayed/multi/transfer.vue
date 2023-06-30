<template>
    <div v-if="this.loading == true">
      <Loader/>
      </div>
    <div v-else class="page">
        <header>
            <h1>Please insert a Transfer CD</h1>
            <h2>This is a blank CD that you will destroy after sending your transaction.</h2>
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
  name: 'delayedTransfer',
  components: {
    Loader,
  },
    methods: {
        acknowledge(){
            this.loading=true
            let progressStr = null
            if(this.delayedDecay == "zero"|| this.delayedDecay == "one"){
                progressStr = "1of5"
            }else if(this.delayedDecay == "two"){
                progressStr = "2of5"
            }else if(this.delayedDecay == "three"){
                progressStr = "3of5"
            }else if(this.delayedDecay == "four"){
                progressStr = "4of5"
            }else if(this.delayedDecay == "five"){
                progressStr = "5of5"
            }
            store.commit('setLoadMessage', 'Exporting PSBT...')
            invoke('export_psbt', {progress: progressStr}).then((res) => {
                store.commit('setDebug', `Exporting PSBT: ${res}`)
                this.loading=false
                let progress = progressStr + "success"
                //send the user to the correct success screen after export is complete
                this.$router.push({name: progress})
            })
            .catch((e) => {
                store.commit('setDebug', `Error Exporting PSBT: ${e}`)
                store.commit('setErrorMessage', `Error exporting PSBT. Error code: DelayedTransfer Response: ${e}`)
                this.$router.push({ name: 'Error' })
            })
        },
                warn(){
        },

    },
    computed:{
        currentHW(){
            return store.getters.getcurrentHW
        },
        delayedDecay(){
            return store.getters.getDelayedDecay
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

    
   
    
    