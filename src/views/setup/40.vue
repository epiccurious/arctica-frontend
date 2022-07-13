<template>
<div class="page">
    <header>
        <h1>DVD 5 Backup</h1>
        <h2>Please remove CD 5 and insert DVD 5.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox" @click="checkSD()">
                <label for="checkbox">I have inserted DVD 5.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="this.currentSD == 'five' && checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import store from '../../store.js'

export default {
  name: 'Setup40',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 5 to DVD 5')
            this.$router.push({ name: 'Setup41' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        checkSD(){
            currentSD = store.getters.getCurrentSD
        }

    },
    data(){
        return{
            checkbox: false,
            currentSD: store.getters.getCurrentSD
        }
    }
}
</script>

