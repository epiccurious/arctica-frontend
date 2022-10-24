<template>
<div v-if="this.loading == true">
  <Loader/>
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
        invoke('async_write', {name: 'setupStep', value: this.setupStep}).then(() => {
            console.log('success')
            })
            .catch((e) => {
                store.commit('setTest', `async write error: ${e}`)
            })
        invoke('read_setup_cd').then((res) => {
          store.commit('setTest', `invoking read_setup_cd: ${res}`)
          this.loading = false
          let resArray = res.split("\n")
          store.commit('setTest', `response Array: ${resArray}`)
          for(let i = 0; i < resArray.length; i ++){
            let it = resArray[i].split("=")
            store.commit('setTest', `for loop number: ${i+1}; key: ${String(it[0]).toUpperCase()} value: ${it[1]}`)
            //check for setup CD
            if (String(it[0]).toUpperCase() == 'TYPE' && String(it[1]).toUpperCase() == 'SETUPCD'){
              store.commit('setSetupCD', true)
              store.commit('setTest', `Set up CD detected`)
            }
            else{
              store.commit('setTest', `fall back inside for loop triggered; key: ${String(it[0]).toUpperCase()} value: ${String(it[1]).toUpperCase()}`)
            }
        }
    })
        .catch((e)=> {
          store.commit('setTest', `error reading setup CD: ${e}`)
        })
        //need to create bitcoin wallets here for SD 4 and export all pubkeys onto setup CD                 

    },
    data(){
        return{
            setupStep: '11',
            loading: false,
        }
    },
    computed: {
        test(){
      return store.getters.getTest
    }
    },
}
</script>
