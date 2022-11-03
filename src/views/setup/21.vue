<template>
<div class="page">
    <header>
        <h1>Insert the Set up CD</h1>
        <h2>Please insert the CD labelled "set up"</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the Set up CD.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox && this.setupCD == true" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup21',
    methods: {
        acknowledge(){
        this.loading = true
        invoke('read_setup_cd').then((res) => {
            store.commit('setTest', `invoking read_setup_cd: ${res}`)
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
                    this.$router.push({ name:'Setup22' })
                    break
                }
                else{
                    store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
                }
            }
         })
        .catch((e)=> {
          store.commit('setTest', `error reading setup CD: ${e}`)
        })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    },
    computed:{
        setupCD(){
            return store.getters.getSetupCD
        },
        test(){
            return store.getters.getTest
        }
    }
}
</script>

