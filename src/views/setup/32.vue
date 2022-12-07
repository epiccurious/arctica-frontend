<template>
    <div v-if="this.loading ==true">
    <Loader />
    </div>
    <div v-else class="page">
        <header>
        <h1>DVD 3 Backup</h1>
        <h2>Please remove CD 3 and insert DVD 3.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted DVD 3.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 3 && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
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
  name: 'Setup32',
  components: {
        Loader,
      },
    methods: {
        acknowledge(){
            this.loading = true
            store.commit('setLoadMessage', 'Creating backup...')
            //burn backup ISO
            invoke('make_backup', {number: "3"}).then((res) => {
                this.loading = false
                store.commit('setTest', `making and burning backup iso ${res}`)
                this.$router.push({ name: 'Setup33' })
                }).catch((e) => {
                    store.commit('setTest', `error making and burning backup iso: ${e}`)
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
        currentSD(){
            return store.getters.getCurrentSD
        }
    }
}
</script>



