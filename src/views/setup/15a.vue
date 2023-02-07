<!-- User will be automatically brought to this screen by a text file present on SD 3 which informs arctica to redirect the user to this page (state variable setup2)-->

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
  name: 'Setup15a',
  components: {
    Loader,
  },
    methods: {
        acknowledge(){
        this.loading = true
        store.commit('setLoadMessage', 'Reading Setup CD...')
        invoke('read_cd').then((res) => {
          store.commit('setTest', `invoking read_cd: ${res}`)
          let resArray = res.split("\n")
          store.commit('setTest', `response Array: ${resArray}`)
          for(let i = 0; i < resArray.length; i ++){
            let it = resArray[i].split("=")
            store.commit('setTest', `for loop number: ${i+1}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            //check for setup CD
            if (String(it[0]).toUpperCase() == 'TYPE' && String(it[1]).toUpperCase() == 'SETUPCD'){
              store.commit('setSetupCD', true)
              store.commit('setTest', `Set up CD detected, boolean set to true ${store.getters.getSetupCD}`)
              this.loading = false
              this.$router.push({ name:'Setup15b' })
              break
            }
            else{
              store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
            }
        }
        //fallback in case user did not insert correct disc
        this.loading = false
    })
        .catch((e)=> {
          store.commit('setTest', `error reading setup CD: ${e}`)
          store.commit('setErrorMessage', 'Error reading setup CD Error code Setup15a-3')
          this.$router.push({ name:'Error' })
        })
        },

        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        return{
            checkbox: false,
            loading: false,
        }
    },
    computed:{
      setupCD(){
        return store.getters.getSetupCD
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
                store.commit('setErrorMessage', 'Error starting bitcoin daemon Error code Setup15a-1')
                this.$router.push({ name:'Error' })
              })
          })
        .catch((e)=> {
          store.commit('setTest', `mount internal error: ${e}`)
          store.commit('setErrorMessage', 'Error mounting internal disk Error code Setup15a-2')
          this.$router.push({ name:'Error' })
          })
          }
}
</script>

