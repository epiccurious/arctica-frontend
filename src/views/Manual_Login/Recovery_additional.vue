<template>
  <div v-if="this.loading== true" class="page">
    <header>
      <h1>Manual Recovery In Progress.</h1>
      <h2>Please Wait...</h2>
    </header>
  </div>

  <div v-else class="page">
    <header>
      <h1>Please reinsert the transfer CD</h1>
    </header>
    <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted a transfer CD.</label>
                </div>
        </form>
    <div class="btn_container"> 
        <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
        <button v-else class="btn3">Proceed</Button>
          </div>

  </div>
</template>

<script>
import store from '../../store.js'
const invoke = window.__TAURI__.invoke

export default {
  name: 'RecoveryAdditional',
    methods: {
        acknowledge(){
            console.log('user ack, recovery initiating')
        },
        help(){
            console.log('fetching help')
        }
    },
    computed: {
      numberToRecover(){
        return store.getters.getNumberToRecover
      },
      
    },
    mounted(){
      //collecting shards and refreshing recovery cd
      store.commit('setLoadMessage', 'collecting privacy key shards...')
      invoke('collect_shards').then((res)=>{
        store.commit('setTest', `collecting shards and refreshing recovery cd: ${res}`)
        this.loading=false
        this.$router.push({ name:'RecoveryEvaluate' })
      })
      .catch((e)=>{
        store.commit('setTest', `error collecting shards ${e}`)
      })
    },
    data() {
    return {
    loading: true,
    checkbox: false,
    }
  },
  }
</script>

