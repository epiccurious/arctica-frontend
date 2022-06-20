<template>
<div class="page">
    <Header title="DVD 1 Backup" subtitle="Please remove CD 1 and insert DVD 1."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted DVD 1.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup24',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, moving all info from SD 1 to DVD 1')
            this.$router.push({ path: '/setup/25' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>

