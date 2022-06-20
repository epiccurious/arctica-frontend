<template>
<div class="page">
    <Header title="DVD 3 Backup" subtitle="Please remove CD 3 and insert DVD 3."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted DVD 3.</label>
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
  name: 'Setup32',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 3 to DVD 3')
            this.$router.push({ path: '/setup/33' })
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

