<template>
    <div v-if="this.loading ==true">
    <Loader />
    </div>
    <div v-else class="page">
        <header>
        <h1>DVD 4 Backup</h1>
        <h2>Please remove CD 4 and insert DVD 4.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted DVD 4.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 4 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'
import Loader from '@/components/loader'
const invoke = window.__TAURI__.invoke

export default {
  name: 'Setup36',
  components: {
        Loader,
      },
    methods: {
        acknowledge(){
            this.loading = true
            store.commit('setLoadMessage', 'creating backup...')
            //burn backup ISO
            invoke('make_backup', {number: "4"}).then((res) => {
                this.loading = false
                store.commit('setTest', `making and burning backup iso ${res}`)
                this.$router.push({ name: 'Setup37' })
                }).catch((e) => {
                    store.commit('setTest', `error making and burning backup iso: ${e}`)
                    store.commit('setErrorMessage', `Error making backup Error code: Setup36-1 Response: ${e}`)
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
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>



